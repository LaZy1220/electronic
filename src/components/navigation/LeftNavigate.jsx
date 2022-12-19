import styled from "styled-components";
import { Link } from "react-scroll";

const Ul = styled.ul`
  width: 250px;
  margin-left: ${({ isActive, width }) =>
    isActive && width < 1120 ? "0" : "-250px"};
  background: black;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  transition: all ease 1s;
  z-index: 100;
  padding: 20px;
  li {
    list-style: none;
    padding-top: 10px;
  }
  a {
    text-decoration: none;
    color: white;
    font-size: 20px;
  }
`;
export const LeftNavigate = ({ isActive, width }) => {
  return (
    <Ul isActive={isActive} width={width}>
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
        <Link to="price" spy={true} smooth={true} offset={50} duration={700}>
          Прайс
        </Link>
      </li>
      <li>
        <Link to="reviews" spy={true} smooth={true} offset={50} duration={700}>
          Отзывы
        </Link>
      </li>
      <li>
        <Link to="order" spy={true} smooth={true} offset={50} duration={700}>
          Заказать
        </Link>
      </li>
    </Ul>
  );
};
