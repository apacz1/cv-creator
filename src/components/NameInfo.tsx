import Input from "./Input";

function NameInfo() {
  return (
    <div className="sectionContainer">
      <h2>Personal information: </h2>
      <Input text="Name:" id="name" type="text" />
      <Input text="Last Name:" id="lastName" type="text" />
    </div>
  );
}

export default NameInfo;
