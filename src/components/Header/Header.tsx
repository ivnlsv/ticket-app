import logo from "../../assets/images/logo.png";
import { HeaderBlock, HeaderTitle, HeaderWrapper } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderBlock>
      <HeaderWrapper>
        <img src={logo} alt="logo" />
        <HeaderTitle>Поиск авиабилетов</HeaderTitle>
      </HeaderWrapper>
    </HeaderBlock>
  );
};
