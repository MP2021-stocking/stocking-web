import styled from "styled-components";

const StyledSignupSuccess = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 542px;

  pre, p {
    font-family: S-Core, serif;
    text-align: center;
  }

  .p1 {
    margin-top: 72px;
    font-weight: 700;
    font-size: 35px;
  }

  .p2 {
    font-weight: 500;
    font-size: 27px;
    margin: 60px;
  }

  .signup-id {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 542px;
    height: 68px;
    border: solid 1px #707070;
    padding: 15px;
    p {
      text-align: left;
      font-weight: 400;
      font-size: 30px;
      margin: 0;
      
    }
  }

`;

export default StyledSignupSuccess;