import styled from "styled-components";

const StyledInputText = styled.input`
  border-radius: 5px;
  border: solid 1px #707070;
  background-color: #efefef;
  font-family: S-Core, serif;
  font-weight: 400;
  font-size: 20px;
  text-indent: 24px;

  ::placeholder {
    color: #918a8c;
  }
`;

export default StyledInputText;

export const StyledSearchBar = styled.div`
  width: 460px;
  height: 45px;
  background-color: #ffffff;
  padding: 7.5px 0 7.5px 7.5px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  input {
    font-family: S-Core, serif;
    font-weight: 500;
    font-size: 25px;
    border: 0;

    ::placeholder {
      color: rgba(18, 175, 103, 0.64);
    }

    :focus {
      outline: none;
    }
  }
`;