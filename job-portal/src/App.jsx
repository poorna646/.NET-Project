import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const[jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5097/api/Job")
    .then(response => setJobs(response.data))
    .catch(err => console.log(err));

  }, []);
  return (
    <div className='Job-listings'>
    <h1>JOB LISTINGS</h1>
    <ul>{jobs.map(job => (<li className='Job-title' key={job.id}>{job.title}</li>))
      }</ul>
    </div>
  )
}

export default App
