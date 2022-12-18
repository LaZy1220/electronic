import styled from "styled-components";

const CaruselEl = styled.div`
  @media screen and (max-width: 730px) {
    height: ${({ isResizeBlock }) => (isResizeBlock ? "auto" : "360px")};
  }
`;
const Window = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const Conteiner = styled.div`
  height: 100%;
  display: flex;
  transition: translate;
  transition-property: transform;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
`;

export const Carusel = ({ children, offset, isResizeBlock }) => {
  return (
    <>
      <CaruselEl isResizeBlock={isResizeBlock}>
        <Window>
          <Conteiner
            style={{
              transform: `translateX(${offset}px)`,
            }}
          >
            {children}
          </Conteiner>
        </Window>
      </CaruselEl>
    </>
  );
};
