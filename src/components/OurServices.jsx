import styled from "styled-components";
import { css } from "styled-components";
import { Title } from "./Title";
import Card1 from "../images/card1.jpg";
import Card2 from "../images/card2.jpeg";
import Card3 from "../images/card3.jpg";
import Card4 from "../images/card4.jpeg";

const OurServicesEl = styled.div`
  text-align: center;
  padding-top: 110px;
  @media screen and (max-width: 1120px) {
    padding-top: 50px;
  }
`;
const Text = styled.p`
  margin-bottom: 100px;
  font-size: 26px;
  @media screen and (max-width: 1120px) {
    font-size: 25px;
    font-weight: bold;
    margin: 0px 8% 30px;
  }
`;
const Flex = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 20px 0 20px;
  @media screen and (max-width: 1120px) {
    flex-direction: column;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
const Card = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
  ${(props) => css`
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${props.Card});
  `};
  ${(props) =>
    css`
      height: ${props.height}px;
    `}
  background-position: center center;
  background-size: cover;
  @media screen and (max-width: 1120px) {
    height: 300px;
  }
`;
const CardText = styled.div`
  left: 30px;
  bottom: 40px;
  color: white;
  font-size: 22px;
  position: absolute;
  line-height: 30px;
  text-align: start;
  p {
    font-weight: 300;
    @media screen and (max-width: 1120px) {
      line-height: 23px;
      left: 25px;
    }
  }
  @media screen and (max-width: 1120px) {
    margin-right: 20px;
    font-size: 18px;
    bottom: 25px;
  }
`;

export const OurServices = () => {
  return (
    <OurServicesEl id="our-services">
      <Title>Наши услуги</Title>
      <Text>Все наши услуги распростроняются по Минску и Минскому району</Text>
      <Flex>
        <Cards>
          <Card Card={Card1} height={480}>
            <CardText>
              <p>Демонтаж кабеля, полная замена электропроводки.</p>
              <p>Установка заземления.</p>
            </CardText>
          </Card>
          <Card Card={Card2} height={240}>
            <CardText>
              <p>Штраба в штукатурке, газосиликатном блоке, кирпиче, бетоне.</p>
            </CardText>
          </Card>
        </Cards>
        <Cards>
          <Card Card={Card3} height={240}>
            <CardText>
              <p>Установка подрозетника в кирпиче(с устройством ниши).</p>
              <p>Перенос и замена розеток и выключателей.</p>
              <p>Подключение бытовой техники.</p>
            </CardText>
          </Card>
          <Card Card={Card4} height={480}>
            <CardText>
              <p>Установка и подключение люстр и светильников,</p>
              <p>коммуникаций и распределительной коробки.</p>
              <p>Монтаж и сборка электрощитка.</p>
            </CardText>
          </Card>
        </Cards>
      </Flex>
    </OurServicesEl>
  );
};
