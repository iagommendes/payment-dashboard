import React, { useState, useEffect } from 'react';
import { fetchTransactions } from './mock/transactions';
import { format, parseISO, isWithinInterval } from 'date-fns';

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
}

const App: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  useEffect(() => {
    fetchTransactions()
      .then((data) => setTransactions(data))
      .catch((err) => setError(err));
  }, []);

  useEffect(() => {
    if (startDate && endDate) {
      const filtered = transactions.filter((transaction) =>
        isWithinInterval(parseISO(transaction.date), {
          start: parseISO(startDate),
          end: parseISO(endDate),
        })
      );
      setFilteredTransactions(filtered);
    } else {
      setFilteredTransactions(transactions);
    }
  }, [transactions, startDate, endDate]);

  return (
    <div className="App">
      <h1>Payment Transaction Dashboard</h1>
      {error && <p className="error">{error}</p>}
      <div>
        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <label>End Date:</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>
      <ul>
        {filteredTransactions.map((transaction) => (
          <li key={transaction.id}>
            <strong>{transaction.description}</strong> - {format(parseISO(transaction.date), 'MMM dd, yyyy')} - ${transaction.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;