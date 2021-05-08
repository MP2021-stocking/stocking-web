import styled from "styled-components";

const priceColor = (props) => {
    if (props.colorFlag){
        return "#b3142f"
    }
    else {
        return "#0065b1"
    }
};

export const StyledStockPriceMain = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  background-color: #f5f5f5;
  width: 30%;
  padding: 14px 10px;
  font-family: S-Core, serif;
  font-size: 16px;
  font-weight: 600;

  
  .current-price{
    font-size: 24px;
    color: ${props => priceColor(props)};
  }
  
  .current-price-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${props => priceColor(props)};

    .div {
      flex: 1;
    }

    .compare {
      font-weight: 400;
      font-size: 12px;
      color: gray;
    }

    div + div {
      margin-left: 10px;
    }
  }
`;