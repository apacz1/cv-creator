import { Form } from "../App";

function Preview({ data, edit }: { data: Form; edit: () => void }) {
  return (
    <>
      <div className="cvContainer">
        <h1>
          {data.personalInfo.name} {data.personalInfo.lastName}
        </h1>
        <h2 className="cvEducation">Education</h2>
        {data.educationInfo.map((school) => (
          <div key={school.id} className="infoWrapper">
            <div className="infoContainer">
              <h3>{school.schoolName}</h3>
              <p>{school.titleOfStudy}</p>
            </div>
            <div className="dateContainer">
              <p style={{ whiteSpace: "pre", textAlign: "center" }}>
                {`
                ${school.dateStart}
                -
                ${school.dateEnd}
                `}
              </p>
            </div>
          </div>
        ))}
        <h2 className="cvWork">Work Experience</h2>
        {data.workInfo.map((company) => (
          <div key={company.id} className="infoWrapper">
            <div className="infoContainer">
              <h3>{company.companyName}</h3>
              <p>{company.position}</p>
            </div>
            <div className="dateContainer">
              <p style={{ whiteSpace: "pre", textAlign: "center" }}>
                {`
                ${company.dateStart}
                -
                ${company.dateEnd}
                `}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="editBtn" onClick={edit}>
        Edit
      </button>
    </>
  );
}

export default Preview;
