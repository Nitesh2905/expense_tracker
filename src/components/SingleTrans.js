import { ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

const SingleTrans = ({ transaction, transactions, setTransactions }) => {
  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };
  const color = transaction.amount > 0 ? "green" : "red";
  return (
    <ListItem
      style={{ background: `${color}`, marginTop: "8px", color: "#fff" }}
    >
      <ListItemText>{transaction.text}</ListItemText>
      <ListItemText>{transaction.amount}</ListItemText>
      <Typography onClick={() => deleteTransaction(transaction.id)}>
        Delete
      </Typography>
    </ListItem>
  );
};

export default SingleTrans;
