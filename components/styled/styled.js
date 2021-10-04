import styled from "styled-components";

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: #5cbcb9;
    font-size: 40px;
  }

  p {
    font-size: 20px;
    font-weight: 400;
  }
`;

export const GridNosotros = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);

  img {
    width: 70%;
    border-radius: 50%;
    text-align: center;
  }

  .img-nosotros{
    display: flex !important;
    justify-content: center;
    align-items: center;
  }

  p {
    line-height: 40px;
  }
`;

export const GridSkills = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
`;

export const CardSkill = styled.div`
padding: 100px 100px;
`