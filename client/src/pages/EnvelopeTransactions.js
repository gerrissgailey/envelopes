import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import api from "../utils/API";
import TransactionForm from "../components/TransactionForm";

const EnvelopeTransactions = () => {
  const { id } = useParams();
  const [transactions, setTransactions] = useState([]);
  // const [update, setUpdate] = useState([]);

  useEffect(() => {
    api.getTransactions(id).then(res => setTransactions(res.data))
  }, []);

  return (
    <>
      <TransactionForm envelopeId={id} update={setTransactions}/>
      {transactions.length > 0 && transactions.map((transaction, i) =>
        <div className="row" key={i}>
          <p>{transaction.payee}</p>
        </div>)}
    </>
  );
};

export default EnvelopeTransactions;
