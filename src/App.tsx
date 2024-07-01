import { useState } from "react";
import NameInfo from "./components/NameInfo";
import SchoolInfo from "./components/SchoolInfo";
import WorkInfo from "./components/WorkInfo";
import AddButton from "./components/AddButton";
import { v4 as uuidv4 } from "uuid";

export type PersonalInfoData = {
  name: string;
  lastName: string;
};

export type EducationInfoData = {
  id: string;
  schoolName: string;
  titleOfStudy: string;
  dateStart: string;
  dateEnd: string;
};

export type WorkInfoData = {
  id: string;
  companyName: string;
  position: string;
  dateStart: string;
  dateEnd: string;
};

export type Form = {
  personalInfo: PersonalInfoData;
  educationInfo: EducationInfoData[];
  workInfo: WorkInfoData[];
};

function App() {
  const [formData, setFormData] = useState<Form>({
    personalInfo: {
      name: "",
      lastName: "",
    },
    educationInfo: [
      {
        id: uuidv4(),
        schoolName: "",
        titleOfStudy: "",
        dateStart: "",
        dateEnd: "",
      },
    ],
    workInfo: [
      {
        id: uuidv4(),
        companyName: "",
        position: "",
        dateStart: "",
        dateEnd: "",
      },
    ],
  });

  const updatePersonalInfo = (data: PersonalInfoData) => {
    setFormData({ ...formData, personalInfo: data });
  };

  const updateEducationInfo = (data: EducationInfoData) => {
    const updateSchoolInfo = formData.educationInfo.map((item) =>
      item.id === data.id ? data : item
    );
    console.log(updateSchoolInfo);
    setFormData({ ...formData, educationInfo: updateSchoolInfo });
  };

  const addForm = () => {
    const tempEducation = [...formData.educationInfo];
    tempEducation.push({
      id: uuidv4(),
      schoolName: "",
      titleOfStudy: "",
      dateStart: "",
      dateEnd: "",
    });
    setFormData({ ...formData, educationInfo: tempEducation });
  };

  const removeEducationById = (idToRemove: string) => {
    const filteredEducation = formData.educationInfo.filter((item) => {
      return item.id !== idToRemove;
    });
    console.log(filteredEducation);
    setFormData({ ...formData, educationInfo: filteredEducation });
  };

  return (
    <>
      <h1>CV Creator</h1>
      <div className="appContainer">
        <NameInfo
          data={formData.personalInfo}
          updatePersonalInfo={updatePersonalInfo}
        />
        <h2>Education: </h2>
        {formData.educationInfo.map((educationInfo) => (
          <SchoolInfo
            key={educationInfo.id}
            data={educationInfo}
            removeForm={() => removeEducationById(educationInfo.id)}
            updateSchoolInfo={updateEducationInfo}
          />
        ))}
        <AddButton onClick={addForm} />
        <WorkInfo />
        <AddButton onClick={addForm} />
        <button
          className="generate"
          onClick={() => {
            console.log(formData);
          }}
        >
          Generate CV
        </button>
      </div>
    </>
  );
}

export default App;
