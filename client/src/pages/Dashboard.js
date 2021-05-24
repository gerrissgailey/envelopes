import React, { useState, useEffect } from "react";
import Envelope from "../components/Envelope/Envelope"
import { Link, Redirect } from "react-router-dom";
import api from "../utils/API";
import { useRecoilState } from "recoil";
import { userState } from "../utils/UserAtom"
import { envelopeState } from "../utils/EnvelopeAtom";
import "../components/Envelope/Envelope.css";

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
        <p>Click on an envelope to view transactions or enter an expense.</p>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
            {envelope && envelope.length === 0 ? <p>You don't have any envelopes</p> : envelope && envelope.map(envelope =>
                <Link to={`/envelope/${envelope._id}`} className="text-link">
                        <Envelope
                            name={envelope.envelopeName}
                            total={envelope.total}
                        />
                        {/* {JSON.stringify(envelope)} */}
                </Link>
            )
            }
        </div>
    </>
    ) 
}

export default Dashboard