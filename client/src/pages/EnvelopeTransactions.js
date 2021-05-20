import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import api from "../utils/API";

const EnvelopeTransactions = () => {
  const { id } = useParams();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.getTransactions(id).then(res => setTransactions(res.data))
  }, []);

  return (
    transactions.length > 0 && transactions.map(transaction =>
      <div className="row">
        <p>{transaction.name}</p>
        <p>{transaction.amount}</p>
      </div>)
  )
};

export default EnvelopeTransactions;
