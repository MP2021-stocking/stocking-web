import styled from "styled-components";

const StyledSignupForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 542px;

  input {
    width: 98.9%;
    height: 72px;
  }

  Button {
    width: 100%;
    height: 80px
  }

  .form-area {
    margin-top: 100px;
    width: 542px;

    .form {
      margin-bottom: 63px;
    }
  }

  .tel2 {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-family: S-Core, serif;
    color: #707070;

    #tel-sel {
      margin-left: 18px;
      width: 118px;
      height: 45px;
      margin-right: 20px;
      padding: 2px;
    }
  }

  .input-tel {
    display: flex;
    button {
      margin-left: 28px;
      padding: 0;
    }
  }

`;

export default StyledSignupForm;