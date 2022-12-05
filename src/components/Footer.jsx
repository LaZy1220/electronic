import styled from "styled-components";

const FooterEl = styled.footer`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 16px;
  padding: 10px;
  div {
    display: flex;
    flex-direction: column;
    padding: 0 0 10px 0;
  }
  p {
    color: rgb(203, 202, 202);
  }
  a {
    text-decoration: none;
    color: white;
    text-align: center;
  }
`;

export const Footer = () => {
  return (
    <FooterEl>
      <div>
        <a href="tel:+375291140288">+375291140288</a>
        <a href="mailto:kolacegelnik@gmail.com">kolacagelnik@gmail.com</a>
      </div>
      <p>© Все права защищены 2022</p>
      <p>УНП 692163617</p>
    </FooterEl>
  );
};
