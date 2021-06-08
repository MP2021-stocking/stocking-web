import styled from "styled-components";

const StyledNewsSample = styled.div`
  margin-top: 40px;
  display: flex;

  .positive-body {
    width: 680px;
    height: 800px;
    background-color: #ffe2e2;
  }

  .negative-body {
    width: 680px;
    height: 800px;
    background-color: #9fdffa;
  }
  .div-body{
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