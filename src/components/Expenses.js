import { Box, Card, CardContent, Typography, styled } from "@mui/material";
import React from "react";

const Container = styled(Box)`
  display: flex;
  & > div {
    flex: 1;
    padding: 10px;
  }
`;

const Expenses = ({ transactions }) => {
  const amount = transactions.map((transaction) => transaction.amount);

  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography>Income</Typography>
          <Typography style={{ color: "green" }}>Rs {income}</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography>Expense</Typography>
          <Typography style={{ color: "red" }}>Rs {expense}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Expenses;
