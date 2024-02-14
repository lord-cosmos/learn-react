import React from "react";

const scientists = [
  {
    name: "Maria Skłodowska-Curie",
    imageUrl: "https://i.imgur.com/szV5sdGs.jpg",
    profession: "physicist and chemist",
    awards: "4",
    awardNames:
      "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
    discovered: "polonium (element)",
  },
  {
    name: "Katsuko Saruhashi",
    imageUrl: "https://i.imgur.com/YfeOqp2s.jpg",
    profession: "geochemist",
    awards: "2",
    awardNames: "(Miyake Prize for geochemistry, Tanaka Prize)",
    discovered: "a method for measuring carbon dioxide in seawater",
  },
];

function Profile({ scientist }) {
  return (
    <section className="profile">
      <h2>{scientist.name}</h2>
      <img
        className="avatar"
        src={scientist.imageUrl}
        alt={scientist.name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {scientist.profession}
        </li>
        <li>
          <b>Awards: {scientist.awards} </b>
          {scientist.awardNames}
        </li>
        <li>
          <b>Discovered: </b>
          {scientist.discovered}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      {scientists.map((scientist, index) => (
        <Profile key={index} scientist={scientist} />
      ))}
    </div>
  );
}
