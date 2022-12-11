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
  padding: 30px;
  border-radius: 40px;
  img {
    left: 20px;
    top: 10px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    position: absolute;
  }
  h1 {
    padding: 20px 0 20px 0;
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
      </OrderEl>
    </Conteiner>
  );
};
