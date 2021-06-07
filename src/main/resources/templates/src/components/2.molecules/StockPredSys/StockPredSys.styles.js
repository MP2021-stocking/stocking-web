import styled from "styled-components";

const StyledStockPredSys = styled.div`
  width: 494px;
  display: flex;
  flex-direction: column;
  margin-right: 100px;
  margin-bottom: 100px;

  div {
    display: flex;
  }

  .filter-btn {
    margin-left: auto;
    float: right;
    margin-bottom: 28px;
  }

  .stock-pred-box {
    display: flex;
    flex-direction: column;
  }

  .search-bar {
    position: relative;
    width: 500px;
    padding: 16px;
    background-color: #3e9a2c;
    top: 50px;
  }

  .stock-list {
    position: relative;
    width: 500px;
    padding: 5px 30px 30px;
    top: 45px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 10px solid #3e9a2c;
    height: 400px;
  }

  .stocks {
    display: flex;
    flex-direction: column;
    height: 300px;
    overflow-x: scroll;
  }

`;

export default StyledStockPredSys;