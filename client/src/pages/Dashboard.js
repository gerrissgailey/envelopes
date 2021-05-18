import React, { useState } from "react";
import Envelope from "../components/Envelope/Envelope"
import { Link } from "react-router-dom";
import api from "../utils/API";

function Dashboard() {
    return (
    <>
        <div className="container">
            <Envelope />
        </div>
    </>
    ) 
}

export default Dashboard