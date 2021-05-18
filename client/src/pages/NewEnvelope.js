import React from "react"
import { useRecoilState } from "recoil";
import { userState } from "../utils/UserAtom";
import { Link, Redirect } from "react-router-dom";

function NewEnvelope() {
    const [user, setUser] = useRecoilState(userState)
    // console.log(user)
    return !user ? <Redirect to="/login"/> : (
    <div>
        new envelope page
        {/* <form className="newEnvelope">
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">New Envelope</label>
                <input type="text" className="form-control" id="newEnvelope" placeholder="Envelope Name" onChange={e => setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Sign Up</button>
        </form> */}
    </div>
    )
}

export default NewEnvelope