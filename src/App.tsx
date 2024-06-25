import NameInfo from "./components/NameInfo";
import SchoolInfo from "./components/SchoolInfo";

function App() {
  return (
    <>
      <h1>CV Creator</h1>
      <div className="app-container">
        <div className="input-container">
          <NameInfo />
          <SchoolInfo />
        </div>
      </div>
    </>
  );
}

export default App;
