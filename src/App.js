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
  const [transactions, setTransactions] = useState([
    { id: 1, text: "Chips", amount: -10 },
    { id: 2, text: "Salary", amount: +1000 },
    { id: 3, text: "ColdDrink", amount: -12 },
    { id: 4, text: "Bonus", amount: 1500 },
  ]);
  return (
    <Box style={{ background: "#F6F6F6" }}>
      <Header>Expense Tracker</Header>

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
