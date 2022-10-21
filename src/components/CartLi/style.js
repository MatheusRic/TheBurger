import styled from "styled-components";

export const TagLi = styled.li`
  width: 120%;
  display: flex;
  justify-content: flex-start;
  margin-top: 0.5rem;

  img {
    background-color: #e0e0e0;
    border-radius: 10px;
    width: 70px;
    height: 70px;
  }

  .nameDesc {
    margin-top: -1.1rem;
    margin-left: 0.5rem;
  }

  h2 {
    max-width: 9ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 19px;
  }

  h4 {
    color: gray;
    margin-top: 0rem;
    margin-left: 0.5rem;
  }

  .remove {
    width: 70px;
    height: 20px;
    background-color: #f5f5f5;
    border: none;
    color: gray;
    font-size: 15px;
    margin-left: 5rem;

    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-left: 5rem;

    display: flex;
    flex-wrap: wrap;
    margin-left: -70%;

    img {
      width: 70px;
      height: 70px;
      background-color: #f5f5f5;
    }

    h2 {
      font-size: 18px;
      margin-right: 10%;
      margin-left: 2.3%;
    }

    h4 {
      margin-left: 27%;
      margin-top: -9%;
      color: gray;
    }

    .remove {
      margin-left: 20%;
      margin-top: -19.2%;
      width: 70px;
      height: 20px;
      background-color: white;
      border: none;
      color: gray;
      cursor: pointer;
    }
  }
`;

export const Quantity = styled.div`
  display: flex;
  width: 50px;
  height: 30px;
  justify-content: center;
  align-items: center;
  margin-top: -1rem;
  margin-left: 1rem;

  button {
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  p {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;
