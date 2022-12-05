import styled from "styled-components";
import { Title } from "./Title";
import img1 from "../images/advImg1.png";
import img2 from "../images/advImg2.png";
import img3 from "../images/advImg3.png";
import img4 from "../images/advImg4.png";

const AdvantagesEl = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://static.tildacdn.com/lib/unsplash/1789ed6d-f801-4247-eb9b-bcad707348ae/photo.jpg");
  background-position: center center;
  background-size: cover;
  padding-top: 110px;
`;
const Flex = styled.div`
  margin: auto 200px;
  display: flex;
  justify-content: space-between;
  color: white;
  padding-bottom: 120px;
  @media screen and (max-width: 1120px) {
    margin: 0;
  }
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding-bottom: 50px;
  }
`;
const Advantage = styled.div`
  text-align: center;
  width: 250px;
`;
export const Advantages = () => {
  return (
    <AdvantagesEl id="advantages">
      <Title color={"white"}>Приемущества</Title>
      <Flex>
        <Advantage>
          <img src={img1} alt="img" />
          <p>Качество, гарантия и скорость</p>
        </Advantage>
        <Advantage>
          <img src={img2} alt="img" />
          <p>Бесплатный выезд</p>
        </Advantage>
        <Advantage>
          <img src={img3} alt="img" />
          <p>Современное оборудование</p>
        </Advantage>
        <Advantage>
          <img src={img4} alt="img" />
          <p>Индивидуальный подход к каждому клиенту</p>
        </Advantage>
      </Flex>
    </AdvantagesEl>
  );
};
