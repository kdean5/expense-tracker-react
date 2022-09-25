import React from 'react'
import { Typography, Box, Divider, List } from '@mui/material'
import Transaction from './Transaction'

const Transactions = ({ transactions, setTransactions }) => {
    return (
        <Box>
            <Typography variant="h5">Transactions History</Typography>
            <Divider />
            <List>
                {
                    transactions.map(transaction => (
                        <Transaction
                            key={transaction.id}
                            transaction={transaction}
                            setTransactions={setTransactions}
                        />
                    ))
                }
            </List>
        </Box>
    )
}

export default Transactions