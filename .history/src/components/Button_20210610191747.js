/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { Children } from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({ 
    childern, type, onClick, buttonStyle, buttonSize 
}) => { 
    // eslint-disable-next-line no-undef
    const checkButtonStyle = STYLES.include(buttonStyle) ? buttonStyle : STYLE[0] 
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to='/' className= 'btn-Mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick= {onClick} type= {type}>
                {children}
            </button>
        </Link>
    )
};