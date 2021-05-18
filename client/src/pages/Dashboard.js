import React, { useState } from "react";
import Envelope from "../components/Envelope/Envelope"
import { Link, Redirect } from "react-router-dom";
import api from "../utils/API";
import { useRecoilState } from "recoil";
import { userState } from "../utils/UserAtom"


function Dashboard() {
    const [user, setUser] = useRecoilState(userState)
    // console.log(user)
    return !user ? <Redirect to="/login"/> : (
    <>
        <div className="container">
            <Envelope />
        </div>
    </>
    ) 
}

export default Dashboard