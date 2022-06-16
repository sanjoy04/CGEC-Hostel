import styled from "styled-components";

export const MainContainer = styled.div`
  padding-top: 90px;
  color: rgb(206, 190, 5);
`;

export const IndexTop = styled.div`
  
  padding: 40px;
  background-color: rgb(0, 0, 0);
  opacity:0.5;

  &:hover {
    padding:45px;
    color:yellow;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
`;
export const AboutText = styled.p`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    transition: 200ms ease-in;
  }
`;