import styled from "styled-components";

export const MainContainer = styled.div`
  padding-top: 110px;
`;
export const FacilitiesTop = styled.div`
  margin: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  color: white;
  padding: 20px;
  border: 1px solid #999;
  border-radius: 10px;
  background-color: #20232a;
  box-shadow: 10px 10px rgb(184, 182, 184);

  &:hover {
    margin: 15px;
    margin-right: 25px;
    margin-bottom: 25px;
    background-color: #20232a;
    box-shadow: 10px 10px rgb(184, 182, 184);
  }
`;
export const FacilitiesCard = styled.div`

  margin: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  `;

export const Responsibitity = styled.div`
margin: 20px;
margin-top: 40px;
background: rgb(231, 235, 240);
border-radius: 10px;
`;

export const Heading1 = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
`;
export const Heading = styled.p`
  font-size: 24px;
  color: #000;
  margin-bottom: 20px;
  font-weight: bold;
`;
export const FacilitiesText = styled.p`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    transition: 200ms ease-in;
  }
`;

export const Heading2 = styled.h4`
  margin-left: 60px;
  @media (max-width: 1000px){
      margin-left : 0;
  }
`;

export const People = styled.p`
  color: #000;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  margin-left: 20px;

  &:hover {
    transition: 200ms ease-in;
  }
`;
export const Peoples = styled.div`
  border-radius: 10px;
  padding-bottom: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;