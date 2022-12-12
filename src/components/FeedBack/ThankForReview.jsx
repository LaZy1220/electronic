import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setActiveThankForReview } from "../features/thankForReview-slice";

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const ThankForReviewEl = styled.div`
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 6px 2px var(--yellow);
  gap: 20px;
  p {
    font-size: 20px;
  }
`;
const Button = styled.button`
  background-color: var(--yellow);
  border: 3px solid var(--yellow);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: white;
    border: 3px solid var(--yellow);
  }
`;

export const ThankForReview = () => {
  const isActiveThankForReview = useSelector((state) => state.isThankForReview);
  const dispatch = useDispatch;
  return (
    <Wrapper>
      <ThankForReviewEl>
        <p>
          Благодарим Вас за отзыв о нашей компании, Будем рады вас видеть снова
        </p>
        <Button
          onClick={() =>
            dispatch(setActiveThankForReview(!isActiveThankForReview))
          }
        >
          Закрыть
        </Button>
      </ThankForReviewEl>
    </Wrapper>
  );
};
