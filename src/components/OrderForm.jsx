import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setCheckForm } from "./features/isCheckForm-slice";
import { setActiveOrder } from "./features/isShowOrder-slice";

const Input = styled.input`
  width: ${(props) => (props.addOrderForm ? "100%" : "40%")};
  height: 60px;
  padding-left: 40px;
  font-size: 20px;
  @media screen and (max-width: 700px) {
    width: ${(props) => (props.addOrderForm ? "80%" : "60%")};
    height: 50px;
    padding-left: 20px;
    font-size: 18px;
  }
`;

const SubButton = styled.button`
  width: 40%;
  height: 60px;
  font-size: 20px;
  background-color: var(--yellow);
  border: none;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: white;
    border: 3px solid var(--yellow);
  }
  @media screen and (max-width: 700px) {
    width: 60%;
    height: 50px;
    padding-left: 20px;
    font-size: 18px;
  }
`;

const OrderFormEl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

export const OrderForm = ({ addOrderForm }) => {
  const isShowOrder = useSelector((state) => state.isShow);
  const isCheckForm = useSelector((state) => state.isCheckForm);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [emailDirty, setEmailDirty] = useState(true);
  const [nameDirty, setNameDirty] = useState(true);
  const [numberDirty, setNumberDirty] = useState(true);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailDirty || numberDirty || nameDirty) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailDirty, numberDirty, nameDirty]);
  const fetchFunc = async () => {
    try {
      const response = await axios.post(
        "http://electrical.makser-test.site/api/forms/",
        {
          email: email,
          username: name,
          number: number,
        }
      );
      dispatch(setActiveOrder(!isShowOrder));
      if (response.data.error) {
        alert(response.data.error);
      }
    } catch (e) {
      console.log(e);
      alert(e.request.responseText);
    }
  };
  const addOrder = async () => {
    if (!isCheckForm) {
      dispatch(setCheckForm(!isCheckForm));
    }
    if (formValid) {
      initialForm();
    }
  };
  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.trim().length < 2 || e.target.value.trim().length > 40) {
      setNameDirty(true);
    } else {
      setNameDirty(false);
    }
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^[a-zA-Z0-9 -]+@([a-zA-Z -]+\.)+[a-zA-Z]{2,4}$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailDirty(true);
    } else {
      setEmailDirty(false);
    }
  };
  const numberHandler = (e) => {
    setNumber(e.target.value);
    const re =
      /^(\+375|80|375)(\(33\)|\(44\)|\(25\)|\(29\)|29|25|44|33)([0-9-]{3,4})([0-9-]{2,3})([0-9-]{2,3})$/;
    if (!re.test(String(e.target.value))) {
      setNumberDirty(true);
    } else {
      setNumberDirty(false);
    }
  };
  const initialForm = () => {
    fetchFunc();
    setEmail("");
    setNumber("");
    setName("");
    setEmailDirty(true);
    setNumberDirty(true);
    setNameDirty(true);
    setFormValid(false);
  };
  return (
    <>
      <OrderFormEl>
        {addOrderForm ? (
          <>
            <Input
              className={isCheckForm ? (emailDirty ? "false" : "true") : " "}
              addOrderForm={addOrderForm}
              addOrder={addOrder}
              name="email"
              type="email"
              value={email}
              onChange={(e) => emailHandler(e)}
              placeholder="Ваш E-mail"
            />
            <Input
              className={isCheckForm ? (numberDirty ? "false" : "true") : " "}
              addOrderForm={addOrderForm}
              name="number"
              type="text"
              value={number}
              onChange={(e) => numberHandler(e)}
              placeholder="+375(99)999-99-99"
            />
            <Input
              className={isCheckForm ? (nameDirty ? "false" : "true") : ""}
              addOrderForm={addOrderForm}
              name="name"
              type="text"
              value={name}
              onChange={(e) => nameHandler(e)}
              placeholder="Ваше имя"
            />
          </>
        ) : (
          <>
            <Input
              className={isCheckForm ? (emailDirty ? "false" : "true") : ""}
              addOrder={addOrder}
              name="email"
              type="email"
              value={email}
              onChange={(e) => emailHandler(e)}
              placeholder="Ваш E-mail"
            />
            <Input
              className={isCheckForm ? (numberDirty ? "false" : "true") : ""}
              name="number"
              type="text"
              value={number}
              onChange={(e) => numberHandler(e)}
              placeholder="+375(99)999-99-99"
            />
            <Input
              className={isCheckForm ? (nameDirty ? "false" : "true") : ""}
              name="name"
              type="text"
              value={name}
              onChange={(e) => nameHandler(e)}
              placeholder="Ваше имя"
            />
          </>
        )}

        <SubButton onClick={() => addOrder()}>Отправить</SubButton>
      </OrderFormEl>
    </>
  );
};
