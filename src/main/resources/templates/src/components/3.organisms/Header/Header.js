import React from 'react';
import StyledHeader from "../Header/Header.styles";
import {Navigation} from "../../2.molecules/Navigation/Navigation";
import Logo from "../../1.atoms/Logo/Logo";
import {withRouter} from "react-router-dom";


function Header({logoLink, items1, items2}) {
    return (<StyledHeader>
        <div className={"header-left"}>
            <Logo logoLink={logoLink} size={"small"}/>
            <Navigation name={"header-left"} items={items1}/>
        </div>
        <div>
            <Navigation name={"header-right"} items={items2}/>
        </div>
    </StyledHeader>);
}

Header.propTypes = {};

Header.defaultProps = {};

export default withRouter(Header);