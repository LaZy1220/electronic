import styled, { css } from "styled-components";
import BgImg from "../images/mainBg.jpg";

const BackGround = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${BgImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  color: white;
  letter-spacing: 0;
`;
const Title = styled.h1`
  font-size: 60px;
  text-transform: uppercase;
  @media screen and (max-width: 1120px) {
    font-size: 45px;
  }
  @media screen and (max-width: 675px) {
    font-size: 24px;
  }
`;
const Body = styled.div`
  padding: 140px 0 0 15%;
  height: 100vh;
  width: 700px;
  @media screen and (max-width: 675px) {
    padding-top: 170px;
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    padding-left: 30px;
  }
  @media screen and (max-height: 480px) {
    padding-top: 60px;
    width: 100%;
  }
  @media screen and (max-height: 410px) {
    height: 500px;
  }
`;
const Text = styled.p`
  position: relative;
  color: rgb(224 224 224);
  padding-top: 50px;
  font-size: 22px;
  letter-spacing: 0;
  ${(props) =>
    props.number &&
    css`
      padding-top: 16px !important;
      font-size: 24px;
    `}
  @media screen and (max-width: 1120px) {
    padding-top: 30px;
    font-size: 18px;
  }
`;
const Button = styled.button`
  background-color: var(--yellow);
  margin-top: 60px;
  width: 230px;
  height: 58px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: white;
    border: 3px solid var(--yellow);
  }
`;

export const MainContent = () => {
  return (
    <BackGround>
      <Body>
        <Title>Электромонтажные работы</Title>
        <Text>По Минску и Минскому району</Text>
        <Text>Контакты</Text>
        <Text number>+375 (29) 114-02-88</Text>
        <Button>Заказать услугу</Button>
      </Body>
    </BackGround>
  );
};
