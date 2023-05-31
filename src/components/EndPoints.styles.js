import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  background: var(--darkGrey);
  padding: 0 60px;
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 25px;
  background: transparent;
  margin: 0 auto;
  padding: 20px, 20px, 20px, 20px;
  border-radius: 20px;
  color: var(--white);
  border: 1px solid gray;
  box-shadow: 1px 1px 1px 1px slate;

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
  }

  input {
    font-size: 18px;
    color: gray;
    position: absolute;
    left: 0;
    margin: 4px 0;
    padding: 0 0 0 10px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 20px;
    // color: var(--white);

    :focus {
      outline: none;
    }
  }
`;
