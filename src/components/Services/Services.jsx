import { useSelector } from "react-redux";
import styled from "styled-components";
import { Title } from "../Title";
import { Service } from "./Service";
import { useState } from "react";

const ServicesEl = styled.section`
  margin: auto 180px;
  margin-top: 110px;
  padding-bottom: 70px;
  border-bottom: 6px solid var(--yellow);
  @media screen and (max-width: 1120px) {
    margin-left: 5%;
    margin-right: 5%;
  }
`;
const SubTitle = styled.h4`
  text-decoration: underline;
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 80px;
  @media screen and (max-width: 1120px) {
    font-size: 30px;
    margin-top: 0;
    margin-bottom: 30px;
  }
`;

export const Services = () => {
  const draftService = useSelector((state) => state.allInfo.list.draft_service);
  const cleanService = useSelector((state) => state.allInfo.list.clean_service);
  const legalService = useSelector((state) => state.allInfo.list.legal_service);
  const [isActive1, setActive1] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);
  const handleActive1 = () => {
    setActive1(!isActive1);
  };
  const handleActive2 = () => {
    setActive2(!isActive2);
  };
  const handleActive3 = () => {
    setActive3(!isActive3);
  };
  return (
    <ServicesEl id="price">
      <Title>Прайс</Title>
      <SubTitle>Черновая электрика</SubTitle>
      <Service
        isActive={isActive1}
        handleActive={handleActive1}
        service={draftService}
      />
      <SubTitle>Чистовая электрика</SubTitle>
      <Service
        isActive={isActive2}
        handleActive={handleActive2}
        service={cleanService}
      />
      <SubTitle>Виды услуг для юридических лиц</SubTitle>
      <Service
        isActive={isActive3}
        handleActive={handleActive3}
        service={legalService}
      />
    </ServicesEl>
  );
};
