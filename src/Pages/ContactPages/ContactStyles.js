import styled from "styled-components";

export const HeadingTop = styled.div`
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

export const MainContainer = styled.div`
  padding-top: 20rem;
`;

export const Heading1 = styled.h2`
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
export const RowIn1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
  color: white;
  // margin: 0 7rem;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-item: center;
    // margin: 0 2rem;
  }
`;

export const ColRowMain = styled.div`
  // display: flex;
  // flex-direction: column;
  align-item: center;
  justify-content: center;
  text-align: left;
  width:30%;
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

export const Row = styled.div`
display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;
export const Row1 = styled.div`
display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8rem;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
  }
`;
export const Col = styled.div`
display: flex;
  flex-direction: column;
  width:100%;
`;
export const Address = styled.div`
`;
export const Heading = styled.h4`

`;
export const Text = styled.div`

`;
export const Line = styled.div`

`;
export const Body = styled.div`
padding: 15px;
`;
export const Submit = styled.div`
justify-content: center;
    display: flex;
    padding: 10px;
`;
export const Phone = styled.div`

`;
export const Mail = styled.div`
`;
