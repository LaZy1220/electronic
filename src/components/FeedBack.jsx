import { useSelector } from "react-redux";
import styled from "styled-components";

const FeedBackEl = styled.div`
  margin: auto 20%;
  padding-bottom: 180px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;
export const FeedBack = () => {
  const feedBack = useSelector((state) => state.allInfo.list.review);
  return (
    <FeedBackEl>
      <Flex></Flex>
    </FeedBackEl>
  );
};
