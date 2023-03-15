import React, { useState } from 'react';

const Tour = ({ id, gameid, name, removeGame }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      
      {/* <img src={image} alt={name} /> */}
      <footer>
        <div className="tour-info">
          <h3>{name}</h3>
          <h4>ID = {id}</h4>
          {/* <h4 className="tour-price">${price}</h4> */}
        </div>
        <p>
          {/* {readMore ? info : `${info.substring(0, 200)}...`} */}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeGame(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
