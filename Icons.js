import React from 'react';
import { SvgIcon } from '@mui/material';

// Define the LeftAlignIcon component
export const LeftAlignIcon = (props) => (
    <SvgIcon {...props} viewBox="0 0 24 24">
        <path d="M4 6h16v2H4zm0 4h12v2H4zm0 4h8v2H4zm0 4h16v2H4z" />
    </SvgIcon>
);

// Define the RightAlignIcon component
export const RightAlignIcon = (props) => (
    <SvgIcon {...props} viewBox="0 0 24 24">
        <path d="M20 6H4v2h16zm0 4H8v2h12zm0 4H4v2h16zm0 4H4v2h16z" />
    </SvgIcon>
);
