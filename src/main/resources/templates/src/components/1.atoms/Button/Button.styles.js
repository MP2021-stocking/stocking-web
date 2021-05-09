import styled from "styled-components";

const buttonBackground = props => {
    let colour;
    switch (props.variant) {
        case "primary":
        case "search":
            colour = "#a4d65e";
            break;
        case "secondary":
            colour = "#e4e4e4";
            break;
        default:
            colour = "#a4d65e";
            break;
    }

    return colour;
};

const buttonBorder = props => {
    switch (props.variant) {
        case "primary":
        case "search":
            return "solid 1px #12af67"
        case "secondary":
            return "solid 1px rgba(112, 112, 112, 0.52)"
        default:
            return "#a4d65e";
    }
};

const StyledButton = styled.button`
  padding: 5px;
  align-items: center;
  text-align: center;
  background-color: ${props => buttonBackground(props)};
  border-radius: 5px;
  border: ${props => buttonBorder(props)};
  cursor: pointer;
  line-height: 1;
  outline: none;
  text-decoration: none;
  transition: all 0.15s ease;
  white-space: nowrap;
  font-family: S-Core, serif;
  font-weight: 400;

  .button__icon {
    display: inline-block;
    margin-right: 4px;
  }
`;

export default StyledButton;

export const StyledSearchButton = styled.button`
  font-family: S-Core, serif;
  font-size: 22px;
  background-color: #a4d65e;
  width: 112px;
  height: 45px;
  border: 0;
  font-weight: 200;
`

export const StyledToggle = styled.a`
  height: 30px;
  text-align: center;
  color: #2e2a2b;
  background-color: #e7e8e8;
  border-radius: 12px;
  border: 0;
  padding: 6px 18px 6px 18px;
  cursor: pointer;
  line-height: normal;
  text-decoration: none;
  font-family: S-Core, serif;
  font-weight: 500;
  font-size: 14px;

  :hover {
    color: green;
    text-decoration: none;
  }
`;

export const StyledLinkButton = styled(StyledButton).attrs({as: "a"})``;
