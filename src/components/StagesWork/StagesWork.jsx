import { useSelector } from "react-redux";
import styled from "styled-components";
import { Title } from "../Title";
import { Stage } from "./Stage";

const StageWorkEl = styled.div`
  margin-top: 110px;
  padding-bottom: 150px;
`;
const Grid = styled.div`
  margin: auto 180px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 90px;
  @media screen and (max-width: 1120px) {
    margin: auto 20px;
    gap: 30px;
  }
  @media screen and (max-width: 675px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 70px;
    gap: 50px;
  }
`;

export const StagesWork = () => {
  const stageWork = useSelector((state) => state.allInfo.list.stage_work);
  return (
    <StageWorkEl id="stages-work">
      <Title>Этапы работы</Title>
      <Grid>
        {stageWork?.map((stage) => (
          <Stage key={stage.id} {...stage} />
        ))}
      </Grid>
    </StageWorkEl>
  );
};
