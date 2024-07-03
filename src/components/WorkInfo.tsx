import Input from "./Input";
import TrashBin from "../assets/delete.svg?react";
import { WorkInfoData } from "../App";

function WorkInfo({
  data,
  removeForm,
  updateWorkInfo,
}: {
  data: WorkInfoData;
  removeForm: () => void;
  updateWorkInfo: (data: WorkInfoData) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let updatedWorkInfo: WorkInfoData;
    if (e.target.id.startsWith("company")) {
      const companyName = e.target.value;
      updatedWorkInfo = {
        ...data,
        companyName,
      };
    } else if (e.target.id.startsWith("position")) {
      const position = e.target.value;
      updatedWorkInfo = {
        ...data,
        position,
      };
    } else if (e.target.id.startsWith("dateStart")) {
      const dateStart = e.target.value;
      updatedWorkInfo = {
        ...data,
        dateStart,
      };
    } else {
      const dateEnd = e.target.value;
      updatedWorkInfo = {
        ...data,
        dateEnd,
      };
    }
    updateWorkInfo(updatedWorkInfo);
  };

  return (
    <>
      <div className="sectionContainer">
        <Input
          text="Company name:"
          type="text"
          onChange={handleChange}
          id={`company${data.id}`}
          value={data.companyName}
        />
        <Input
          text="Position:"
          type="text"
          onChange={handleChange}
          id={`position${data.id}`}
          value={data.position}
        />
        <div className="dateContainer">
          <Input
            text="Work start date:"
            type="date"
            onChange={handleChange}
            id={`dateStart${data.id}`}
            value={data.dateStart}
          />
          <Input
            text="Work end date:"
            type="date"
            onChange={handleChange}
            id={`dateEnd${data.id}`}
            value={data.dateEnd}
          />
        </div>
        <button className="removeBtn" onClick={removeForm}>
          <TrashBin />
        </button>
      </div>
    </>
  );
}

export default WorkInfo;
