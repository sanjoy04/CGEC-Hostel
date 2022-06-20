import styled from "styled-components";

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
  grid-gap: 30px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
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
