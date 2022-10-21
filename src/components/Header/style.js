import styled from "styled-components";

export const TagHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background-color: #f5f5f5;

  img {
    width: 230px;
    height: 40px;
    margin-left: 7%;
    margin-top: 1%;
  }

  input {
    border: solid #e0e0e0;
    border-radius: 1rem;
    margin-top: 1%;
    width: 350px;
    height: 60px;
    margin-right: 4rem;
  }

  button {
    border: none;
    border-radius: 1rem;
    background-color: #27ae60;
    color: white;
    position: relative;
    height: 40px;
    width: 107px;
    cursor: pointer;
    margin-left: 15rem;
    top: -50%;
  }

  div {
    width: 350px;
    height: 60px;
    margin-right: 11rem;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 107%;
    height: 120px;

    input {
      margin-left: 2rem;
      width: 70%;
    }

    button {
      top: -42%;
      left: -4.2rem;
    }
  }
`;
