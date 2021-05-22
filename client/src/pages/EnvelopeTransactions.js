import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import api from "../utils/API";
import TransactionForm from "../components/TransactionForm";

const EnvelopeTransactions = () => {
  const { id } = useParams();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.getTransactions(id).then(res => setTransactions(res.data))
  }, []);

  return (
    <>
      <TransactionForm />
      {transactions.length > 0 && transactions.map(transaction =>
        <div className="row">
          <p>{transaction.payee}</p>
        </div>)}
    </>
  );
};

export default EnvelopeTransactions;
