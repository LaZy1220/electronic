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
    color: white;
    @media screen and (max-width: 675px) {
      padding-top: 50px;
    }
    @media screen and (max-width: 480px) {
      padding-top: 70px;
    }
    @media screen and (max-height: 590px) {
      padding-top: 40px;
    }
    @media screen and (max-height: 480px) {
      padding-top: 20px;
    }
    @media screen and (max-height: 440px) {
      padding-top: 0px;
    }
  }
  p {
    font-size: 16px;
    margin-bottom: 30px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-height: 410px) {
    height: 500px;
  }
  @media all and(display-mode: fullscreen) {
    height: calc(100vh - 35%);
  }
`;
const Input = styled.input`
  width: 600px;
  height: 60px;
  padding-left: 40px;
  font-size: 20px;
  @media screen and (max-width: 675px) {
    width: 60%;
    height: 50px;
    padding-left: 20px;
    font-size: 18px;
  }
`;
const Button = styled.button`
  width: 600px;
  height: 60px;
  font-size: 20px;
  background-color: var(--yellow);
  border: none;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: white;
    border: 3px solid var(--yellow);
  }
  @media screen and (max-width: 675px) {
    width: 60%;
    height: 50px;
    padding-left: 20px;
    font-size: 18px;
  }
`;

export const Order = () => {
  return (
    <OrderEl>
      <div>
        <Title>Заказать услугу</Title>
        <p>С удовольствием отвечу на ваши вопросы</p>
        <form>
          <Input type="email" placeholder="Ваш E-mail" />
          <Input type="number" placeholder="+375(99)999-99-99" />
          <Input type="text" placeholder="Ваше ФИО" />
          <Button>Отправить</Button>
        </form>
      </div>
    </OrderEl>
  );
};
