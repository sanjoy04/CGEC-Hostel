import styled from "styled-components";

export const MainContainer = styled.div`
  padding-top: 90px;
  color: rgb(255, 255, 255);
  height: 100%;
`;

export const IndexTop = styled.div`
  margin:60px;
  color: white;
  margin-left: 6rem;
  padding: 40px;
  text-align: left;
  @media (max-width: 767px) {
    /* mobile */
    margin:60px 0;
}

@media (max-width: 991px) {
    /* tablet */
    margin:60px 0;
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

  @media (max-width: 767px) {
    /* mobile */
    font-size: 14px;
  }

  @media (max-width: 991px) {
    /* tablet */
    font-size: 18px;
  }

`;
export const RowIn1 = styled.div`
  display:flex;
  justify-content: space-between;
  align-item: center;
  margin:7rem;
  margin-top: 20rem;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  

  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 5rem;
    margin: 0 2rem;
    margin-top: 20rem;
    margin-bottom: 20px;
  }
`;

export const ColRowMain = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  text-align: center;
  grid-gap: 30px;
  padding: 1rem;
  margin:1rem;
  background: linear-gradient(114.7deg, rgb(39, 39, 42) -9.77%, rgb(24, 24, 27) 110.32%);
  border: 2px solid, red;
  border-radius: 10px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const ColRow = styled.div`
  display: flex;
  text-align: left;
  // margin-left: 20px;
  grid-gap: 1rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    grid-gap: 0.5rem;

  }
`;
export const RowIn = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 0 10rem;
  margin-bottom: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0 2rem;
    margin-bottom: 20px;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  text-align: centre;
  // margin-left: 20px;
  grid-gap: 30px;
`;
