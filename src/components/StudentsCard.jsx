import React from "react";

const StudentsCard = ({ studentData }) => {

  const performanceLabel =
    studentData.avg <= 30 ? "Critical" :
    studentData.avg <= 50 ? "Needs Improvement" :
    studentData.avg <= 79 ? "Average" :
    studentData.avg <= 90 ? "Very Good" : "Outstanding";

  const bgColor =
    studentData.avg <= 30 ? "bg-red-100 text-red-600 border-red-200":
    studentData.avg <= 50 ? "bg-orange-100 text-orange-600 border-orange-200":
    studentData.avg <= 79 ? "bg-blue-100 text-blue-600 border-blue-200":
    studentData.avg <= 90 ? "bg-green-100 text-green-600 border-green-200" : "bg-emerald-100 text-emerald-700 border-emerald-200";

  return (
    <div className="border-4 border-orange-300 bg-range rounded-lg flex items-center gap-2 p-3 bg-red-100">
      <div className="space-y-3 w-50">
        <h2 className="border inline-block px-2 rounded bg-green-200 border-green-300">
          Student Id: {studentData.student_id}
        </h2>
        <img className="rounded" src={studentData.image} alt="" />
      </div>
      <div className="w-full">
        <h2 className="text-xl font-semibold text-purple-500">
          Student Name: {studentData.name}
        </h2>
        <div className="text-black/75 font-semibold bg-yellow-100 rounded p-1">
          <p>Math Marks: {studentData.math}</p>
          <p>Physics Marks: {studentData.physics}</p>
          <p>ICT Marks: {studentData.ict}</p>
          <p>English Marks: {studentData.english}</p>
          <p>Biology Marks: {studentData.biology}</p>
          <p>Chemistry Marks: {studentData.chemistry}</p>
          <p className="text-red-400 border rounded px-2 py-1 mt-2 inline-block bg-red-50">
            Avg Marks: {studentData.avg}
          </p>
          <br />
          <p className={`${bgColor} border rounded px-2 py-1 mt-2 inline-block font-semibold`}>
            Performance: {performanceLabel}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentsCard;
