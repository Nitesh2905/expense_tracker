import "./App.css";
import { Typography, styled, Box } from "@mui/material";

import Balance from "./components/Balance";
import Expenses from "./components/Expenses";
import Transactions from "./components/Transactions";
import TransactionList from "./components/TransactionList";
import { useState } from "react";

const Header = styled(Typography)`
  text-align: center;
  font-size: 2rem;
`;

const Component = styled(Box)`
  display: flex;
  width: 800px;
  padding: 10px;
  height: 100vh;
  margin: auto;

  & > div {
    height: 70vh;
    width: 50%;
    padding: 10px;
  }
`;

function App() {
  const [transactions, setTransactions] = useState([]);
  return (
    <Box style={{ background: "#F6F6F6" }}>
      <Header>Expense Tracker</Header>
      <Typography variant="h6" textAlign="center">
        {" "}
        Note: For Expenses amt add - sign to amount.
      </Typography>
      <Component>
        <Box>
          <Balance transactions={transactions} />
          <Expenses transactions={transactions} />
          <Transactions setTransactions={setTransactions} />
        </Box>
        <Box>
          <TransactionList
            transactions={transactions}
            setTransactions={setTransactions}
          />
        </Box>
      </Component>
    </Box>
  );
}

export default App;
