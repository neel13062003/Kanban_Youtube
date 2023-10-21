import React, { useState, useEffect } from 'react';

function API() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

  return (
    <div>
      <h2>Data from the API:</h2>
      <ul>
        {data.tickets && data.tickets.map((ticket) => (
          <li key={ticket.id}>
            Title: {ticket.title} | Status: {ticket.status}
          </li>
        ))}
      </ul>

      <h2>All Users:</h2>
      <ul>
        {data.users && data.users.map((user) => (
          <li key={user.id}>
            Name: {user.name} | Availability: {user.available ? 'Available' : 'Not Available'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default API;
