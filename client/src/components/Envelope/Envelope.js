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
        <div className="col">
            <div class="card">
                <img src="https://live.staticflickr.com/65535/51194437431_d0fd1a6ef1_o.png" class="card-img" alt="envelope" />
                <div class="card-img-overlay z-index">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.total}</p>
                </div>
            </div>
        </div>
    )
}

export default Envelope