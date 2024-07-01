import Input from "./Input";
import TrashBin from "../assets/delete.svg?react";
import { EducationInfoData } from "../App";

function SchoolInfo({
  data,
  removeForm,
  updateSchoolInfo,
}: {
  data: EducationInfoData;
  removeForm: () => void;
  updateSchoolInfo: (data: EducationInfoData) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let updatedEducationInfo: EducationInfoData;
    if (e.target.id.startsWith("school")) {
      const schoolName = e.target.value;
      updatedEducationInfo = {
        ...data,
        schoolName,
      };
    } else if (e.target.id.startsWith("study")) {
      const titleOfStudy = e.target.value;
      updatedEducationInfo = {
        ...data,
        titleOfStudy,
      };
    } else if (e.target.id.startsWith("dateStart")) {
      const dateStart = e.target.value;
      updatedEducationInfo = {
        ...data,
        dateStart,
      };
    } else {
      const dateEnd = e.target.value;
      updatedEducationInfo = {
        ...data,
        dateEnd,
      };
    }
    updateSchoolInfo(updatedEducationInfo);
  };
  return (
    <>
      <div className="sectionContainer">
        <Input
          text="School Name:"
          type="text"
          onChange={handleChange}
          id={`school${data.id}`}
          value={data.schoolName}
        />
        <Input
          text="Title of Study:"
          type="text"
          onChange={handleChange}
          id={`study${data.id}`}
          value={data.titleOfStudy}
        />
        <div className="dateContainer">
          <Input
            text="School start date:"
            type="date"
            onChange={handleChange}
            id={`dateStart${data.id}`}
            value={data.dateStart}
          />
          <Input
            text="School end date:"
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

export default SchoolInfo;
