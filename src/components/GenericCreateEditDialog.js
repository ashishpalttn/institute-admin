import React, { useState, useEffect } from "react";
import GenericButton from "./GenericButton";
import GenericInputField from "./GenericInputField";
import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";

const GenericCreateEditDialog = ({ open, onClose, columns, row, onSubmit }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Initialize form data with the current student data or empty values for new records
    if (row) {
      const initialData = columns.reduce((acc, col) => {
        acc[col.fieldKey] = row[col.fieldKey] || "";
        return acc;
      }, {});
      setFormData(initialData);
    }
  }, [row, columns]);

  const handleChange = (e, fieldKey) => {
    setFormData({ ...formData, [fieldKey]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose(); // Close dialog after submission
  };

  const handleClose = () => {
    setFormData({})
    onClose()
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className=" relative w-full max-w-xl mx-4 my-8 bg-white rounded-lg shadow-lg max-h-[90vh]">
        <div className="">
          <h2 className="p-6 text-2xl font-bold mb-4">
            {row ? "Edit Record" : "Create Record"}
          </h2>
          <form>
            <div className="px-6 max-h-[65vh]  overflow-y-auto">
              {columns
                .filter((column) => !column.hideEdit)
                .map(({ fieldKey, fieldName, type = "text" }) => (
                  <div key={fieldKey} className="mb-4">
                    {(type === "text" || type === "date" || type ==='tel') && (
                      <div>
                        {/* <label className="block text-gray-700 mb-1">
                          {fieldName}
                        </label> */}
                        <GenericInputField
                          name={fieldKey}
                          type={type}
                          value={formData[fieldKey]}
                          onChange={(e)=>handleChange(e, fieldKey)}
                          placeholder={fieldName}
                        />
                      </div>
                    )}
                    {type === "radioGroup" && (
                      <div>
                        <Typography component="label" variant="subtitle1">
                          Event Type
                        </Typography>
                        <RadioGroup
                          row
                          name="eventType"
                          value={type}
                          onChange={handleChange}
                          sx={{ mb: 2 }}
                        >
                          <FormControlLabel
                            value="single"
                            control={<Radio />}
                            label="Single"
                          />
                          <FormControlLabel
                            value="group"
                            control={<Radio />}
                            label="Group"
                          />
                        </RadioGroup>
                      </div>
                    )}
                  </div>
                ))}
            </div>
            <div className="gap-2 flex justify-end p-6">
              <GenericButton
                label={"Cancel"}
                onClick={handleClose}
                className="h-10"
              />
              <GenericButton label={"Save"} onClick={handleSubmit} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GenericCreateEditDialog;
