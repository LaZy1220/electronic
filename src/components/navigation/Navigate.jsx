import styled from "styled-components";
import { Link } from "react-scroll";
import { Burger } from "./Burger";

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

export const Navigate = ({ width }) => {
  return (
    <>
      <NavigateEl>
        <ul>
          <li>
            <Link to="/" spy={true} smooth={true} offset={0} duration={700}>
              Главная
            </Link>
          </li>
          <li>
            <Link
              to="our-services"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
            >
              Услуги
            </Link>
          </li>
          <li>
            <Link
              to="stages-work"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
            >
              Этапы работы
            </Link>
          </li>
          <li>
            <Link
              to="advantages"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
            >
              Приемущества
            </Link>
          </li>
          <li>
            <Link
              to="price"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
            >
              Прайс
            </Link>
          </li>
          <li>
            <Link
              to="reviews"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
            >
              Отзывы
            </Link>
          </li>
          <li>
            <Link
              to="order"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
            >
              Заказать
            </Link>
          </li>
        </ul>
      </NavigateEl>
      <Burger width={width} />
    </>
  );
};
