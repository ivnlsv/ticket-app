import { Content } from "./Content/Content";
import { ContentBlock, MainBlock } from "./Main.styled";
import { Sidebar } from "./Sidebar/Sidebar";
import { Header } from "./Content/Header/Header";

export const Main = () => {
  return (
    <MainBlock>
      <Sidebar />
      <ContentBlock>
        <Header />
        <Content />
      </ContentBlock>
    </MainBlock>
  );
};
