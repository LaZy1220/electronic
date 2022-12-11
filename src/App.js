import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoPage } from "./components/features/allInfo-slice";
import { MainContent } from "./components/MainContent";
import { Navigate } from "./components/Navigation/Navigate";
import { Order } from "./components/Order";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { OrderIsProcessed } from "./components/OrderIsProcessed";

function App() {
  const dispatch = useDispatch();
  const isShowOrder = useSelector((state) => state.isShow);
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
      {isShowOrder && <OrderIsProcessed />}
    </>
  );
}

export default App;
