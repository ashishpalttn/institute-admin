import React, { useState, useEffect } from 'react';

const CreateEditDialog = ({ open, onClose, columns, data, onSubmit }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Initialize form data with the current student data or empty values for new records
    if (data) {
      const initialData = columns.reduce((acc, col) => {
        acc[col.fieldKey] = data[col.fieldKey] || '';
        return acc;
      }, {});
      setFormData(initialData);
    }
  }, [data, columns]);

  const handleChange = (e, fieldKey) => {
    setFormData({ ...formData, [fieldKey]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose(); // Close dialog after submission
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className=" relative w-full max-w-xl mx-4 my-8 bg-white rounded-lg shadow-lg max-h-[90vh]">
      <div className="">
        <h2 className="p-6 text-xl font-bold mb-4">{data ? 'Edit Record' : 'Create Record'}</h2>
        <form onSubmit={handleSubmit}>
          <div className='px-6 max-h-[65vh]  overflow-y-auto'>
          {columns.filter(column=>!column.hideEdit).map((col) => (
            <div key={col.fieldKey} className="mb-4">
              <label className="block text-gray-700 mb-1">{col.fieldName}</label>
              <input
                type="text"
                value={formData[col.fieldKey]}
                onChange={(e) => handleChange(e, col.fieldKey)}
                className="w-full p-2 border rounded"
              />
            </div>
          ))}
          </div>
          <div className="flex justify-end p-6">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 mr-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Submit
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEditDialog;
