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
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Payee</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 && transactions.map((transaction, i) =>
              <tr key={i}>
                <td>{transaction.payee}</td>
                <td>{new Date(transaction.date).toLocaleDateString()}</td>
                <td>${transaction.amount}</td>
                <td>{transaction.notes}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EnvelopeTransactions;
