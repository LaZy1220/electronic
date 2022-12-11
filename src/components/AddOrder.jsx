import styled from "styled-components";
import Cross from "../images/cross.svg";
import { OrderForm } from "./OrderForm";

const AddOrderEl = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 40px;
  position: relative;
  img {
    position: absolute;
    z-index: 1000;
    height: 40px;
    width: 40px;
    top: 10px;
    right: 20px;
    cursor: pointer;
  }
`;
const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Title = styled.h3`
  text-align: center;
  padding-top: 15px;
  font-size: 50px;
  padding-bottom: 80px;
`;

export const AddOrder = () => {
  return (
    <Wrapper>
      <AddOrderEl>
        <img src={Cross} alt="X" />
        <Title>Заказать услугу</Title>
        <OrderForm addOrderForm />
      </AddOrderEl>
    </Wrapper>
  );
};