import React, { use, useState } from 'react';
import StudentsCard from './StudentsCard';

const StudentsInfoCards = ({dataPromise}) => {
    const studentsData = use(dataPromise);
      const studentDataForCard = studentsData.map((studentsData) => {
        const sdfc = {
          student_id: studentsData.student_id,
          name: studentsData.name,
          image: studentsData.image,
          physics: studentsData.marks.physics,
          chemistry: studentsData.marks.chemistry,
          math: studentsData.marks.math,
          biology: studentsData.marks.biology,
          english: studentsData.marks.english,
          ict: studentsData.marks.ict,
        };
        const avgMarks =
          (sdfc.physics +
            sdfc.chemistry +
            sdfc.math +
            sdfc.ict +
            sdfc.english +
            sdfc.biology) /
          6;
        sdfc.avg = Math.round(avgMarks);
        return sdfc;
      });

      const [searchQuery, setSearchQuery] = useState("");
      
    return (
      <>
        <h2 className='text-center text-3xl md:text-4xl font-semibold text-emerald-700 my-6 w-11/12 mx-auto'>ABC College Students Results</h2>
        <input onChange={(e)=> setSearchQuery(e.target.value)} className='border rounded px-2 w-70 py-1 flex justify-center mb-6 mx-auto shadow-md focus:ring-2 focus:ring-emerald-500 transition-all' type="text" placeholder='Search Student...' />
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 w-11/12 mx-auto'>
          {
              studentDataForCard.filter(student => student.name.toLowerCase().includes(searchQuery.trim().toLocaleLowerCase())).map(studentData => <StudentsCard key={studentData.student_id} studentData={studentData}></StudentsCard>)
          }
        </div>
      </>
    );
};

export default StudentsInfoCards;