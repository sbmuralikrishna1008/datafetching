import React from 'react';
import { useState, useEffect } from 'react';


export default function Layer() {
    let [resdata,setResdata]=useState([]);

    useEffect(()=>{
        const getdata= async ()=>{
            const rdata= await fetch('https://jsonplaceholder.typicode.com/users');
            const users= await rdata.json()
            setResdata(users);
            console.log( resdata)
        }

        getdata();
    },[])


  return (
    <React.Fragment>
    <div>layer</div>
    <div>
        <button>Request for the Data</button>
        <div id='data1'></div>
        <ul>
            {resdata.map((rd)=>{
                return <li key={rd.id}>{rd.address.street}</li>
            })}
        </ul>
    </div>
    </React.Fragment>
  )
}
