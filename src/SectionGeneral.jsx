import Input from "./Input";
import { TextArea } from "./Input";
import AddButton from "./AddButton";

export default function SectionGeneral({ title, data, setData }) {
  // General Info Onchange handlers
  function handleName(e) {
    setData({
      ...data,
      generalInfo: { ...data.generalInfo, name: e.target.value },
    });
  }

  function handleEmail(e) {
    setData({
      ...data,
      generalInfo: { ...data.generalInfo, email: e.target.value },
    });
  }

  function handlePhone(e) {
    setData({
      ...data,
      generalInfo: { ...data.generalInfo, phone: e.target.value },
    });
  }

  // Educational Info onChange handlers
  function handleSchool(e) {
    const targetId = e.target.id;
    const targetObject = data.educationalInfo[targetId];
    targetObject.school = e.target.value;

    const newData = { ...data };
    newData.educationalInfo[targetId] = targetObject;

    setData(newData);
  }

  function handleTitle(e) {
    const targetId = e.target.id;
    const targetObject = data.educationalInfo[targetId];
    targetObject.title = e.target.value;

    const newData = { ...data };
    newData.educationalInfo[targetId] = targetObject;
    setData(newData);
  }

  function handleSchoolDate(e) {
    const targetId = e.target.id;
    const targetObject = data.educationalInfo[targetId];
    targetObject.dateCompleted = e.target.value;

    const newData = { ...data };
    newData.educationalInfo[targetId] = targetObject;
    setData(newData);
  }

  // Work Info onChange handlers
  function handleCompany(e) {
    setData({
      ...data,
      workInfo: { ...data.workInfo, company: e.target.value },
    });
  }

  function handlePosition(e) {
    setData({
      ...data,
      workInfo: { ...data.workInfo, position: e.target.value },
    });
  }

  function handleResponsibility(e) {
    setData({
      ...data,
      workInfo: { ...data.workInfo, responsibility: e.target.value },
    });
  }

  // Add section button functionality
  function addEducationSection() {
    const arrayLength = data.educationalInfo.length;
    const nextId = arrayLength;

    const newObject = {
      school: "",
      title: "",
      dateCompleted: "",
      id: nextId,
    };

    const newData = { ...data };
    newData.educationalInfo.push(newObject);

    setData(newData);
  }

  function addWorkSection() {
    const arrayLength = data.workInfo.length;
    const nextId = arrayLength;

    const newObject = {
      company: "",
      position: "",
      responsibility: "",
      id: nextId,
    };

    const newData = { ...data };
    newData.workInfo.push(newObject);

    setData(newData);
  }

  if (title === "General Info") {
    return (
      <div className="general-info-container">
        <h2>{title}</h2>
        <Input
          label={"Name"}
          type={"text"}
          value={data.generalInfo.name}
          onChange={handleName}
        />
        <Input
          label={"Email"}
          type={"email"}
          value={data.generalInfo.email}
          onChange={handleEmail}
        />
        <Input
          label={"Phone"}
          type={"number"}
          value={data.generalInfo.phone}
          onChange={handlePhone}
        />
      </div>
    );
  } else if (title === "Educational Experience") {
    return (
      <div className="educational-info-container">
        <h2>{title}</h2>
        {data.educationalInfo.map((item) => {
          return (
            <div key={item.id} className="education-block">
              <Input
                label={"School"}
                type={"text"}
                value={item.school}
                onChange={handleSchool}
                id={item.id}
              />
              <Input
                label={"Title"}
                type={"text"}
                value={item.title}
                onChange={handleTitle}
                id={item.id}
              />
              <Input
                label={"Completed Date"}
                type={"date"}
                value={item.dateCompleted}
                onChange={handleSchoolDate}
                id={item.id}
              />
            </div>
          );
        })}
        <AddButton sectionName={"education"} onClick={addEducationSection} />
      </div>
    );
  } else {
    return (
      <div className="work-info-container">
        <h2>{title}</h2>
        <Input
          label={"Company"}
          type={"text"}
          value={data.workInfo.company}
          onChange={handleCompany}
        />
        <Input
          label={"Position"}
          type={"text"}
          value={data.workInfo.position}
          onChange={handlePosition}
        />
        <TextArea
          label={"Responsibility"}
          value={data.workInfo.responsibility}
          onChange={handleResponsibility}
        />
        <AddButton sectionName={"Work"} onClick={addWorkSection} />
      </div>
    );
  }
}
