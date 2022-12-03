import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../features/menu-slice";
import { LeftNavigate } from "./LeftNavigate";

const BurgerEl = styled.div`
  display: none;
  width: 56px;
  height: 56px;
  position: fixed;
  cursor: pointer;
  padding-top: 11px;
  top: 10px;
  right: 10px;
  padding-left: ${({ isActive }) => (isActive ? "5px" : "0")};
  background-color: ${({ isActive }) => (isActive ? "green" : "var(--yellow)")};
  gap: 8px;
  flex-flow: column;
  div {
    width: 40px;
    height: 6px;
    margin-left: 8px;
    background-color: white;
    border-radius: 10px;
    transform-origin: 1px;
    &:nth-child(1) {
      transition: all 0.3s linear;
      transform: ${({ isActive }) =>
        isActive ? "rotate(45deg)" : "rotate(0)"};
    }
    &:nth-child(2) {
      transform: ${({ isActive }) =>
        isActive ? "translaneX(100%)" : "translateX(0)"};
      opacity: ${({ isActive }) => (isActive ? 0 : 1)};
    }
    &:nth-child(3) {
      transition: all 0.3s linear;
      transform: ${({ isActive }) =>
        isActive ? "rotate(-45deg)" : "rotate(0)"};
    }
  }

  @media screen and (max-width: 1120px) {
    display: flex;
  }
`;

export const Burger = () => {
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.active);
  return (
    <>
      <BurgerEl
        isActive={isActive}
        onClick={() => dispatch(setActive(!isActive))}
      >
        <div />
        <div />
        <div />
      </BurgerEl>
      <LeftNavigate isActive={isActive} />
    </>
  );
};
