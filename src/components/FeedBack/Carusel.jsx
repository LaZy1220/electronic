import { useEffect } from "react";
import styled from "styled-components";

const CaruselEl = styled.div``;
const Window = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const Conteiner = styled.div`
  height: 100%;
  display: flex;
`;

export const Carusel = ({ children }) => {
  const checkSize = () => {
    if (window.screen.width < 1120 && window.screen.width > 730) {
      return 700;
    } else if (window.screen.width < 730) {
      return 300;
    } else return 900;
  };
  return (
    <CaruselEl>
      <Window>
        <Conteiner
          style={{
            transform: `translateX(${checkSize}px)`,
          }}
        >
          {children}
        </Conteiner>
      </Window>
    </CaruselEl>
  );
};
