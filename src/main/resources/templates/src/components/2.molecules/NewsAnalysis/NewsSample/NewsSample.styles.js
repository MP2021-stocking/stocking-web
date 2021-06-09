import styled from "styled-components";

const StyledNewsSample = styled.div`
  margin-top: 40px;
  display: flex;


  .positive-body {
    background-color: #ffe2e2;
  }

  .plus-btn {
    cursor: pointer;
  }

  .negative-body {
    background-color: #9fdffa;
  }

  .div-body {
    width: 680px;
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .div-header {
    display: flex;
    justify-content: space-between;
    padding-right: 10px;

    .header-left {
      display: flex;

      img {
        margin-right: 10px;
        align-self: center;
      }
    }
  }


`;

export default StyledNewsSample;