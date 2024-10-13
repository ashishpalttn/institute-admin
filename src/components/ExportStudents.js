import axios from 'axios';
import CustomButtonWrapper from './CustomButtonWrapper';
const BASE_URL = `${process.env.REACT_APP_API_URL}/event-registration`

export const ExportStudents = ({ eventName }) => {
  const downloadExcel = async (eventName) => {
    try {
      const response = await axios.get(`${BASE_URL}/export-students/${eventName}`, {
        responseType: 'blob', // Important for downloading files
      });
      
      // Create a URL for the Excel file and trigger a download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `Students_${eventName}.xlsx`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading Excel:', error);
    }
  };

  return (
    <div>
      <CustomButtonWrapper
      onClick={() => downloadExcel(eventName)}
      label={"Export Students"}
      />
    </div>
  );
};
