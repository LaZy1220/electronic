import styled from "styled-components";
import OrderBg from "../images/orderBg.png";
import { Title } from "./Title";

const OrderEl = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${OrderBg});
  background-position: top top;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  div {
    padding-top: 110px;
    text-align: center;
  }
`;

export const Order = () => {
  return (
    <OrderEl>
      <div>
        <Title color={"white"}>Заказать услугу</Title>
      </div>
    </OrderEl>
  );
};
