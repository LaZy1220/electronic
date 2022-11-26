import styled from "styled-components";

const NavigateEl = styled.nav`
  position: fixed;
  z-index: 100;
  width: calc(100% - 40px);
  top: 20px;
  right: 20px;
`;
const Body = styled.ul`
  background-color: var(--yellow);
  list-style-type: none;
  height: 57px;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 72px;
`;

export const Navigate = () => {
  return (
    <NavigateEl>
      <Body></Body>
    </NavigateEl>
  );
};
