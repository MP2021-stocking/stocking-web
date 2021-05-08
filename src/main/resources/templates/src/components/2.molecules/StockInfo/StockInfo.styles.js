import styled from "styled-components";

const StyledStockInfo = styled.div`
  .stock-info-table {
    border: 1px solid black;
    width: 732px;
    height: 514px;
    margin-top: 42px;
  }

  .stock-name {
    border: 1px solid black;
    padding: 10px;
    font-family: S-Core, serif;
    font-weight: 500;
  }

  .stock-price-table {
    border: 1px solid black;
  }

  .table-top {
    display: flex;
    border: 1px solid black;
  }

  .stock-price-main {
    border: 1px solid black;
    width: 25%;
    padding: 14px 10px;
  }

  .current-price {
    border: 1px solid black;
  }

  .current-price-info {
    border: 1px solid black;
  }

  .stock-price-detail {
    display: flex;
    flex-direction: column;
    border: 1px solid black;

    .detail {
      display: flex;
    }
  }
`;

export default StyledStockInfo;