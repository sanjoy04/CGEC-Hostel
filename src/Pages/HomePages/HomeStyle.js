import styled from "styled-components";

export const Box = styled.div`
  padding-top: 100px;
  justify-content: flex-end;
  margin-top: 50px;
  bottom: 0;
  width: 100%;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: centre;
  margin-left: 20px;
  grid-gap: 30px;
`;

export const OuterRow = styled.div`
display: grid;
grid-template-columns: 2fr 1fr;
grid-gap: 30px;

@media (max-width: 1000px) {
  grid-template-columns: 1fr;
}
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const InnerBox = styled.div`
  background:white;
  border:1px solid black;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: green;
  margin-bottom: 40px;
  font-weight: bold;
`;