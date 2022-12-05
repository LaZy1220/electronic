import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getInfoPage } from "./components/features/allInfo-slice";
import { MainContent } from "./components/MainContent";
import { Navigate } from "./components/Navigation/Navigate";
import { Content } from "./components/Content";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfoPage());
  }, [dispatch]);
  return (
    <>
      <MainContent />
      <Navigate />
      <Content />
    </>
  );
}

export default App;
