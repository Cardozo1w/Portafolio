import styled from "styled-components";

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: #5cbcb9;
    font-size: 37px;
  }

  p {
    font-size: 23px;
    font-weight: 400;
    margin: 0;
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
row-gap: 50px;
`;

export const CardSkill = styled.a`
color: #000;
text-decoration: none;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 75px;
transition: .2s all ease;

&:hover{
  color: #2d918d;
  cursor: pointer;

}

p{
  font-size: 25px;
}

svg{
  
}
`