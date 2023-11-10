// pages/dashboard/index.js

import styles from './Dashboard.module.css'; // Make sure to create a corresponding CSS module file
import Navbar from '../../components/Navbar';
import ContestCard from '@/components/ContestCard';
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

export default function Dashboard() {

  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make a GET request to fetch contest data
    axios.get('http://localhost:3000/api/contest')
      .then((response) => {
        setContests(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.dashBody}>
        <Navbar/>
        <div className={styles.banner}>
          <h1>
            Upcoming Contests
          </h1>
        </div>
        {contests.map((contest) => (
        <ContestCard
          key={contest._id} // Ensure each component has a unique key
          contestName={contest.title}
          prizePool={contest.prizePool}
          date={contest.date}
          entry={contest.entry}
        />
      ))}
    </div>
  );
}