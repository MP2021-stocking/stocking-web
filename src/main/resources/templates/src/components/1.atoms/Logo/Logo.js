import React from 'react';
import {string} from 'prop-types';
import './Logo.css';
import IconLogo from "../../0.assets/Logo.svg"
import {withRouter} from "react-router-dom";


function Logo({logoLink, size, ...props}) {
    let logoPointerStyle = (logoLink !== null) ? "pointer" : "default"

    function logoOnClick() {
        if (logoLink !== null) {
            props.history.push(logoLink)
        }
    }

    return (<div style={{cursor: logoPointerStyle}} onClick={logoOnClick}>
        <img src={IconLogo}
             className={`logo-icon--${size}`}
             alt="logo"/>
    </div>);
}

Logo.propTypes = {
    icon: string,
    size: string
};

Logo.defaultProps = {
    size: "small"
};

export default withRouter(Logo);