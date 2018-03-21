import React from 'react';

const DailyPost = ({date, events}) => {
  return (
    <div className="daily-post">
      <h4>{date}</h4>
      <ul>
        {events.map((event, i) => {
          return <li key={i}>{event}</li>;
        })}
      </ul>
    </div>
  );
}

export default DailyPost;