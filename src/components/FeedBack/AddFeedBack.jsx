import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import Cross from "../../images/cross.svg";
import { setActiveAddFeedBack } from "../features/addFeedBack-slice";
import axios from "axios";
import { useEffect } from "react";
import { setActiveThankForReview } from "../features/thankForReview-slice";
import { setCheckForm } from "../features/isCheckForm-slice";
const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Input = styled.input`
  font-size: 16px;
  padding-left: 15px;
  padding-right: 15px;
  height: 40px;
  width: 400px;
  @media screen and (max-width: 470px) {
    width: 250px;
  }
`;
const Review = styled.textarea`
  resize: none;
  height: 150px;
  width: 400px;
  padding: 10px;
  font-size: 15px;
  @media screen and (max-height: 478px) {
    height: 80px;
  }
  @media screen and (max-width: 470px) {
    width: 250px;
  }
`;
const Button = styled.button`
  background-color: var(--yellow);
  border: 3px solid var(--yellow);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: white;
    border: 3px solid var(--yellow);
  }
`;
const AddFeedBackEl = styled.div`
  position: relative;
  padding: 25px;
  background-color: white;
  box-shadow: 0px 0px 6px 2px var(--yellow);
  display: flex;
  flex-direction: column;
  gap: 20px;
  img {
    cursor: pointer;
    position: absolute;
    width: 25px;
    height: 25px;
    top: 15px;
    right: 15px;
  }
`;
const AddFile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  input {
    border: 1px solid black;
    padding: 10px;
    @media screen and (max-width: 470px) {
      padding: 0;
    }
  }
  label {
    font-size: 14px;
  }
`;
export const AddFeedBack = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [nameDirty, setNameDirty] = useState(true);
  const [reviewDirty, setReviewDirty] = useState(true);
  const [formValid, setFormValid] = useState(false);
  const isAddFeedBack = useSelector((state) => state.isAddFeedBack);
  const isActiveThankForReview = useSelector((state) => state.isThankForReview);
  const isCheckForm = useSelector((state) => state.isCheckForm);
  const dispatch = useDispatch();
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
  const reviewHandler = (e) => {
    setReview(e.target.value);
    if (
      e.target.value.trim().length < 30 ||
      e.target.value.trim().length > 300
    ) {
      setReviewDirty(true);
    } else {
      setReviewDirty(false);
    }
  };
  const addReview = () => {
    dispatch(setCheckForm(!isCheckForm));
    if (formValid) {
      fetchFunc();
      dispatch(setActiveAddFeedBack(!isAddFeedBack));
    }
  };
  const closeModal = () => {
    if (isCheckForm) {
      dispatch(setCheckForm(!isCheckForm));
    }
    dispatch(setActiveAddFeedBack(!isAddFeedBack));
  };
  const fetchFunc = async () => {
    let dataToSend;
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("name_surname", name);
      formData.append("review", review);
      dataToSend = formData;
    } else {
      dataToSend = {
        image: selectedFile,
        name_surname: name,
        review: review,
      };
      console.log(dataToSend);
    }
    try {
      const response = await axios.post(
        "https://electric.makser-test.site/api/review-post/",
        dataToSend
      );
      console.log(response);
      if (response.data.error) {
        alert(response.data.error);
      }
      dispatch(setActiveThankForReview(!isActiveThankForReview));
    } catch (e) {
      alert(e.request.responseText);
    }
  };
  useEffect(() => {
    if (reviewDirty || nameDirty) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [reviewDirty, nameDirty]);
  return (
    <Wrapper>
      <AddFeedBackEl>
        <h2>Оставить отзыв</h2>
        <img onClick={() => closeModal()} src={Cross} alt="X" />
        <Input
          className={isCheckForm ? (nameDirty ? "false" : "true") : " "}
          type="text"
          name="name"
          onChange={(e) => nameHandler(e)}
          placeholder="Ваше имя"
        />
        <AddFile>
          <label>Файл</label>
          <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            accept="image/*,.png,.jpg,.gif,.web,jpeg,"
          />
        </AddFile>
        <Review
          placeholder="Отзыв"
          className={isCheckForm ? (reviewDirty ? "false" : "true") : " "}
          onChange={(e) => reviewHandler(e)}
        />
        <Button onClick={() => addReview()}>Отправить</Button>
      </AddFeedBackEl>
    </Wrapper>
  );
};
