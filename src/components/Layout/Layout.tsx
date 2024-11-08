import { Header } from "../Header/Header";
import { MainBlock } from "./Layout.styled";
import { Main } from "../Main/Main";

export const Layout = () => {
  return (
    <MainBlock>
      <Header />
      <Main />
    </MainBlock>
  );
};
