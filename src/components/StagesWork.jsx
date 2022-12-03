import { useSelector } from "react-redux";

export const StagesWork = () => {
  const stageWork = useSelector((state) => state.allInfo.list.stage_work);
};
