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

const Button = ({label, href, icon, onClick, variant, items, setStockName, ...props}) => {
    const [labelValue, setLabelValue] = useState(label);

    const setDropdownValue = (e) => {
        setLabelValue(e)
        changeOrder(props.data, e)
    }

    function changeOrder(data, flag) {
        let stock_infos = []
        let sorted_data = data
        if (flag === "0") {
            sorted_data = sorted_data.sort((a, b) => (a.name > b.name) ? 1 : -1)
        } else if (flag === "1") {
            sorted_data = sorted_data.sort((a, b) => (a.close < b.close) ? 1 : -1)
        } else if (flag === "2") {
            sorted_data = sorted_data.sort((a, b) => (a.change < b.change) ? 1 : -1)
        } else if (flag === "3") {
            sorted_data = sorted_data.sort((a, b) => (a.pred < b.pred) ? 1 : -1)
        }

        for (let i = 0; i < sorted_data.length; i++) {
            stock_infos.push(<StockInfoText name={sorted_data[i].name} open={sorted_data[i].open}
                                            change={sorted_data[i].change}
                                            pred={sorted_data[i].pred} weight={400} size={"16px"}
                                            setStockName={setStockName}/>)
        }

        props.setStockInfos(stock_infos)
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

export const SearchButton = ({text, onClick}) => {
    return (
        <StyledSearchButton onClick={onClick}>
            {text}
        </StyledSearchButton>
    );
};