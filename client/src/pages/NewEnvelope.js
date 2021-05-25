import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import api from "../utils/API";
import { userState } from "../utils/UserAtom";
import { useRecoilState } from "recoil";

function NewEnvelope() {
    const [user, setUser] = useRecoilState(userState)
    const [envelope, setEnvelope] = useState("")
    const [redirect, setRedirect] = useState("")

    function handleFormSubmit(event) {
        event.preventDefault();
        if (!envelope) {
            alert("Please add a name for your envelope.");
            return;
        }
        console.log(envelope)
        api.createEnvelope(envelope, user._id)
        setEnvelope("");
        setRedirect("/dashboard");
    }
    console.log(user)
    return !user ? <Redirect to="/login" /> : (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h1>Add a New Envelope</h1>
                <form className="newEnvelope">
                    <div className="mb-3">
                        <label htmlFor="newEnvelope">Envelope Name</label>
                        <input type="text" className="form-control" id="newEnvelope" placeholder="Envelope Name" onChange={e => setEnvelope(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default NewEnvelope