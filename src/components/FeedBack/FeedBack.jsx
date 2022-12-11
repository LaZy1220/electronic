import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Title } from "../Title";
import Arrow from "../../images/rightArrow.svg";
import { Carusel } from "./Carusel";
import { FeedBackItem } from "./FeedBackItem";

const FeedBackEl = styled.div`
  margin: 0 auto;
  width: 900px;
  padding-bottom: 180px;
  margin-top: 110px;
  img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    @media screen and (max-width: 1120px) {
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 1120px) {
    padding-bottom: 60px;
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
  const feedBack = useSelector((state) => state.allInfo.list.review);
  const [curentFeedBack, setCurrentFeedBack] = useState(0);
  const nextFeedBack = () => {
    if (curentFeedBack < feedBack.length - 1) {
      setCurrentFeedBack((prev) => prev + 1);
    } else {
      setCurrentFeedBack(0);
    }
  };

  const prevFeedBack = () => {
    if (curentFeedBack > 0) {
      setCurrentFeedBack((prev) => prev - 1);
    } else {
      setCurrentFeedBack(feedBack.length - 1);
    }
  };
  return (
    <>
      {feedBack ? (
        <FeedBackEl>
          <Title>Наши отзывы</Title>
          <Carusel>
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
            <Button>Оставить отзыв</Button>
            <Button onClick={() => nextFeedBack()}>
              <img src={Arrow} alt="right" />
            </Button>
          </Flex>
        </FeedBackEl>
      ) : (
        ""
      )}
    </>
  );
};
