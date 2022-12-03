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
`;
const Text = styled.p`
  margin-bottom: 100px;
  font-size: 26px;
  @media screen and (max-width: 1120px) {
    margin: 0 8% 30px 8%;
  }
`;
const Flex = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 20px 0 20px;
`;
const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
const Card = styled.div`
  ${(props) => css`
    background: url(${props.Card});
  `};
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 480px;
`;

export const OurServices = () => {
  return (
    <OurServicesEl>
      <Title>Наши услуги</Title>
      <Text>Все наши услуги распростроняются по Минску и Минскому району</Text>
      <Flex>
        <Cards>
          <Card Card={Card1}></Card>
          <Card Card={Card2}></Card>
        </Cards>
        <Cards>
          <Card Card={Card3}></Card>
          <Card Card={Card4}></Card>
        </Cards>
      </Flex>
    </OurServicesEl>
  );
};
