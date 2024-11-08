import { FiltersBlock, FiltersForm, FiltersTitle } from "./Filters.styled";

interface FiltersProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

export const Filters = ({ title, children }: FiltersProps) => {
  return (
    <FiltersBlock>
      <FiltersTitle>{title}</FiltersTitle>
      <FiltersForm>{children}</FiltersForm>
    </FiltersBlock>
  );
};
