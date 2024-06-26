import Input from "./Input";

function WorkInfo() {
  return (
    <div className="sectionContainer">
      <h2>Work experience: </h2>
      <Input text="Company name:" id="work" type="text" />
      <Input text="Position:" id="position" type="text" />
      <div className="dateContainer">
        <Input text="Work start date:" id="workDateStart" type="date" />
        <Input text="Work end date:" id="workDateEnd" type="date" />
      </div>
    </div>
  );
}

export default WorkInfo;
