import xlsx from "xlsx";
import path from "path";

const __dirname = path.resolve();

export const loadData = () => {
  const workbook = xlsx.readFile(path.join(__dirname, "/data/data.xlsx"));
  const sheet = workbook.Sheets["Sheet3"];
  return xlsx.utils.sheet_to_json(sheet);
};

export const filterData = (data, filters) => {
  const { age, gender, startDate, endDate } = filters;
  return data.filter((row) => {
    const rowDate = new Date(row.Day);
    return (
      (!age || row.Age === age) &&
      (!gender || row.Gender === gender) &&
      (!startDate || rowDate >= new Date(startDate)) &&
      (!endDate || rowDate <= new Date(endDate))
    );
  });
};
