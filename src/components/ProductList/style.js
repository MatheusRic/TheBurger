import styled from "styled-components";

export const CardUl = styled.ul`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  margin-left: 7rem;
  width: 54%;
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    margin-left: -2rem;
    overflow-y: hidden;
  }
`;
