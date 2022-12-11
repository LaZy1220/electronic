import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Cross from "../images/cross.svg";
import { setActiveOrder } from "./features/isShowOrder-slice";

const OrderEl = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 60px 30px 60px 30px;
  border-radius: 40px;
  img {
    right: 30px;
    top: 20px;
    width: 25px;
    height: 25px;
    cursor: pointer;
    position: absolute;
  }
  h1 {
    padding: 20px 0 20px 0;
    @media screen and (max-width: 350px) {
      font-size: 24px;
    }
  }
  button {
    background-color: var(--yellow);
    margin-top: 60px;
    width: 400px;
    height: 58px;
    border: none;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      background-color: white;
      border: 3px solid var(--yellow);
    }
    @media screen and (max-width: 610px) {
      width: 200px;
    }
  }
  p {
    font-size: 18px;
    @media screen and (max-width: 350px) {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 610px) {
    padding: 30px;
  }
`;
const Conteiner = styled.div`
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

export const OrderIsProcessed = () => {
  const dispatch = useDispatch();
  const isShow = useSelector((state) => state.isShow);

  return (
    <Conteiner>
      <OrderEl>
        <img
          onClick={() => dispatch(setActiveOrder(!isShow))}
          src={Cross}
          alt="X"
        />
        <h1>Ваш заказ успешно добавлен</h1>
        <p>Мы обязательно с вами свяжемся, как освободятся специалиты</p>
        <button onClick={() => dispatch(setActiveOrder(!isShow))}>
          Закрыть
        </button>
      </OrderEl>
    </Conteiner>
  );
};
