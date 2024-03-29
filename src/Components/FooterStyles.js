import styled from "styled-components";

export const Box = styled.div`
  padding-top: 20px;
  background: black;
  justify-content: flex-end;
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
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  @media (max-width: 1000px) {
    margin: 20px;
    text-align: center;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  // grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    // grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const FooterEndText = styled.p`
  text-align: center;
  color:	rgb(236, 236, 236);
`;
