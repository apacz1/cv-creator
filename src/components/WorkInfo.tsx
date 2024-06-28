import AddButton from "./AddButton";
import Input from "./Input";
import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TrashBin from "../assets/delete.svg?react";

function WorkInfo() {
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
      <h2>Work experience: </h2>
      {forms.map((id) => {
        return (
          <Fragment key={id}>
            <div className="sectionContainer">
              <Input text="Company name:" type="text" />
              <Input text="Position:" type="text" />
              <div className="dateContainer">
                <Input text="Work start date:" type="date" />
                <Input text="Work end date:" type="date" />
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

export default WorkInfo;
