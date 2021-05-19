import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
// import api from "../utils/API";
import { userState } from "../../utils/UserAtom";
import { envelopeState } from "../../utils/EnvelopeAtom";
import { useRecoilState } from "recoil";


function Envelope() {
    const [user, setUser] = useRecoilState(userState)
    const [envelope, setEnvelope] = useRecoilState(envelopeState)
    // api.getEnvelopes()
    return (
        <div>
            <h3 className="card-title">
                {envelope}
            </h3>
        </div>
    )
}

export default Envelope