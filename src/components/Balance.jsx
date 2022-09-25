import React from 'react'
import { Typography, styled, Box } from '@mui/material';

const BalanceText = styled(Typography)`
    font-size: 25px;
    margin-bottom: 20px;
`

const Balance = ({ transactions }) => {

    const total = transactions.reduce((acc, item) => {
        return acc += item.amount
    }, 0).toFixed(2)

    return (
        <Box>
            <BalanceText>Balance: ₹{total}</BalanceText>
        </Box>
    )
}

export default Balance