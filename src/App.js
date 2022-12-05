import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getInfoPage } from "./components/features/allInfo-slice";
import { MainContent } from "./components/MainContent";
import { Navigate } from "./components/Navigation/Navigate";
import { Order } from "./components/Order";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";

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
      <Order />
      <Footer />
    </>
  );
}

export default App;
