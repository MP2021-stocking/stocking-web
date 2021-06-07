import styled from "styled-components";

const StyledStockInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 732px;
  height: 514px;

  .stock-info-table {
    display: flex;
    flex-direction: column;
    margin-top: 42px;
  }

  .stock-name {
    padding: 10px;
    font-family: S-Core, serif;
    font-weight: 500;
    font-size: 28px;
  }

  .table-top {
    display: flex;
  }

  .chart {
    border: 1px solid lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default StyledStockInfo;