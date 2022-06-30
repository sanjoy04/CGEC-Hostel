import styled from "styled-components";

export const MainContainer = styled.div`
  padding-top: 110px;
`;

export const AboutTop = styled.div`
  margin: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  color: white;
  padding: 20px;
  border-radius: 10px;
  background-color: rgb(32, 35, 42, 0.5);
  // background-color: rgb(255, 255, 255, 0.5);
  box-shadow: 10px 10px rgb(184, 182, 184, 0.5);
  text-align: center;
  align-items: center;
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
