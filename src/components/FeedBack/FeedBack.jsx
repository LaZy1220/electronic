import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Title } from "../Title";
import Arrow from "../../images/rightArrow.svg";
import { Carusel } from "./Carusel";
import { FeedBackItem } from "./FeedBackItem";
import { setActiveAddFeedBack } from "../features/addFeedBack-slice";
import { ThankForReview } from "./ThankForReview";

const FeedBackEl = styled.div`
  margin: 0 auto;
  width: 900px;
  padding-bottom: 180px;
  padding-top: 110px;
  img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    @media screen and (max-width: 1120px) {
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 1120px) {
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 700px;
  }
  @media screen and (max-width: 730px) {
    width: 300px;
  }
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
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
  img {
    width: 30px;
    height: 30px;
  }
`;
export const FeedBack = () => {
  const isActiveAddFeedBack = useSelector((state) => state.isAddFeedBack);
  const feedBack = useSelector((state) => state.allInfo.list.review);
  const isActiveThankForReview = useSelector((state) => state.isThankForReview);
  const dispatch = useDispatch();
  const [offset, setOffset] = useState([]);
  const size =
    window.screen.width < 1120 && window.screen.width > 730
      ? 700
      : window.screen.width < 730
      ? 300
      : 900;
  const nextFeedBack = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - size;
      const maxOffset = -(size * (feedBack.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };

  const prevFeedBack = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + size;
      return Math.min(newOffset, 0);
    });
  };
  return (
    <>
      {feedBack ? (
        <FeedBackEl id="reviews">
          <Title>Наши отзывы</Title>
          <Carusel offset={offset}>
            {feedBack?.map((review) => (
              <FeedBackItem key={review.id} {...review} />
            ))}
          </Carusel>
          <Flex>
            <Button onClick={() => prevFeedBack()}>
              <img
                style={{ transform: "rotate(180deg)" }}
                src={Arrow}
                alt="left"
              />
            </Button>
            <Button
              onClick={() =>
                dispatch(setActiveAddFeedBack(!isActiveAddFeedBack))
              }
            >
              Оставить отзыв
            </Button>
            <Button onClick={() => nextFeedBack()}>
              <img src={Arrow} alt="right" />
            </Button>
          </Flex>
          {isActiveThankForReview && <ThankForReview />}
        </FeedBackEl>
      ) : (
        ""
      )}
    </>
  );
};
