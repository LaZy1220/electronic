import styled from "styled-components";
import OrderBg from "../images/orderBg.png";
import { OrderForm } from "./OrderForm";
import { Title } from "./Title";

const OrderEl = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${OrderBg});
  background-position: top top;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  div {
    padding-top: 50px;
    text-align: center;
    color: white;
    @media screen and (max-width: 675px) {
      padding-top: 50px;
    }
    @media screen and (max-width: 480px) {
      padding-top: 20px;
    }
    @media screen and (max-height: 580px) {
      padding-top: 20px;
    }
    @media screen and (max-height: 440px) {
      padding-top: 20px;
    }
  }
  p {
    font-size: 16px;
  }
  @media screen and (max-height: 510px) {
    height: 500px;
  }
  @media all and(display-mode: fullscreen) {
    height: calc(100vh - 35%);
  }
`;

export const Order = () => {
  return (
    <OrderEl id="order">
      <div>
        <Title>Заказать услугу</Title>
        <p>С удовольствием отвечу на ваши вопросы</p>
        <OrderForm />
      </div>
    </OrderEl>
  );
};
