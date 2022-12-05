import styled from "styled-components";
import ContentBg from "../images/contentBg.jpg";
import { Advantages } from "./Advantages";
import { OurServices } from "./OurServices";
import { Services } from "./Services/Services";
import { StagesWork } from "./StagesWork/StagesWork";

const ContentEl = styled.div`
  background-image: url(${ContentBg});
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
`;

export const Content = () => {
  return (
    <>
      <ContentEl>
        <OurServices />
        <StagesWork />
        <Advantages />
        <Services />
      </ContentEl>
    </>
  );
};
