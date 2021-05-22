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
        setPayee("");
        setDate("");
        setAmount("");
        setNotes("");
        // setEnvelope("");
        // setRedirect("/dashboard");
      }
    // console.log(user)
    return !user ? <Redirect to="/login"/> : (
    <div>
        <h1>Enter New Deposit:</h1>
        <form className="newTransaction">
            <div className="form-group">
                <label htmlFor="payee">Payer</label>
                <input type="text" className="form-control" id="payee" placeholder="Payer" onChange={e => setPayee(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input type="text" className="form-control" id="date" placeholder="date" onChange={e => setDate(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="amount">Deposit Amount</label>
                <input type="text" className="form-control" id="amount" placeholder="amount" onChange={e => setAmount(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="notes">Notes</label>
                <input type="text" className="form-control" id="notes" placeholder="notes" onChange={e => setNotes(e.target.value)}/>
            </div>
            
            <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
        </form>
    </div>
    )
}

export default TransactionForm;
