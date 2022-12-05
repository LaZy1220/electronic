import styled from "styled-components";

const ServiceEl = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  height: 98px;
  position: relative;
  overflow: hidden;
`;
const Text = styled.p`
  width: 400px;
`;

const Type = styled.div`
  display: flex;
  gap: 4px;
  justify-content: space-between;
  p ~ p {
    text-decoration: underline;
  }
`;
const Button = styled.button`
  position: absolute;
  right: 180px;
`;
export const Service = ({ service }) => {
  return (
    <>
      <ServiceEl>
        {service?.map((item) => (
          <Type>
            <Text>{item.service}</Text>
            <p>от {item.price} руб.</p>
          </Type>
        ))}
      </ServiceEl>
      <Button>Читать больше </Button>
    </>
  );
};
