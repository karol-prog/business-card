import React from "react";

export default function Card(props) {
  //destructuring the objects props
  const { img, rating, reviewCount, country, title, price } = props;

  return (
    <section>
      <div className="card">
        <img className="card-image" src={img} />
        <div className="card-stats">
          <img
            className="card-stats-image"
            src="../public/images/star.png"
            alt=""
          />
          <span>{rating}</span>
          <span className="grey">({reviewCount}).</span>
          <span className="grey">{country}</span>
        </div>
        <h2>{title}</h2>
        <p>
          <span className="bold">From ${price}</span> / person
        </p>
      </div>
    </section>
  );
}
