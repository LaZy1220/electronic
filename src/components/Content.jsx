import styled from "styled-components";
import ContentBg from "../images/contentBg.jpg";
import { OurServices } from "./OurServices";

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
      </ContentEl>
    </>
  );
};
