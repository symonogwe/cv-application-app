import Input from "./Input";
import { TextArea } from "./Input";

export default function SectionGeneral({ title }) {
  if (title === "General Info") {
    return (
      <>
        <h2>{title}</h2>
        <Input label={"Name"} type={"text"} />
        <Input label={"Email"} type={"email"} />
        <Input label={"Phone"} type={"number"} />
      </>
    );
  } else if (title === "Educational Experience") {
    return (
      <>
        <h2>{title}</h2>
        <Input label={"School"} type={"text"} />
        <Input label={"Title"} type={"text"} />
        <Input label={"Completed Date"} type={"date"} />
      </>
    );
  } else {
    return (
      <>
        <h2>{title}</h2>
        <Input label={"Company"} type={"text"} />
        <Input label={"Position"} type={"text"} />
        <TextArea label={"Responsibility"} />
      </>
    );
  }
}
