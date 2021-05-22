import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import api from "../utils/API";
import { userState } from "../utils/UserAtom";
import { useRecoilState } from "recoil";

function TransactionForm() {
    const [user, setUser] = useRecoilState(userState)
    const [transaction, setTransaction] = useState("")
    const [redirect, setRedirect] = useState("")

    function handleFormSubmit(event) {
        event.preventDefault();
        // if (!transaction) {
        //   alert("Please enter a payee for your transaction.");
        //   return;
        // }
        console.log(transaction)
        api.createTransaction(transaction, user._id)
        setTransaction("");
        // setRedirect("/dashboard");
      }
    // console.log(user)
    return !user ? <Redirect to="/login"/> : (
    <div>
        <h1>Enter New Transaction:</h1>
        <form className="newTransaction">
            <div className="form-group">
                <label htmlFor="payee">Payee</label>
                <input type="text" className="form-control" id="payee" placeholder="Payee" onChange={e => setTransaction(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
        </form>
    </div>
    )
}

export default TransactionForm;
