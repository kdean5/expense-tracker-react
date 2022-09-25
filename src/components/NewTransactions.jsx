import React, { useState } from 'react'
import { Box, TextField, Typography, styled, Button } from '@mui/material'

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    & > h5, & > div, & > button {
        margin-top: 30px;
    }
`

const NewTransactions = ({ setTransactions }) => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const handleAddTransaction = () => {
        const transaction = {
            id: Math.floor(Math.random() * 1000000),
            text: text,
            amount: +amount
        }
        setTransactions(prevState => [transaction, ...prevState]);
        setText('')
        setAmount('')
    }

    return (
        <Container>
            <Typography variant="h5">New Transaction</Typography>
            <TextField
                label="Enter expense"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <TextField
                label="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <Button
                variant="contained"
                onClick={() => handleAddTransaction()}
            >
                Add Transaction
            </Button>
        </Container>
    )
}

export default NewTransactions