import Input from "./Input";

function NameInfo() {
  return (
    <>
      <h2>Personal information: </h2>
      <div className="sectionContainer">
        <Input text="Name:" type="text" />
        <Input text="Last Name:" type="text" />
      </div>
    </>
  );
}

export default NameInfo;
