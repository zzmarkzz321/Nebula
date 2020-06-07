import React from 'react';

import Button, { SecondaryButton } from './Button';

export default { title: 'Buttons' };

export const primary = () => (
    <Button
        onClick={() => alert('Primary Button Click')}
    >
        Primary Button
    </Button>
);

export const secondary = () => (
    <SecondaryButton
        onClick={() => alert('Secondary Button Click')}
    >
        Secondary Button
    </SecondaryButton>);

export const disabled = () => (
    <Button
        disabled={true}
        onClick={() => alert('hi')}
    >
        Disabled Button
    </Button>
);