import { css } from "styled-components";
import styled from "styled-components";

const Text = styled.h4`
  text-align: center;
  font-size: 50px;
  margin-bottom: 80px;
  ${(props) =>
    css`
      color: ${props.color};
    `}
  @media screen and (max-width: 1120px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
`;

export const Title = ({ color, children }) => {
  return <Text color={color}>{children}</Text>;
};
