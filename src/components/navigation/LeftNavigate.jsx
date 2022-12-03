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
    color: white;
    font-size: 20px;
  }
`;
export const LeftNavigate = ({ isActive }) => {
  return (
    <Ul isActive={isActive}>
      <li>Услуги</li>
      <li>Этапы работы</li>
      <li>Приемущества</li>
      <li>Прайс</li>
      <li>Отзывы</li>
      <li>Заказать</li>
    </Ul>
  );
};
