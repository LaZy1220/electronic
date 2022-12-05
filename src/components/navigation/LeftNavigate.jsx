import styled from "styled-components";

const Ul = styled.ul`
  width: 250px;
  margin-left: ${({ isActive }) => (isActive ? "0" : "-250px")};
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
  }
  a {
    text-decoration: none;
    color: white;
    font-size: 20px;
  }
`;
export const LeftNavigate = ({ isActive }) => {
  return (
    <Ul isActive={isActive}>
      <li>
        <a href="#our-services">Услуги</a>
      </li>
      <li>
        <a href="#stages-work">Этапы работы</a>
      </li>
      <li>
        <a href="#advantages">Приемущества</a>
      </li>
      <li>
        <a href="#price">Прайс</a>
      </li>
      <li>
        <a href="#reviews">Отзывы</a>
      </li>
      <li>
        <a href="#order">Заказать</a>
      </li>
    </Ul>
  );
};
