import styled from "styled-components";

const highPriceColor = (props) => {
    return props.highColor ? "#b3142f" : "#0065b1";
};
const openPriceColor = (props) => {
    return props.openColor ? "#b3142f" : "#0065b1";
};
const lowPriceColor = (props) => {
    return props.lowColor ? "#b3142f" : "#0065b1";
};

export const StyledStockPriceDetail = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid gray;

  
  .detail {
    flex: 1;
    display: flex;
    align-items: center;
    border: 1px solid #f0f0f0;
    

    .content {
      display: flex;
      flex: 1;
      padding-left: 10px;
      div {
        margin-left: 4px;
        display: inline-block;
      }
    }
  }

  .high-price {
    color: ${props => highPriceColor(props)};
  }

  .open-price {
    color: ${props => openPriceColor(props)};
  }

  .low-price {
    color: ${props => lowPriceColor(props)};
  }
`;