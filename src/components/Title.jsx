import styled from "styled-components";

const Text = styled.h1`
  font-size: 60px;
  text-transform: uppercase;
  @media screen and (max-width: 1120px) {
    font-size: 45px;
  }
  @media screen and (max-width: 675px) {
    font-size: 24px;
  }
`;

export const Title = ({ children }) => {
  return <Text>{children}</Text>;
};
