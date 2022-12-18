import styled from "styled-components";
import Default from "../../images/anonim.png";
import Arrows from "../../images/arrowDown.png";
const Body = styled.div`
  display: flex;
  min-width: 100%;
  max-width: 100%;
  justify-content: space-between;
  margin-bottom: 40px;
  position: relative;
  img {
    display: flex;
    flex-shrink: 0;
  }
  @media screen and (max-width: 1120px) {
    flex-direction: column;
    justify-content: start;
    gap: 20px;
  }
`;
const Text = styled.div`
  p {
    width: 600px;
    font-size: 17px;
    @media screen and (max-width: 1120px) {
      width: 100%;
      text-align: center;
    }
  }
  span {
    display: block;
    font-size: 26px;
    font-weight: bold;
    margin-top: 20px;
    @media screen and (max-width: 1120px) {
      margin-top: 0;
      margin-bottom: 10px;
      text-align: center;
    }
  }
`;
const ReadMore = styled.span`
  font-size: 14px;
  padding: 15px;
  position: absolute;
  bottom: -90px;
  right: 0px;
  cursor: pointer;
  img {
    width: 12px !important;
    height: 12px !important;
  }
`;
export const FeedBackItem = ({
  image_src,
  name_surname,
  review,
  isResizeBlock,
  handleResize,
  width,
}) => {
  return (
    <Body>
      <img src={image_src ? image_src : Default} alt="avatar" />
      <Text>
        <span>{name_surname}</span>
        <p>{review}</p>
      </Text>
    </Body>
  );
};
