import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import api from "../utils/API";
import TransactionForm from "../components/TransactionForm";
import { Line } from "react-chartjs-2"                          


const EnvelopeTransactions = () => {
  const { id } = useParams();
  const [transactions, setTransactions] = useState([]);
  // const [update, setUpdate] = useState([]);

  // ============================added 5-22-21
  const [theChart, setTheChart] = useState([])
  let dataToBeUsed = [1000,888,885,831,801,800,625,1010,667]
  let dataToBeUsed2 = [1,2,3,4,5,6,7,8,9]
  const chart = {
      labels: dataToBeUsed2,
      datasets: [
        {
          label: 'Balance',
          fill: false,
          lineTension: .75,
          backgroundColor: 'rgba(85,51,230,1)',
          borderColor: 'rgba(85,51,230,1)',
          borderWidth: 2,
          data: dataToBeUsed
        }
      ]
  }


  // ============================end of added 5-22-21


  useEffect(() => {
    api.getTransactions(id).then(res => {
      setTransactions(res.data)
    })
  }, []);

  return (
    <>
      <TransactionForm envelopeId={id} update={setTransactions}/>
      {transactions.length > 0 && transactions.map((transaction, i) =>
        <div className="row" key={i}>
          <p>{transaction.payee}</p>
        </div>)}

        {/* ========================================================Added 5-22-21 */}
        <div style={{height: "400px", width: "600px"}}>
          <Line
            data={chart}
            options={{
              title:{
                display:true,
                text:'title text',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              },
              responseive: true
            }}
          />
        </div>

        {/* -===================================================end of added 5-22-21 */}
    </>
  );
};

export default EnvelopeTransactions;
