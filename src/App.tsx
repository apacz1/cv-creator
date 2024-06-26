import NameInfo from "./components/NameInfo";
import SchoolInfo from "./components/SchoolInfo";
import WorkInfo from "./components/WorkInfo";

function App() {
  return (
    <>
      <h1>CV Creator</h1>
      <div className="appContainer">
        <NameInfo />
        <SchoolInfo />
        <WorkInfo />
      </div>
    </>
  );
}

export default App;
