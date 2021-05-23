import React, { useState, useEffect } from "react";
import Envelope from "../components/Envelope/Envelope"
import { Link, Redirect } from "react-router-dom";
import api from "../utils/API";
import { useRecoilState } from "recoil";
import { userState } from "../utils/UserAtom"
import { envelopeState } from "../utils/EnvelopeAtom";
import { Pie } from "react-chartjs-2"  

function Dashboard() {
    const [user, setUser] = useRecoilState(userState)
    const [envelope, setEnvelope] = useRecoilState(envelopeState)

    

    // added by jordon 5-22-21
    let chartValues = [6,8,9,2,5]
    let chartLabels = [1,2,3,4,5]
    const pieChart = {
        labels: chartLabels,
        datasets: [
          {
            label: 'Budget',
            backgroundColor: [
              "#0018F9",
              "#3BB143",
              "#D30000",
              "#9966CB",
              "#FC6600",
              "#BEBDBB"
            ],
            hoverBackgroundColor: [
            "#000080",
            "#0B6623",
            "#800000",
            "#702963",
            "#B1560F",
            "#48494B"
            ],
            data: chartValues
          }
        ]
      }





    // end of jordon





    useEffect(() => {
        api.getEnvelopes(user._id)
        .then(res => setEnvelope(res.data))
        .catch (err => console.log(err))
    }, [])


    return !user ? <Redirect to="/login"/> : (
    <>
        {envelope && envelope.length === 0 ? <p>You don't have any envelopes</p> : envelope && envelope.map(envelope =>
            <Link to={`/envelope/${envelope._id}`}>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <Envelope
                        name={envelope.envelopeName}
                        total={envelope.total}
                    />
                    {/* {JSON.stringify(envelope)} */}
                </div>
            </Link>
        )
        }

        {/* =========================data added by Jordon 5-22-21 */}
        <div style={{height: "250px", width: "350px"}}>

        <Pie
          data={pieChart}
          options={{
              title:{
                  display:true,
                  text:'Average Rainfall per month',
                  fontSize:20
                },
                legend:{
                    display:true,
                    position:'right'
                },
                responseive: true
            }}
            />
            </div>


        {/* ========================= end */}
    </>
    ) 
}

export default Dashboard