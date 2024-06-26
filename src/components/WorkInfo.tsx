import AddButton from "./AddButton";
import Input from "./Input";

function WorkInfo() {
  return (
    <div className="sectionContainer">
      <h2>Work experience: </h2>
      <Input text="Company name:" type="text" />
      <Input text="Position:" type="text" />
      <div className="dateContainer">
        <Input text="Work start date:" type="date" />
        <Input text="Work end date:" type="date" />
      </div>
      <AddButton onClick={() => {}} />
    </div>
  );
}

export default WorkInfo;
