import React from "react";

import { Box, Typography, List, styled } from "@mui/material";
import SingleTrans from "./SingleTrans";

const Container = styled(Box)`
  margin-top: 10px;
`;

const TransactionList = ({ transactions, setTransactions }) => {
  return (
    <Container>
      <Typography variant="h5">Transaction History</Typography>
      <List>
        {transactions.map((transaction) => (
          <SingleTrans
            key={transaction.id}
            transaction={transaction}
            transactions={transactions}
            setTransactions={setTransactions}
          />
        ))}
      </List>
    </Container>
  );
};

export default TransactionList;
