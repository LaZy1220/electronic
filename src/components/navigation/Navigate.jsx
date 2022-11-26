import styled from "styled-components";
import { Burger } from "./Burger";
import { LeftNavigate } from "./LeftNavigate";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../features/menu-slice";

const NavigateEl = styled.nav`
  position: fixed;
  z-index: 100;
  width: calc(100% - 40px);
  top: 20px;
  right: 20px;
  ul {
    background-color: var(--yellow);
    list-style-type: none;
    height: 57px;
    opacity: 0.9;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 72px;
  }
  a {
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    font-size: 18px;
    padding-bottom: 8px;
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
  @media screen and (max-width: 1120px) {
    display: none;
  }
`;

export const Navigate = () => {
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.active);
  return (
    <>
      <NavigateEl>
        <ul>
          <li>
            <a href="/">Услуги</a>
          </li>
          <li>
            <a href="/">Этапы работы</a>
          </li>
          <li>
            <a href="/">Приемущества</a>
          </li>
          <li>
            <a href="/">Прайс</a>
          </li>
          <li>
            <a href="/">Отзывы</a>
          </li>
          <li>
            <a href="/">Заказать</a>
          </li>
        </ul>
      </NavigateEl>
      <Burger />
      <LeftNavigate />
    </>
  );
};
