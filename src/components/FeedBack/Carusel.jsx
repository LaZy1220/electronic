import { useState } from "react";
import styled from "styled-components";
import Arrows from "../../images/arrowDown.png";

const CaruselEl = styled.div`
  @media screen and (max-width: 730px) {
    height: 360px;
  }
`;
const ReadMore = styled.span`
  font-size: 14px;
  padding: 15px;
  left: 170px;
  position: relative;
  cursor: pointer;
  img {
    width: 12px !important;
    height: 12px !important;
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

export const Carusel = ({ children, offset }) => {
  const [isResizeBlock, setIsResizeBlock] = useState(false);
  return (
    <>
      <CaruselEl>
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
      <ReadMore>
        Читаль больше <img src={Arrows} alt="arrows" />
      </ReadMore>
    </>
  );
};
