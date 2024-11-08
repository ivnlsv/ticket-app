import { addFilters, removeFilters } from "../../../../feature/slices";
import { useAppDispatch } from "../../../../feature/store";
import { InpuItem, InputBlock, InputLabel } from "./Input.styled";

interface Inputs {
  type: "checkbox" | "radio";
  name: string;
  id: string;
  value: string;
  children: string;
}

export const Input = ({ type, name, id, value, children }: Inputs) => {
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const payload = {
      name: e.target.name,
      value: e.target.value,
    };

    if (e.target.checked) {
      dispatch(removeFilters(payload));
      return;
    }

    dispatch(addFilters(payload));
  };
  return (
    <InputBlock>
      <InpuItem
        type={"checkbox"}
        name={name}
        id={id}
        value={value}
        defaultChecked
        isCheckbox={type === "checkbox"}
        onChange={handleChange}
      />
      <InputLabel htmlFor={id}>{children}</InputLabel>
    </InputBlock>
  );
};
