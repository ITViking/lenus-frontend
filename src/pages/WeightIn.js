import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import '../App.css';

export default function WeightIn() {
  const history = useHistory();
  let { id } = useParams();
  const [weight, setWeight] = useState(0);
  const [date, setDate] = useState(new Date());
  
  useEffect(async () => {
    if(id !== "new") {
      const response = await fetch(`http://localhost:3001/weight/${id}`);
      const json = await response.json();
      setWeight(json.data.weight);
      setDate(json.data.createdAt);
    }
  },[]);  

  function updateWeight(e) {
    setWeight(e.target.value);
  }

  function updateDate(e) {
    setDate(e.target.value);
  }

  function addWeighIn() {
    if(id !== "new") {
      fetch(`http://localhost:3001/weight/${id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date, weight })
      })
      .then(() => {
        history.push('/');
      });
      return;
    }

    fetch("http://localhost:3001/weight", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date, weight })
    })
    .then(() => {
      history.push('/');
    });
  }

  return (
    <main>
      <h1 className="m-40">Weigh in</h1>
      <label htmlFor="weight">Weight</label>
      <input name="weight" type="number" value={weight} onChange={updateWeight}></input>
      <label htmlFor="date">Date</label>
      <input name="date" type="date" value={date} onChange={updateDate}></input>
      <button className="primary-button m-40" onClick={addWeighIn}>{id === "new" ? "Add weight in" : "Edit entry"}</button>
    </main>
  );
}
