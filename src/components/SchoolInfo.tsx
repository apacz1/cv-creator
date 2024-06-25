import Input from "./Input";

function SchoolInfo() {
  return (
    <div className="schoolInfo">
      <Input className="school" text="School Name: " id="school" type="text" />
      <Input
        className="studyTitle"
        text="Title of Study: "
        id="studyTitle"
        type="text"
      />
      <Input
        className="dateStart"
        text="School start date: "
        id="schoolDateStart"
        type="date"
      />
      <Input
        className="dateEnd"
        text="School end date: "
        id="schoolDateEnd"
        type="date"
      />
    </div>
  );
}

export default SchoolInfo;
