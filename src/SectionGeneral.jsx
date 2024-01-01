import Input from "./Input";
import { TextArea } from "./Input";

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
    setData({
      ...data,
      educationalInfo: { ...data.educationalInfo, school: e.target.value },
    });
  }

  function handleTitle(e) {
    setData({
      ...data,
      educationalInfo: { ...data.educationalInfo, title: e.target.value },
    });
  }

  function handleSchoolDate(e) {
    setData({
      ...data,
      educationalInfo: {
        ...data.educationalInfo,
        dateCompleted: e.target.value,
      },
    });
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

  if (title === "General Info") {
    return (
      <>
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
      </>
    );
  } else if (title === "Educational Experience") {
    return (
      <>
        <h2>{title}</h2>
        <Input
          label={"School"}
          type={"text"}
          value={data.educationalInfo.school}
          onChange={handleSchool}
        />
        <Input
          label={"Title"}
          type={"text"}
          value={data.educationalInfo.title}
          onChange={handleTitle}
        />
        <Input
          label={"Completed Date"}
          type={"date"}
          value={data.educationalInfo.dateCompleted}
          onChange={handleSchoolDate}
        />
      </>
    );
  } else {
    return (
      <>
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
      </>
    );
  }
}
