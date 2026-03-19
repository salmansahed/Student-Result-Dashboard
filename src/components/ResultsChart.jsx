import React, { use } from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const ResultsChart = ({ dataPromise }) => {
  const studentsData = use(dataPromise);
  const studetnDataForChart = studentsData.map((studentData) => {
    const sdfc = {
      student_id: studentData.student_id,
      name: studentData.name,
      image: studentData.image,
      physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry,
      math: studentData.marks.math,
      biology: studentData.marks.biology,
      english: studentData.marks.english,
      ict: studentData.marks.ict,
    };
    const avgMarks =
      (sdfc.physics +
        sdfc.chemistry +
        sdfc.math +
        sdfc.ict +
        sdfc.english +
        sdfc.biology) /
      6;
    sdfc.avg = avgMarks.toFixed(2);
    return sdfc;
  });
  console.log(studetnDataForChart);
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-3xl font-semibold text-center mt-20 mb-5">Student Result Chart</h1>
      <LineChart className="max-w-full h-100 bg-black rounded py-5 px-2" responsive data={studetnDataForChart}>
        <Line type={"monotone"} stroke="purple" dataKey={"english"}></Line>
        <Line type={"monotone"} stroke="blue" dataKey={"biology"}></Line>
        <Line type={"monotone"} stroke="red" dataKey={"physics"}></Line>
        <Line type={"monotone"} stroke="gold" dataKey={"ict"}></Line>
        <Line type={"monotone"} stroke="violet" dataKey={"chemistry"}></Line>
        <Line type={"monotone"} stroke="tomato" dataKey={"avg"}></Line>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default ResultsChart;
