import styled from "styled-components";

const StageEl = styled.div`
  position: relative;
  h4 {
    font-size: 24px;
    font-weight: 900;
    margin-bottom: 16px;
    position: relative;
    z-index: 3;
    @media screen and (max-width: 675px) {
      text-align: center;
    }
  }
  p {
    position: relative;
    z-index: 3;
    @media screen and (max-width: 675px) {
      text-align: center;
    }
  }
`;
const BgNumber = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 160px;
  font-weight: bold;
  color: var(--yellow);
  opacity: 0.7;
`;

export const Stage = ({ description, stage, id }) => {
  return (
    <StageEl>
      <h4>{stage}</h4>
      <p>{description}</p>
      <BgNumber>{id}</BgNumber>
    </StageEl>
  );
};
