import React from "react";
import "./Teams.css";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaFlickr } from "react-icons/fa";

const teamMembers = [
  {
    name: "Jane Mc Doe",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mark Spitch",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Juliette Light",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Nick Hope",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-img-wrapper">
              <img src={member.image} alt={member.name} className="team-img" />
            </div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis
              tortor sit amet quam.
            </p>
            {/* <div className="team-socials">
              <FaFlickr className="icon flickr" />
              <FaFacebookF className="icon facebook" />
              <FaTwitter className="icon twitter" />
              <FaGooglePlusG className="icon google" />
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
