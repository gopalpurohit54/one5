import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({ childern, type, onClick, buttonStyle, buttonSize }) => { const checkButtonStyle = STYLES.include(buttonStyle) ? buttonStyle : STYLE[0] };