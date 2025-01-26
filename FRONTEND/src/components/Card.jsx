import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ path, name, Saga }) => {
  const navigate = useNavigate();
  return (
    <div className="card bg-base-100 w-80 shadow-xl mb-5">
      <figure>
        <img src={Saga} alt={name} /> {/* Display the image */}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => navigate(path)}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
