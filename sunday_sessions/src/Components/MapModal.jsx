import React, { useState } from 'react';
import Modal from 'react-modal';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
// Ensure accessibility by setting the app element for react-modal
Modal.setAppElement('#root');

const MapModal = ({ google }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleOpenModal = () => {
    setModalIsOpen(true);
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  const mapStyles = {
    width: '100%',
    height: '100%',
  };
  
  return (
    <div style={{
      border: '1px solid #ccc', // Sets the border color to a light grey
      padding: '20px',          // Adds space inside the border
      margin: '20px',           // Adds space outside the border
      borderRadius: '5px',      // Optional: Rounds the corners of the border
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)' // Optional: Adds a subtle shadow around the box
    }}>
      <h3>Product BOX</h3>
      <button onClick={handleOpenModal}>
        <img src="/map-icon.png" alt="Map Icon" />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Map"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: '30px',
            bottom: '80px',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '800px', // Adjust based on your needs
            height: '400px', // Adjust based on your needs
          },
        }}
      >
        <Map google={google} zoom={14} style={mapStyles} initialCenter={{ lat: -34.397, lng: 150.644 }}>
          <Marker position={{ lat: -34.397, lng: 150.644 }} />
        </Map>
      </Modal>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAczB1_9C0dgfYS6iW4HTcVF0Vs8lWYVxc'
})(MapModal);
