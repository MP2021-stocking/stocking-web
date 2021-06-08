import React, {useState} from "react";
import {func, node, string} from "prop-types";
import StyledButton, {StyledLinkButton, StyledToggle, StyledSearchButton} from "./Button.styles";
import {Dropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import StockInfoText from "../Text/StockInfoText/StockInfoText";

const Icons = {};

const CustomToggle = React.forwardRef(({children, onClick}, ref) => (
    <StyledToggle
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}>
        {children}
    </StyledToggle>
));

const Button = ({label, href, icon, onClick, variant, items, ...props}) => {
    const [labelValue, setLabelValue] = useState(label);

    const setDropdownValue = (e) => {
        setLabelValue(e)
        changeOrder(props.data, e)
    }

    function getStockInfos(data, onChange) {
        let result = []
        for (let i = 0; i < data.length; i++) {
            result.push(<StockInfoText name={data[i].name} open={data[i].open} change={data[i].change}
                                       pred={data[i].pred} weight={400} size={"16px"} onChange={onChange}/>)
        }
        return result;
    }

    function changeOrder(data, flag) {
        let res = data
        if (flag === "0") {
            res = res.sort((a, b) => (a.name > b.name) ? 1 : -1)
        } else if (flag === "1") {
            res = res.sort((a, b) => (a.close < b.close) ? 1 : -1)
        } else if (flag === "2") {
            res = res.sort((a, b) => (a.change < b.change) ? 1 : -1)
        } else if (flag === "3") {
            res = res.sort((a, b) => (a.pred < b.pred) ? 1 : -1)
        }
        props.setStockInfos(getStockInfos(res))
    }

    if (!href && !items) {
        return (
            <StyledButton onClick={onClick} variant={variant}>
                {icon && <ButtonIcon name={icon}/>}
                {label}
            </StyledButton>
        );
    } else if (href) {
        return (
            <StyledLinkButton href={href} variant={variant}>
                {icon && <ButtonIcon name={icon}/>}
                {label}
            </StyledLinkButton>
        );
    } else if (items) {
        let itemTitles = []
        for (let i = 0; i < items.titles.length; i++) {
            itemTitles.push(<Dropdown.Item eventKey={i}>{items.titles[i]}</Dropdown.Item>)
        }
        return (
            <Dropdown
                onSelect={setDropdownValue}>
                <Dropdown.Toggle as={CustomToggle}>
                    정렬 : {items.titles[labelValue]}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {itemTitles}
                </Dropdown.Menu>
            </Dropdown>);
    }
};

// Expected prop values
Button.propTypes = {
    label: node.isRequired,
    href: string,
    icon: string,
    onClick: func,
    variant: string
};

// Default prop values
Button.defaultProps = {
    label: "Button text",
    variant: "primary"
};

const ButtonIcon = ({name}) => {
    // If icon name value doesn't match Icons object keys then return null
    if (Icons[name] === undefined) return null;
    // If icon found, return the icon in a span element
    const Icon = Icons[name];
    return (
        <span className="button__icon">
			<Icon/>
		</span>
    );
};

// Button Icon component always expects on prop value for icon name
ButtonIcon.propTypes = {
    name: string.isRequired
};

export default Button;

export const SearchButton = ({text}) => {
    return (
        <StyledSearchButton>
            {text}
        </StyledSearchButton>
    );
};