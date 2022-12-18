import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Title } from "../Title";
import Arrow from "../../images/rightArrow.svg";
import { Carusel } from "./Carusel";
import { FeedBackItem } from "./FeedBackItem";
import { setActiveAddFeedBack } from "../features/addFeedBack-slice";
import { ThankForReview } from "./ThankForReview";

const FeedBackEl = styled.section`
  margin: 0 auto;
  width: 900px;
  padding-bottom: 180px;
  padding-top: 110px;
  position: relative;
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
  padding-top: 10px;
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

export const FeedBack = ({ width }) => {
  const isActiveAddFeedBack = useSelector((state) => state.isAddFeedBack);
  const [isResizeBlock, setIsResizeBlock] = useState(false);
  const [currentIndexRewiev, setCurrentIndexRewiev] = useState(0);
  const feedBack = useSelector((state) => state.allInfo.list.review);
  const isActiveThankForReview = useSelector((state) => state.isThankForReview);
  const dispatch = useDispatch();
  const [offset, setOffset] = useState([]);
  const incIndexRewiev = () => {
    if (currentIndexRewiev < feedBack.length - 1) {
      setCurrentIndexRewiev((prev) => prev + 1);
    } else {
      setCurrentIndexRewiev(feedBack.length - 1);
    }
  };
  const decIndexRewiev = () => {
    if (currentIndexRewiev > 0) {
      setCurrentIndexRewiev((prev) => prev - 1);
    } else {
      setCurrentIndexRewiev(0);
    }
  };
  const handleResize = () => {
    setIsResizeBlock(!isResizeBlock);
  };
  const nextFeedBack = () => {
    setOffset((currentOffset) => {
      if (width > 1130) {
        const newOffset = currentOffset - 900;
        const maxOffset = -(900 * (feedBack.length - 1));
        return Math.max(newOffset, maxOffset);
      } else if (width < 1130 && width > 730) {
        const newOffset = currentOffset - 700;
        const maxOffset = -(700 * (feedBack.length - 1));
        return Math.max(newOffset, maxOffset);
      } else {
        const newOffset = currentOffset - 300;
        const maxOffset = -(300 * (feedBack.length - 1));
        return Math.max(newOffset, maxOffset);
      }
    });
    setIsResizeBlock(false);
    incIndexRewiev();
  };
  const prevFeedBack = () => {
    setOffset((currentOffset) => {
      if (width > 1130) {
        const newOffset = currentOffset + 900;
        return Math.min(newOffset, 0);
      } else if (width < 1130 && width > 730) {
        const newOffset = currentOffset + 700;
        return Math.min(newOffset, 0);
      } else {
        const newOffset = currentOffset + 300;
        return Math.min(newOffset, 0);
      }
    });
    setIsResizeBlock(false);
    decIndexRewiev();
  };
  useEffect(() => {
    setOffset(0);
  }, [width]);
  return (
    <>
      {feedBack ? (
        <FeedBackEl id="reviews" isResizeBlock={isResizeBlock}>
          <Title>Наши отзывы</Title>
          <Carusel
            offset={offset}
            width={width}
            isResizeBlock={isResizeBlock}
            handleResize={handleResize}
            currentIndexRewiev={currentIndexRewiev}
          >
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
