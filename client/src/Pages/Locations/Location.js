import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "./Location.css";

const agencyData = [
  {
    id: 1,
    name: "Agence Tunis Centre",
    position: [36.8065, 10.1815],
    address: "Avenue Habib Bourguiba, Tunis",
  },
  {
    id: 2,
    name: "Agence Sousse",
    position: [35.8256, 10.6084],
    address: "Route de la Corniche, Sousse",
  },
  {
    id: 3,
    name: "Agence Sfax",
    position: [34.7406, 10.7603],
    address: "Boulevard Farhat Hached, Sfax",
  },
];

const AgencyLocations = () => {
  const [selected, setSelected] = useState(null);
  const center = selected?.position || [35.8256, 10.6084];

  return (
    <div className="locations-container">
      <motion.h2
        className="locations-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Nos agences en Tunisie
      </motion.h2>

      <motion.div
        className="locations-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.div
          className="locations-list"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {agencyData.map((agency, index) => (
            <motion.div
              key={agency.id}
              className={`agency-card ${selected?.id === agency.id ? "active" : ""}`}
              onClick={() => setSelected(agency)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <h4>{agency.name}</h4>
              <p>{agency.address}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="map-wrapper"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <MapContainer
            center={center}
            zoom={selected ? 13 : 7}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            />
            {agencyData.map((agency) => (
              <Marker key={agency.id} position={agency.position}>
                <Popup>
                  <strong>{agency.name}</strong>
                  <br />
                  {agency.address}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AgencyLocations;