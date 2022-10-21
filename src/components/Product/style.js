import styled from "styled-components";

export const CardLi = styled.li`
  border: solid #e0e0e0;
  border-radius: 0.5rem;
  margin-right: 2rem;
  margin-top: 1rem;
  width: 29%;
  height: 330px;

  img {
    background-color: #f5f5f5;
    height: 55%;
    width: 100%;
  }

  .info {
    margin-left: 1rem;
  }

  p {
    margin-top: -0.7rem;
    color: gray;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  button {
    width: 30%;
    height: 40px;
    font-size: 85%;
    background-color: #27ae60;
    border-radius: 10px;
    color: white;
    border: none;
    margin-top: 0.5rem;
    cursor: pointer;
  }

  span {
    margin-top: -0.5rem;
    font-weight: bold;
    color: #27ae60;
  }

  @media (max-width: 768px) {
    border: solid #f5f5f5;
    border-radius: 0.5rem;
    width: 300px;
    height: 346px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 3%;

    img {
      background-color: #f5f5f5;
      height: 60%;
      width: 100%;
    }
  }
`;
