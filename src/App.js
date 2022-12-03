import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoPage } from "./components/features/allInfo-slice";
import { MainContent } from "./components/MainContent";
import { Navigate } from "./components/navigation/Navigate";

function App() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.allInfo);
  useEffect(() => {
    dispatch(getInfoPage());
  }, [dispatch]);
  return (
    <>
      {status === "loading" ? (
        <div>loading....</div>
      ) : (
        <>
          <MainContent />
          <Navigate />
        </>
      )}
    </>
  );
}

export default App;
