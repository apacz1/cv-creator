import Input from "./Input";
import AddButton from "./AddButton";
import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function SchoolInfo() {
  const [forms, setForms] = useState<string[]>([uuidv4()]);

  const addForm = () => {
    setForms([...forms, uuidv4()]);
  };

  const removeForm = (idToRemove: string) => {
    const filteredForms = forms.filter((id) => {
      return id !== idToRemove;
    });
    console.log(filteredForms);
    setForms(filteredForms);
  };

  return (
    <div className="sectionContainer">
      <h2>Education: </h2>

      {forms.map((id) => {
        return (
          <Fragment key={id}>
            <Input text="School Name:" type="text" />
            <Input text="Title of Study:" type="text" />
            <div className="dateContainer">
              <Input text="School start date:" type="date" />
              <Input text="School end date:" type="date" />
            </div>
            <button
              className="removeBtn"
              onClick={() => {
                removeForm(id);
              }}
            >
              -
            </button>
          </Fragment>
        );
      })}
      <AddButton onClick={addForm} />
    </div>
  );
}

export default SchoolInfo;
