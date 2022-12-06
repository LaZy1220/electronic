import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 40%;
  height: 60px;
  padding-left: 40px;
  font-size: 20px;
  @media screen and (max-width: 675px) {
    width: 60%;
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
  @media screen and (max-width: 675px) {
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

export const OrderForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [emailError, setEmailError] = useState("Почта не может быть пустой");
  const [nameError, setNameError] = useState("Имя не может быть пустым");
  const [numberError, setNumberError] = useState(
    "Телефон не может быть пустой"
  );
  const [formValid, setFormValid] = useState(false);
  useEffect(() => {
    if (emailError || numberError || nameError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, numberError, nameError]);

  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.trim().length < 3) {
      setNameError("Имя слишком короткое");
    } else {
      setNameError("");
    }
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректная почта");
    } else {
      setEmailError("");
    }
  };
  const numberHandler = (e) => {
    setNumber(e.target.value);
    const re = /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/;
    if (re) {
      setNumberError("Некорректный телефон");
    } else {
      setNumberError("");
    }
  };

  return (
    <>
      <OrderFormEl>
        <Input
          name="email"
          type="email"
          value={email}
          onChange={(e) => emailHandler(e)}
          placeholder="Ваш E-mail"
        />
        <Input
          name="number"
          type="number"
          value={number}
          onChange={(e) => numberHandler(e)}
          placeholder="+375(99)999-99-99"
        />
        <Input
          name="name"
          type="text"
          value={name}
          onChange={(e) => nameHandler(e)}
          placeholder="Ваше ФИО"
        />
        <SubButton
          formValid={formValid}
          name={name}
          email={email}
          number={number}
        >
          Отправить
        </SubButton>
      </OrderFormEl>
    </>
  );
};
