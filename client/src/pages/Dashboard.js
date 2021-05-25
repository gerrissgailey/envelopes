import React, { useState, useEffect } from "react";
import Envelope from "../components/Envelope/Envelope";
import { Link, Redirect } from "react-router-dom";
import api from "../utils/API";
import { useRecoilState } from "recoil";
import { userState } from "../utils/UserAtom";
import { envelopeState } from "../utils/EnvelopeAtom";
import "../components/Envelope/Envelope.css";
import { Pie } from "react-chartjs-2"; 

function Dashboard() {
    const [user, setUser] = useRecoilState(userState)
    const [envelope, setEnvelope] = useRecoilState(envelopeState)

    

    let [chartValues, setChartValues] = useState([])
    let [chartLabels, setChartLabels] = useState([])
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


    useEffect(() => {
        api.getEnvelopes(user._id)
        .then(res => setEnvelope(res.data))
        .catch (err => console.log(err))
    }, [])

    useEffect(() => {
        api.getEnvelopes(user._id)
        .then(res => setChartLabels(
            res.data.map(x => x.envelopeName)
        ))
        .catch (err => console.log(err))
    }, [])

    useEffect(() => {
        api.getEnvelopes(user._id)
        .then(res => setChartValues(
            res.data.map(x => x.total)
        ))


        .catch (err => console.log(err))
    }, [])


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

        <div style={{height: "250px", width: "350px"}}>
        <Pie
          data={pieChart}
          options={{
              title:{
                  display:true,
                  text:'',
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
    </>
    ) 
}

export default Dashboard