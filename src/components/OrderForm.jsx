import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setActiveAddOrder } from "./features/isShowAddOrder-slice";
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
  const isShowAddOrder = useSelector((state) => state.isAddShow);
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
    return await axios.post("http://electrical.makser-test.site/api/forms/", {
      email: email,
      username: name,
      number: number,
    });
  };
  const addOrder = async () => {
    if (formValid) {
      initialForm();
      if (!isShowOrder) {
        dispatch(setActiveOrder(!isShowOrder));
      }
    }
    if (isShowAddOrder) {
      dispatch(setActiveAddOrder(!isShowAddOrder));
    }
  };
  const nameHandler = (e) => {
    setName(e.target.value);
    const re = /^[а-яА-ЯёЁa-zA-Z -]{3,40}$/;
    if (
      !re.test(String(e.target.value)) ||
      e.target.value.trim().length < 2 ||
      e.target.value.trim().length > 40
    ) {
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
              className={emailDirty ? "false" : "true"}
              addOrderForm={addOrderForm}
              addOrder={addOrder}
              name="email"
              type="email"
              value={email}
              onChange={(e) => emailHandler(e)}
              placeholder="Ваш E-mail"
            />
            <Input
              className={numberDirty ? "false" : "true"}
              addOrderForm={addOrderForm}
              name="number"
              type="text"
              value={number}
              onChange={(e) => numberHandler(e)}
              placeholder="+375(99)999-99-99"
            />
            <Input
              className={nameDirty ? "false" : "true"}
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
              className={emailDirty ? "false" : "true"}
              addOrder={addOrder}
              name="email"
              type="email"
              value={email}
              onChange={(e) => emailHandler(e)}
              placeholder="Ваш E-mail"
            />
            <Input
              className={numberDirty ? "false" : "true"}
              name="number"
              type="text"
              value={number}
              onChange={(e) => numberHandler(e)}
              placeholder="+375(99)999-99-99"
            />
            <Input
              className={nameDirty ? "false" : "true"}
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
