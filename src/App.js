import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoPage } from "./components/features/allInfo-slice";
import { MainContent } from "./components/MainContent";
import { Navigate } from "./components/Navigation/Navigate";
import { Order } from "./components/Order";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { OrderIsProcessed } from "./components/OrderIsProcessed";
import { AddOrder } from "./components/AddOrder";
import { AddFeedBack } from "./components/FeedBack/AddFeedBack";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const isAddOrder = useSelector((state) => state.isAddShow);
  const isShowOrder = useSelector((state) => state.isShow);
  const isAddFeedBack = useSelector((state) => state.isAddFeedBack);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    dispatch(getInfoPage());
  }, [dispatch]);
  window.addEventListener("resize", function () {
    setWidth(this.window.innerWidth);
  });
  return (
    <>
      <MainContent />
      <Navigate width={width} />
      <Content width={width} />
      <Order />
      <Footer />
      {isAddFeedBack && <AddFeedBack />}
      {isAddOrder && <AddOrder />}
      {isShowOrder && <OrderIsProcessed />}
    </>
  );
}

export default App;
