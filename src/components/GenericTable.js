import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const GenericTable = ({ columns, data, onEdit, onDelete }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleSort = (column) => {
    let direction = 'asc';
    if (sortConfig.key === column && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key: column, direction });
  };

  const sortedData = React.useMemo(() => {
    if (sortConfig.key) {
      return [...data].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return data;
  }, [data, sortConfig]);

  if (!data || data.length === 0) {
    return <p className="text-center p-4">No students registered for this event.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort(column.field)}
              >
                {column.header}
                {sortConfig.key === column.field && (
                  <span>
                    {sortConfig.direction === 'asc' ? ' ▲' : ' ▼'}
                  </span>
                )}
              </th>
            ))}
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedData.map((item, index) => (
            <tr key={index}>
              {columns.map((column, idx) => (
                <td key={idx} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {column.field === 'sn' ? index + 1 : item[column.field]}
                </td>
              ))}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <button
                  className="text-blue-500 hover:text-blue-700 mr-4"
                  onClick={() => onEdit(item)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => onDelete(item)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenericTable;
