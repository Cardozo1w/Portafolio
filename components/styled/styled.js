import styled from "styled-components";

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: #5cbcb9;
    font-size: 1.5rem;
    margin: 0;
  }

  p {
    font-size: 23px;
    font-weight: 400;
    margin: 0;
  }
`;

export const GridNosotros = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 50%);
  }

  img {
    width: 70%;
    border-radius: 50%;
    text-align: center;
  }

  .img-nosotros {
    display: flex !important;
    justify-content: center;
    align-items: center;
  }

  p {
    font-weight: 500;
    line-height: 30px;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    p {
      line-height: 40px;
    }
  }
`;

export const GridSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    row-gap: 0px;
  }
`;

export const CardSkill = styled.a`
  color: #000;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 75px;
  transition: 0.2s all ease;
  padding: 2rem;

  &:hover {
    color: #2d918d;
    cursor: pointer;
  }

  p {
    font-size: 25px;
    margin-top: 12px;
  }
`;

export const CardProject = styled.div`
  display: flex;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.3s ease-in-out;
  padding: 16px;
  text-decoration: none;
  color: inherit;
  margin-bottom: 30px;

  .project-image-container {
    width: 40%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .project-description-container {
    width: 60%;
    padding-left: 40px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
