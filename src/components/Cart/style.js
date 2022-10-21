import styled from "styled-components";

export const CartDiv = styled.div`
  position: fixed;
  display: block;
  width: 363px;
  height: 365px;
  left: 72.5%;
  top: 11%;

  @media (max-width: 768px) {
    background: #fff;
    position: relative;
    width: 90%;
    height: 535px;
    z-index: 999px;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
    margin-left: 0.5rem;
  }
`;

export const CartHeader = styled.div`
  background-color: #27ae60;
  width: 365px;
  height: 62px;
  display: flex;
  border-radius: 5px;
  color: white;

  h3 {
    margin-left: 0.5rem;
  }

  @media (max-width: 768px) {
    background-color: #27ae60;
    width: 100%;
    height: 62px;
    display: flex;
    border-radius: 5px;
    color: white;
    position: relative;
  }
`;

export const CartUl = styled.ul`
  margin-top: -0.1rem;
  height: 60%;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  flex-direction: column;
  overflow: scroll;

  span {
    margin-left: -1.2rem;
    margin-top: 5rem;
    font-weight: bold;
    font-size: 20px;
  }
`;
