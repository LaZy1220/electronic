import styled from "styled-components";
import Default from "../../images/anonim.png";
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
      padding-bottom: 40px;
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
export const FeedBackItem = ({ image_src, name_surname, review }) => {
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
