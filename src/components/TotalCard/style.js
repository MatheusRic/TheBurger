import styled from "styled-components";

export const DivTotal = styled.div`
  border: solid #e0e0e0;
  border-radius: 10px;
  width: 361px;
  height: 130px;
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: -1rem;

  .info {
    margin-top: -4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    font-weight: bold;
    margin-left: 0.5rem;
  }

  span {
    margin-right: -22rem;
  }

  button {
    margin-top: 4.4rem;
    width: 361px;
    height: 60px;
    background-color: #e0e0e0;
    color: gray;
    border-radius: 10px;
    border: none;

    cursor: pointer;
  }
`;
