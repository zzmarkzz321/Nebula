import React from 'react';
import './Button.scss';

export type ButtonProps = {
    children?: any,
    onClick?: () => any,
    disabled?: boolean
};

export const PrimaryButton = ({
    children,
    onClick,
    disabled
}: ButtonProps) => (
    <button
        className={`button ${disabled ? 'button--disabled' : 'button__primary'}`}
        disabled={disabled}
        onClick={onClick}
    >{children}</button>
);

export const SecondaryButton = ({
    children,
    onClick,
    disabled
}: ButtonProps) => (
    <button
        className={`button ${disabled ? 'button--disabled' : 'button__secondary'}`}
        disabled={disabled}
        onClick={onClick}
    >{children}</button>
);

export default PrimaryButton;