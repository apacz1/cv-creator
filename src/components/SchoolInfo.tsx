import Input from "./Input";
import AddButton from "./AddButton";
import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TrashBin from "../assets/delete.svg?react";

function SchoolInfo() {
  const [forms, setForms] = useState<string[]>([uuidv4()]);

  const addForm = () => {
    setForms([...forms, uuidv4()]);
  };

  const removeForm = (idToRemove: string) => {
    const filteredForms = forms.filter((id) => {
      return id !== idToRemove;
    });
    setForms(filteredForms);
  };

  return (
    <>
      <h2>Education: </h2>
      {forms.map((id) => {
        return (
          <Fragment key={id}>
            <div className="sectionContainer">
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
                <TrashBin />
              </button>
            </div>
          </Fragment>
        );
      })}
      <AddButton onClick={addForm} />
    </>
  );
}

export default SchoolInfo;
