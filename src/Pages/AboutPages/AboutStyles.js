import styled from "styled-components";

export const MainContainer = styled.div`
  padding-top: 20rem;
`;

export const AboutTop = styled.div`
  margin: 10px;
  margin-left: 7rem;
  margin-top: 7rem;
  margin-bottom: 20px;
  color: white;
  padding: 20px;
  text-align: left;
  align-items: center;

  @media (max-width: 767px) {
    /* mobile */
    margin-left: 1rem;
    margin-top: 7rem;
  }

  @media (max-width: 991px) {
    /* tablet */
    margin-left: 1rem;
    margin-top: 7rem;
  }
`;

export const RowIn1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
  color: white;
  margin: 0 7rem;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-item: center;
    margin: 0 2rem;
  }
`;

export const ColRowMain = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  text-align: center;
  grid-gap: 30px;
  width:50%;
  padding: 1rem;
  margin: 1rem;
  background: linear-gradient(
    114.7deg,
    rgb(39, 39, 42) -9.77%,
    rgb(24, 24, 27) 110.32%
  );
  border: 2px solid, red;
  border-radius: 10px;

  @media (max-width: 1000px) {
    flex-direction: column;
    width:auto;
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

export const Responsibitity = styled.div`
  margin: 20px;
  margin-top: 40px;
  background: rgb(2, 5, 20, 0.5);
  border-radius: 10px;
`;

export const Heading1 = styled.h3`
  // font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
  // text-shadow:
  //   0 0 7px #fff,
  //   0 0 10px #fff,
  //   0 0 21px #fff,
  //   0 0 42px #0fa,
  //   0 0 82px #0fa,
  //   0 0 92px #0fa,
  //   0 0 102px #0fa,
  //   0 0 151px #0fa;
  // text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073,
  //   0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
`;
export const Heading = styled.p`
  font-size: 24px;
  color: white;
  margin-bottom: 20px;
  font-weight: bold;
`;
export const AboutText = styled.p`
  color: #fff;
  margin-bottom: 20px;
  font-size: 24px;
  text-decoration: none;

  &:hover {
    transition: 200ms ease-in;
  }
`;

export const Heading2 = styled.h4`
  color: white;
  padding-top: 20px;
  margin-left: 60px;
  @media (max-width: 1000px) {
    margin-left: 0;
  }
`;

export const People = styled.p`
  color: #000;
  // margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  margin-left: 20px;

  &:hover {
    transition: 200ms ease-in;
  }
`;
export const Peoples = styled.div`
  background:white;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 20px 0;
  // box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
  box-shadow: black;
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
