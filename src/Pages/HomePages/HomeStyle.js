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

export const RowIn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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

// export const Heading = styled.p`
//   font-size: 24px;
//   color: green;
//   margin-bottom: 40px;
//   font-weight: bold;
// `;


export const MainContainer = styled.div`
  padding-top: 30rem;
  color: rgb(255, 255, 255);
  height: 60rem;
  text-align: centre;
  background-color: #161616;
    clip-path: polygon(0% 30%, 75% 10%, 100% 20%, 100% 100%, 0% 100%);
    // clip-path: polygon(0 19rem, 69rem 6rem, 100rem 15rem, 100rem 100rem, 0 100rem);

  @media (max-width: 1000px) {
    padding-top: 53rem;
    clip-path: polygon(0% 10%, 75% 5%, 100% 7%, 100% 100%, 0% 100%);
  }
`;

export const IndexTop = styled.div`
  // margin:60px;
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