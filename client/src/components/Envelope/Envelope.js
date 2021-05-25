import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
// import api from "../utils/API";
import { userState } from "../../utils/UserAtom";
import { envelopeState } from "../../utils/EnvelopeAtom";
import { useRecoilState } from "recoil";
import "./Envelope.css";


function Envelope(props) {
    const [user, setUser] = useRecoilState(userState)
    const [envelope, setEnvelope] = useRecoilState(envelopeState)
    // api.getEnvelopes()
    return (
        <div className="card text-dark">
            <img src="https://live.staticflickr.com/65535/51194437431_b2c9f783a7_z.jpg" className="card-img" alt="envelope" />
            <div className="card-img-overlay">
                <h1 className="card-text envelopeTotal">${props.total}</h1>
            </div>
            <h5 className="card-footer text-center">{props.name}</h5>
        </div>
    )
}

export default Envelope