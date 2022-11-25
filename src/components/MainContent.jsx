import styled, { css } from "styled-components";
import { Title } from "./Title";

const BackGround = styled.div`
  background: url("https://thumb.tildacdn.com/tild3238-6135-4537-b333-393734653961/-/format/webp/sebastian-pociecha-L.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: white;
  letter-spacing: 0;
  width: 100%;
  height: 100%;
`;
const Conteiner = styled.div`
  background-color: black;
  opacity: 0.72;
`;
const Body = styled.div`
  padding: 140px 0 0 15%;
  height: 100vh;
  width: 700px;
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
      padding-top: 16px;
      font-size: 24px;
    `}
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
      <Conteiner>
        <Body>
          <Title>Электромонтажные работы</Title>
          <Text>По Минску и Минскому району</Text>
          <Text>Контакты</Text>
          <Text number>+375 (29) 114-02-88</Text>
          <Button>Заказать услугу</Button>
        </Body>
      </Conteiner>
    </BackGround>
  );
};
