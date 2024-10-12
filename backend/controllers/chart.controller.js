import { filterData } from "../utils/excelUtils.js";
import { loadData } from "../utils/excelUtils.js";

const data = loadData();
export const getBarChartData = async (req, res) => {
  const { filters } = req.query;
  const filteredData = filterData(data, filters);

  const result = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };
  filteredData.forEach((row) => {
    result.A += row.A;
    result.B += row.B;
    result.C += row.C;
    result.D += row.D;
    result.E += row.E;
    result.F += row.F;
  });

  res.json(result);
};

export const getLineChartData = async (req, res) => {
  const { feature, age, gender, startDate, endDate } = req.query;
  const filteredData = filterData(data, {
    feature,
    age,
    gender,
    startDate,
    endDate,
  });

  const result = filteredData.map((row) => ({
    day: row.Day,
    value: row[feature],
  }));

  res.json(result);
};
