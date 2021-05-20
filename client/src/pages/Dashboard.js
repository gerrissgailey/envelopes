import React, { useState, useEffect } from "react";
import Envelope from "../components/Envelope/Envelope"
import { Link, Redirect } from "react-router-dom";
import api from "../utils/API";
import { useRecoilState } from "recoil";
import { userState } from "../utils/UserAtom"
import { envelopeState } from "../utils/EnvelopeAtom";


function Dashboard() {
    const [user, setUser] = useRecoilState(userState)
    const [envelope, setEnvelope] = useRecoilState(envelopeState)

    
    useEffect(() => {
        api.getEnvelopes(user._id)
        .then(res => setEnvelope(res.data))
        // .then(res => console.log(res))
        .catch (err => console.log(err))
        // .then(console.log(data))
    }, [])
    // console.log(user._id)
    return !user ? <Redirect to="/login"/> : (
    <>
        {envelope && envelope.length === 0 ? <p>You don't have any envelopes</p> : envelope && envelope.map((x) => {
            return(
                <div className="container">
                    {JSON.stringify(x)}
                </div>
            )
        })
        }
    </>
    ) 
}

export default Dashboard