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
    <div className="App container bg-dark text-light h-auto p-5 rounded-5">
      <div className="border-bottom mb-5">
        <h1 className="display-1 mb-5">Payment Transaction Dashboard</h1>
      </div>

      {error && <p className="error">{error}</p>}
      <div className="d-flex gap-5 bg-secondary bg-gradient text-light p-3 rounded-4 my-4">
        <div>
          <label className='fs-6 p-2'>Start Date:</label>
          <input className='p-2 rounded-2' type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div>
          <label className='fs-6 p-2'>End Date:</label>
          <input className='p-2 rounded-2' type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>

      </div>
      <div className="container my-4" style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {filteredTransactions.map((transaction) => (
          <div key={transaction.id} className="card mb-3 shadow-sm">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h5 className="card-title mb-1">{transaction.description}</h5>
                <p className="card-text text-muted small">
                  {format(parseISO(transaction.date), 'MMM dd, yyyy')}
                </p>
              </div>
              <div className="text-end">
                <span className="badge bg-success fs-5">
                  ${transaction.amount.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;