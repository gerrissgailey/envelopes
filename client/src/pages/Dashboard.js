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
        console.log(api.getEnvelopes())
        api.getEnvelopes()
        .then(res => setEnvelope(res.data))
        // .then(console.log(data))
    }, [])
    // console.log(user._id)
    return !user ? <Redirect to="/login"/> : (
    <>
        {envelope.length === 0 ? <p>You don't have any envelopes</p> : envelope.map((x) => {
            return(
                <div className="container">
                    {x}
                </div>

            )
        })
        }
    </>
    ) 
}

export default Dashboard