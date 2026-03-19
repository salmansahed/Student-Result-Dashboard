import './App.css'
import ResultsChart from './components/ResultsChart';
import StudentsInfoCards from './components/StudentsInfoCards'

const studentsResultsData = async() => {
  const student = await fetch("studentsResultsData.json");
  return student.json();
}
const dataPromise = studentsResultsData();

function App() {

  return (
    <>
      <StudentsInfoCards dataPromise={dataPromise}></StudentsInfoCards>
      <ResultsChart dataPromise={dataPromise}></ResultsChart>
    </>
  );
}

export default App
