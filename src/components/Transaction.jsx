import React from 'react'
import { ListItem, ListItemIcon, ListItemText, styled } from '@mui/material'
import DeleteIcon from "@mui/icons-material/Delete"

const Detail = styled(ListItem)`
    margin-top: 10px;
`
const StyledDeleteIcon = styled(DeleteIcon)`
    &:hover{
        cursor: pointer;
    }
`

const Transaction = ({ transaction, setTransactions }) => {

    const color = transaction.amount > 10 ? 'green' : 'red';

    const handleDeleteTransaction = (id) => {
        setTransactions(prevState => prevState.filter(item => item.id !== id))
    }

    return (
        <Detail style={{ background: `${color}`, color: '#fff' }}>
            <ListItemIcon>
                <StyledDeleteIcon
                    sx={{color: "#fff"}}
                    onClick={() => handleDeleteTransaction(transaction.id)}
                />
            </ListItemIcon>
            <ListItemText>
                {transaction.text}
            </ListItemText>
            <ListItemText>
                {transaction.amount}
            </ListItemText>
        </Detail>
    )
}

export default Transaction