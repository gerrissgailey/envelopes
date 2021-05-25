import React, { useState, useEffect } from "react";
// import DepositAllocation from "../components/DepositAllocation"
import { Link, Redirect } from "react-router-dom";
import api from "../utils/API";
import { useRecoilState } from "recoil";
import { userState } from "../utils/UserAtom"
import { envelopeState } from "../utils/EnvelopeAtom";


function Deposit() {
    const [user, setUser] = useRecoilState(userState)
    const [envelope, setEnvelope] = useRecoilState(envelopeState)
    const [payee, setPayee] = useState("")
    const [date, setDate] = useState("")
    const [amount, setAmount] = useState("")
    const [notes, setNotes] = useState("")
    const [envelopeInput, setEnvelopeInput] = useState({})
    const [redirect, setRedirect] = useState("")


    useEffect(() => {
        api.getEnvelopes(user._id)
            .then(res => setEnvelope(res.data))
            // .then(res => console.log(res))
            .catch(err => console.log(err))
        // .then(console.log(data))
    }, [])

    useEffect(() => console.log(Object.values(envelopeInput)), [envelopeInput])

    function handleFormSubmit(event) {
        event.preventDefault();
        if (Object.values(envelopeInput).length < 1 ) {
            return}
        
        const total = (Object.values(envelopeInput)).map(x => parseInt(x.value))
        var newTotal = total.reduce(redFunc);

        function redFunc(total, num) {
            return total + num;
        }
            
        if (newTotal === parseInt(amount)) {
            api.deposit(payee, date, notes, Object.values(envelopeInput))
            .then(() => {
                setPayee("");
                setDate("");
                setAmount("");
                setNotes("");
                setRedirect("/dashboard");
        })
            
        } else {
            alert ("Your allocations don't add up to your deposit amount entered. Please check your math!!!")
        }
    }

    return !user ? <Redirect to="/login" /> : redirect ? <Redirect to="/dashboard" /> : (
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <h1>Enter a Deposit</h1>
                    <form className="newDeposit">
                        <div className="mb-3">
                            <label htmlFor="payee">Payer</label>
                            <input type="text" className="form-control" id="payee" placeholder="Payer" value={payee} onChange={e => setPayee(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date">Date</label>
                            <input type="date" className="form-control" id="date" placeholder="Date" value={date} onChange={e => setDate(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="amount">Deposit Amount</label>
                            <input type="number" className="form-control" id="amount" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="notes">Notes</label>
                            <input type="text" className="form-control" id="notes" placeholder="Notes" value={notes} onChange={e => setNotes(e.target.value)} />
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Envelope</th>
                                    <th scope="col">Current Amount</th>
                                    <th scope="col">Deposit Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {envelope && envelope.length === 0 ? <p>You don't have any envelopes</p> : envelope.length > 0 && envelope.map((envelope, i) =>
                                    <tr key={i}>
                                        <td>
                                            {envelope.envelopeName}
                                        </td>
                                        <td>
                                            ${envelope.total}
                                        </td>
                                        <td>
                                            $<input name={envelope.envelopeName} type="number" value={envelopeInput[envelope.envelopeName.value]} placeholder="0.00" onChange={(e) => setEnvelopeInput(({...envelopeInput, [e.target.name]: {value: e.target.value, id: envelope._id}}))} />
                                        </td>
                                    </tr>
                                )
                                }
                            </tbody>
                        </table>
                        <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
                    </form>
                </div>
            </div>
    )
}

export default Deposit