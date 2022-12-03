import styled from "styled-components";

const Text = styled.h4`
  text-align: center;
  font-size: 50px;
  margin-bottom: 80px;
  @media screen and (max-width: 1120px) {
    font-size: 40px;
  }
`;

export const Title = ({ children }) => {
  return <Text>{children}</Text>;
};
