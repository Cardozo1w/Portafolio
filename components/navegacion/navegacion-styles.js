import styled from "styled-components";

export const Nav = styled.div`
  max-width: 1300px;
  width: 95%;
  /* height: 100px; */
  padding: 10px 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1{
    margin: 0;
  }

  a {
    color: #000;
    margin-right: 20px;
    text-decoration: none;
  }

  nav {
    display: none;
  }

  @media (min-width: 768px) {
    nav {
      display: flex;
    }
  }
`;
