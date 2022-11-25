import styled from "styled-components";

const Text = styled.h1`
  font-size: 60px;
  text-transform: uppercase;
`;

export const Title = ({ children }) => {
  return <Text>{children}</Text>;
};
