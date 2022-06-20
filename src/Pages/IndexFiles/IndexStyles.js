import styled from "styled-components";

export const MainContainer = styled.div`
  padding-top: 90px;
  color: rgb(255, 255, 255);
  height: 100%;
  text-align: centre;
`;

export const IndexTop = styled.div`
  margin:60px;
  color: white;
  padding: 40px;
  @media (max-width: 767px) {
    /* mobile */
    margin:0;
}

@media (max-width: 991px) {
    /* tablet */
    margin:0;
}
`;

export const Heading = styled.h3`
  margin-bottom: 20px;
  font-weight: bold;
  color:white;
`;
export const AboutText = styled.p`
  margin-bottom: 20px;
  font-size: 24px;
  background: rgb(0,0,0,0.5);
  padding: 20px;
  border-radius:10px;
`;
