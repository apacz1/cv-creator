import Input from "./Input";
import { PersonalInfoData } from "../App";

function NameInfo({
  data,
  updatePersonalInfo,
}: {
  data: PersonalInfoData;
  updatePersonalInfo: (data: PersonalInfoData) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "name") {
      const name = e.target.value;
      const updatedPersonalInfoData: PersonalInfoData = {
        ...data,
        name,
      };

      updatePersonalInfo(updatedPersonalInfoData);
    } else {
      const lastName = e.target.value;
      const updatedPersonalInfoData: PersonalInfoData = {
        ...data,
        lastName,
      };

      updatePersonalInfo(updatedPersonalInfoData);
    }
  };
  return (
    <>
      <h2>Personal information: </h2>
      <div className="sectionContainer">
        <Input
          text="Name:"
          type="text"
          value={data.name}
          onChange={handleChange}
          id="name"
        />
        <Input
          text="Last Name:"
          type="text"
          value={data.lastName}
          onChange={handleChange}
          id="lastName"
        />
      </div>
    </>
  );
}

export default NameInfo;
