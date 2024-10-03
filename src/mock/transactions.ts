export const transactions = [
    {
      id: "1",
      date: "2024-09-30",
      description: "Coffee Purchase",
      amount: 3.5,
    },
    {
      id: "2",
      date: "2024-10-01",
      description: "Grocery Shopping",
      amount: 25.0,
    },
    {
      id: "3",
      date: "2024-10-02",
      description: "Gas Station",
      amount: 50.0,
    },
    {
      id: "4",
      date: "2024-10-03",
      description: "Dinner Date",
      amount: 45.0,
    },
    {
      id: "5",
      date: "2024-10-04",
      description: "Online Purchase",
      amount: 20.0,
    },
    {
      id: "6",
      date: "2024-10-05",
      description: "Grocery Shopping",
      amount: 35.0,
    },
    {
      id: "7",
      date: "2024-10-06",
      description: "Coffee Purchase",
      amount: 3.5,
    },
    {
      id: "8",
      date: "2024-10-07",
      description: "Gas Station",
      amount: 50.0,
    },
    {
      id: "9",
      date: "2024-10-08",
      description: "Dinner Date",
      amount: 45.0,
    },
    {
      id: "10",
      date: "2024-10-09",
      description: "Online Purchase",
      amount: 20.0,
    },
    // Adicionar mais transações conforme necessário
];

export const fetchTransactions = (): Promise<typeof transactions> => {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (Math.random() < 0.9) {
        resolve(transactions);
    } else {
        reject("Failed to fetch transactions");
    }
    }, 500);
});
};