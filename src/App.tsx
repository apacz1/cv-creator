import { useState } from "react";
import NameInfo from "./components/NameInfo";
import SchoolInfo from "./components/SchoolInfo";
import WorkInfo from "./components/WorkInfo";
import AddButton from "./components/AddButton";
import { v4 as uuidv4 } from "uuid";
import Preview from "./components/Preview";

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
  const [preview, setPreview] = useState(false);
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

  const edit = () => {
    setPreview(false);
  };

  const updatePersonalInfo = (data: PersonalInfoData) => {
    setFormData({ ...formData, personalInfo: data });
  };

  const updateEducationInfo = (data: EducationInfoData) => {
    const updateSchoolInfo = formData.educationInfo.map((item) =>
      item.id === data.id ? data : item
    );
    setFormData({ ...formData, educationInfo: updateSchoolInfo });
  };

  const updateWorkInfo = (data: WorkInfoData) => {
    const updateWorkInfo = formData.workInfo.map((item) =>
      item.id === data.id ? data : item
    );
    setFormData({ ...formData, workInfo: updateWorkInfo });
  };

  const addEducationForm = () => {
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

  const addWorkForm = () => {
    const tempWork = [...formData.workInfo];
    tempWork.push({
      id: uuidv4(),
      companyName: "",
      position: "",
      dateStart: "",
      dateEnd: "",
    });
    setFormData({ ...formData, workInfo: tempWork });
  };

  const removeEducationById = (idToRemove: string) => {
    const filteredEducation = formData.educationInfo.filter((item) => {
      return item.id !== idToRemove;
    });
    setFormData({ ...formData, educationInfo: filteredEducation });
  };

  const removeWorkById = (idToRemove: string) => {
    const filteredWork = formData.workInfo.filter((item) => {
      return item.id !== idToRemove;
    });
    setFormData({ ...formData, workInfo: filteredWork });
  };

  if (preview === false) {
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
          <AddButton onClick={addEducationForm} />
          <h2>Work experience: </h2>
          {formData.workInfo.map((workInfo) => (
            <WorkInfo
              key={workInfo.id}
              data={workInfo}
              removeForm={() => removeWorkById(workInfo.id)}
              updateWorkInfo={updateWorkInfo}
            />
          ))}
          <AddButton onClick={addWorkForm} />
          <button
            className="generate"
            onClick={() => {
              return setPreview(true);
            }}
          >
            Generate CV
          </button>
        </div>
      </>
    );
  } else return <Preview data={formData} edit={edit} />;
}

export default App;
