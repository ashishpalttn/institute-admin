import React, { useState } from "react";

const GenericAdmissionWithTableComponent = ({
  componentTitle,
  formTitle,
  formFields,
  tableTitle,
  tableColumns,
  handleSaveClick,
  tableData
}) => {
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState(
    formFields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (Object.values(formData).some((field) => field === "")) {
      alert("Please fill in all fields.");
      return;
    }
    setEntries([...entries, { ...formData, id: Date.now() }]);
    setFormData(formFields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {}));
    handleSaveClick(formData)
  };

  const handleCancel = () => {
    setFormData(formFields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {}));
  };

  const handleDelete = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const handleEdit = (id) => {
    const entryToEdit = entries.find((entry) => entry.id === id);
    setFormData(entryToEdit);
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">{componentTitle}</h1>
      <div className="grid grid-cols-2 gap-6">
        {/* Form Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">{formTitle}</h2>
          <form>
            <div className="grid grid-cols-2 gap-4">
              {formFields?.map(({ label, name, type = "text" }) => (
                <div key={name} className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-4 gap-4">
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>

        {/* List Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">{tableTitle}</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">SN</th>
                {tableColumns?.map((col) => (
                  <th key={col.key} className="border border-gray-300 p-2">
                    {col.label}
                  </th>
                ))}
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData?.map((entry, index) => (
                <tr key={entry.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-2 text-center">
                    {index + 1}
                  </td>
                  {tableColumns.map((col) => (
                    <td key={col.key} className="border border-gray-300 p-2">
                      {entry[col.key]}
                    </td>
                  ))}
                  <td className="border border-gray-300 p-2 flex gap-2 justify-center">
                    <button
                      onClick={() => handleEdit(entry.id)}
                      className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GenericAdmissionWithTableComponent;
