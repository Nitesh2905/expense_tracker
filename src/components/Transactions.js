import React, { useState } from "react";

import { Box, styled, Typography, TextField, Button } from "@mui/material";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  & > h5,
  & > div,
  & > button {
    margin-top: 10px;
  }
`;

const Transactions = ({ setTransactions }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();

  const addTransaction = () => {
    const transaction = {
      id: Math.floor(Math.random() * 1000000),
      text: text,
      amount: +amount,
    };

    setTransactions((prevState) => [transaction, ...prevState]);
  };

  return (
    <Container>
      <Typography variant="h5">Transactions</Typography>
      <TextField
        label="Enter Expense"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></TextField>
      <TextField
        label="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      ></TextField>
      <Button variant="contained" onClick={() => addTransaction()}>
        ADD Transactions
      </Button>
    </Container>
  );
};

export default Transactions;
