import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import api from "../utils/API";
import TransactionForm from "../components/TransactionForm";
// import { Line } from "react-chartjs-2";


const EnvelopeTransactions = () => {
  const { id } = useParams();
  const [transactions, setTransactions] = useState([]);
  // const [update, setUpdate] = useState([]);

  // const [theChart, setTheChart] = useState([])
  // let dataToBeUsed = [1000,888,885,831,801,800,625,1010,667]
  // let dataToBeUsed2 = [1,2,3,4,5,6,7,8,9]
  // const chart = {
  //     labels: dataToBeUsed2,
  //     datasets: [
  //       {
  //         label: 'Balance',
  //         fill: false,
  //         lineTension: .75,
  //         backgroundColor: 'rgba(85,51,230,1)',
  //         borderColor: 'rgba(85,51,230,1)',
  //         borderWidth: 2,
  //         data: dataToBeUsed
  //       }
  //     ]
  // }



  useEffect(() => {
    api.getTransactions(id).then(res => {
      setTransactions(res.data)
    })
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

        {/* <div style={{height: "400px", width: "600px"}}>
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
        </div> */}
    </>
  );
};

export default EnvelopeTransactions;
