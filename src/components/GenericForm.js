import { useState } from "react";
import GenericInputField from "./GenericInputField";
import GenericButton from "./GenericButton";

const GenericForm = ({ formTitle, formFields, handleSave }) => {
  const [formData, setFormData] = useState(
    formFields.reduce(
      (acc, field) => ({ ...acc, [field.fieldKey]: "" }),
      {}
    )
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCancel = () => {
    setFormData(
      formFields.reduce(
        (acc, field) => ({ ...acc, [field.fieldKey]: "" }),
        {}
      )
    );
  };

  const onSave = () => {
    if (Object.values(formData).some((field) => field.fieldKey === "")) {
      alert("Please fill in all fields.");
      return;
    }
    setFormData(formFields.reduce((acc, field) => ({ ...acc, [field.fieldKey]: "" }), {}));
    handleSave(formData)

  };

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between">
            <h1 className="text-2xl font-bold mb-4 ">{formTitle}</h1>
            <div className="flex justify-end  gap-4">
              <GenericButton
              label = {"Cancel"}
              onClick={handleCancel}
              className="h-10"
              />
                <GenericButton
              label = {"Register"}
              onClick={onSave}
              className="h-10"
              />
          </div>
          </div>
        <form>
          <div className="grid grid-cols-3 gap-4">
            {formFields?.map(({ fieldName, fieldKey, type = "text" }) => (
              <GenericInputField
                name={fieldKey}
                type={type}
                value={formData[fieldKey]}
                onChange={handleInputChange}
                placeholder={fieldName}
              />
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default GenericForm;
