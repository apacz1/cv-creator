import Input from "./Input";

function NameInfo() {
  return (
    <div className="nameInfo">
      <Input className="name" text="Name: " id="name" type="text" />
      <Input
        className="lastName"
        text="Last Name: "
        id="lastName"
        type="text"
      />
    </div>
  );
}

export default NameInfo;
