import styled from "styled-components";
import ContentBg from "../images/contentBg.jpg";
import { Advantages } from "./Advantages";
import { FeedBack } from "./FeedBack/FeedBack";
import { OurServices } from "./OurServices";
import { Services } from "./Services/Services";
import { StagesWork } from "./StagesWork/StagesWork";

const ContentEl = styled.div`
  background-image: url(${ContentBg});
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
`;
export const Content = ({ width }) => {
  return (
    <>
      <ContentEl>
        <OurServices />
        <StagesWork />
        <Advantages />
        <Services />
        <FeedBack width={width} />
      </ContentEl>
    </>
  );
};
