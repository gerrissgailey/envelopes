import React, { useState, useEffect } from "react";
import DepositAllocation from "../components/DepositAllocation"
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
        if (amount.startsWith("-")) {
            setAmount(amount.substring(1))
        }
        api.deposit(payee, date, notes, Object.values(envelopeInput))
        setPayee("");
        setDate("");
        setAmount("");
        setNotes("");
    }

    return !user ? <Redirect to="/login" /> : (
        <>
            <div>
                <h1>Enter New Deposit:</h1>
                <form className="newTransaction">
                    <div className="form-group">
                        <label htmlFor="payee">Payer</label>
                        <input type="text" className="form-control" id="payee" placeholder="Payer" onChange={e => setPayee(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input type="text" className="form-control" id="date" placeholder="date" onChange={e => setDate(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount">Deposit Amount</label>
                        <input type="text" className="form-control" id="amount" placeholder="amount" onChange={e => setAmount(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="notes">Notes</label>
                        <input type="text" className="form-control" id="notes" placeholder="notes" onChange={e => setNotes(e.target.value)} />
                    </div>
                    <table>
                        {envelope && envelope.length === 0 ? <p>You don't have any envelopes</p> : envelope.length > 0 && envelope.map(envelope =>
                            <tr>
                                <td>
                                    {envelope.envelopeName}
                                </td>
                                <td>
                                    ${envelope.total}
                                </td>
                                <td>
                                    $<input name={envelope.envelopeName} type="number" placeholder="0.00" onChange={(e) => setEnvelopeInput(({...envelopeInput, [e.target.name]: {value: e.target.value, id: envelope._id}}))} />
                                </td>
                            </tr>
                        )
                        }
                    </table>
                    <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Deposit