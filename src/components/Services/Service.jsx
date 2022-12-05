import styled from "styled-components";
import Arrows from "../../images/arrowDown.png";

const ServiceEl = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  height: ${({ isActive }) => (isActive ? "auto" : "98px")};
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 1120px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 20px;
  }
`;
const Text = styled.p`
  width: 400px;
  @media screen and (max-width: 1350px) {
    width: 70%;
  }
  @media screen and (max-width: 1200px) {
    width: 70%;
    font-size: 16px;
  }
`;

const Type = styled.div`
  display: flex;
  gap: 4px;
  justify-content: space-between;
  p ~ p {
    text-decoration: underline;
  }
  @media screen and (max-width: 1120px) {
    min-width: 100%;
  }
`;
const Button = styled.button`
  position: relative;
  left: ${({ isActive }) => (isActive ? "95%" : "91%")};
  top: 10px;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 900px) {
    left: ${({ isActive }) => (isActive ? "90%" : "85%")};
  }
  @media screen and (max-width: 620px) {
    left: ${({ isActive }) => (isActive ? "90%" : "80%")};
  }
  @media screen and (max-width: 500px) {
    left: ${({ isActive }) => (isActive ? "85%" : "75%")};
  }
  @media screen and (max-width: 420px) {
    left: ${({ isActive }) => (isActive ? "75%" : "65%")};
  }
`;
export const Service = ({ service, isActive, handleActive }) => {
  return (
    <>
      <ServiceEl isActive={isActive}>
        {service?.map((item) => (
          <Type key={item.id}>
            <Text>{item.service}</Text>
            <p>от {item.price} руб.</p>
          </Type>
        ))}
      </ServiceEl>
      {isActive ? (
        <Button onClick={() => handleActive()} isActive={isActive}>
          Скрыть
          <img
            style={{
              transform: "rotate(180deg)",
              height: "10px",
              paddingRight: "5px",
            }}
            src={Arrows}
            alt="arrow"
          />
        </Button>
      ) : (
        <Button onClick={() => handleActive()} isActive={isActive}>
          Читать больше
          <img
            style={{ paddingLeft: "5px", height: "10px" }}
            src={Arrows}
            alt="img"
          />
        </Button>
      )}
    </>
  );
};
