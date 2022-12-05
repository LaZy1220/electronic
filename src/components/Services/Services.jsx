import { useSelector } from "react-redux";
import styled from "styled-components";
import { Title } from "../Title";
import { Service } from "./Service";

const ServicesEl = styled.div`
  margin: auto 180px;
  margin-top: 110px;
`;
const SubTitle = styled.h4`
  text-decoration: underline;
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 80px;
  margin-top: 40px;
`;

export const Services = () => {
  const draftService = useSelector((state) => state.allInfo.list.draft_service);
  const cleanService = useSelector((state) => state.allInfo.list.clean_service);
  const legalService = useSelector((state) => state.allInfo.list.legal_service);
  return (
    <ServicesEl>
      <Title>Прайс</Title>
      <SubTitle>Черновая электрика</SubTitle>
      <Service service={draftService} />
      <SubTitle>Чистовая электрика</SubTitle>
      <Service service={cleanService} />
      <SubTitle>Виды услуг для юридических лиц</SubTitle>
      <Service service={legalService} />
    </ServicesEl>
  );
};
