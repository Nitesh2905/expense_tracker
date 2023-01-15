import { Box, styled } from "@mui/material";
import React from "react";

const Container = styled(Box)`
  margin-bottom: 5px;
  font-size: 20px;
  text-align: center;
`;

const Balance = ({ transactions }) => {
  const amount = transactions.map((transaction) => transaction.amount);

  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return <Container>Balance:Rs {total}</Container>;
};

export default Balance;
