import Input from "./Input";

function SchoolInfo() {
  return (
    <div className="sectionContainer">
      <h2>Education: </h2>
      <Input text="School Name:" id="school" type="text" />
      <Input text="Title of Study:" id="studyTitle" type="text" />
      <div className="dateContainer">
        <Input text="School start date:" id="schoolDateStart" type="date" />
        <Input text="School end date:" id="schoolDateEnd" type="date" />
      </div>
    </div>
  );
}

export default SchoolInfo;
