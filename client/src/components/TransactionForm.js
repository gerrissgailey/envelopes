import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import api from "../utils/API";
import { userState } from "../utils/UserAtom";
import { useRecoilState } from "recoil";

function TransactionForm(props) {
    const [user, setUser] = useRecoilState(userState)
    const [payee, setPayee] = useState("")
    const [date, setDate] = useState("")
    const [amount, setAmount] = useState("")
    const [notes, setNotes] = useState("")
    // const [envelope, setEnvelope] = useState("")
    const [redirect, setRedirect] = useState("")

    function handleFormSubmit(event) {
        event.preventDefault();
        if (amount.startsWith("-")) {
            setAmount(amount.substring(1))
        }
        // console.log(transaction)
        api.createTransaction(payee, date, amount, notes, props.envelopeId)
        .then(res => props.update(prevState => [...prevState, res.data]))
        .then(() => {
            setPayee("");
            setDate("");
            setAmount("");
            setNotes("");
        })
      }
    // console.log(user)
    return !user ? <Redirect to="/login"/> : (
    <div className="row">
        <div className="col-md-6 offset-md-3">
            <h1>Enter an Expense</h1>
            <form className="newTransaction">
                <div className="mb-3">
                    <label htmlFor="payee">Payee</label>
                    <input type="text" className="form-control" id="payee" placeholder="Payee" value={payee} onChange={e => setPayee(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="date">Date</label>
                    <input type="date" className="form-control" id="date" placeholder="Date" value={date} onChange={e => setDate(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" className="form-control" id="amount" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="notes">Notes</label>
                    <input type="text" className="form-control" id="notes" placeholder="Notes" value={notes} onChange={e => setNotes(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
            </form>
        </div>
    </div>
    )
}

export default TransactionForm;
