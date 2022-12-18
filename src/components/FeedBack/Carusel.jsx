import styled from "styled-components";
import Arrows from "../../images/arrowDown.png";
import { useSelector } from "react-redux";
const CaruselEl = styled.div`
  position: relative;
  transition: all ease 1s;
  @media screen and (max-width: 730px) {
    height: ${({ isResizeBlock }) => (isResizeBlock ? "490px" : "360px")};
  }
`;
const ReadMore = styled.span`
  font-size: 14px;
  padding: 15px;
  position: absolute;
  bottom: 80px;
  right: 0;
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
  transition-duration: 1000ms;
  transition-timing-function: ease-in-out;
`;

export const Carusel = ({
  children,
  offset,
  width,
  isResizeBlock,
  handleResize,
  currentIndexRewiev,
}) => {
  const reviews = useSelector(
    (state) => state.allInfo.list.review[currentIndexRewiev].review
  );
  console.log(reviews.length);
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
      {width < 730 && reviews.length > 150 ? (
        isResizeBlock ? (
          <ReadMore onClick={() => handleResize()}>
            Скрыть {""}
            <img
              src={Arrows}
              style={{
                transform: "rotate(180deg)",
              }}
              alt="arrows"
            />
          </ReadMore>
        ) : (
          <ReadMore onClick={() => handleResize()}>
            Читаль больше <img src={Arrows} alt="arrows" />
          </ReadMore>
        )
      ) : (
        ""
      )}
    </>
  );
};
