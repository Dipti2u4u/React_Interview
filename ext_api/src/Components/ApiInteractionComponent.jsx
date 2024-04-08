/*import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiInteractionComponent = () => {
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [userSubmittedCode, setUserSubmittedCode] = useState("");

  useEffect(() => {
    fetchEncryptedText();
  }, []);

  const fetchEncryptedText = () => {
    axios
      .get("https://cryptography_assignment.gudimetla7257.workers.dev/encrypt")
      .then((response) => {
        const { encrypted_text, key } = response.data;
        setEncryptedText(encrypted_text);
        decryptText(encrypted_text, key);
      })
      .catch((error) => console.error("Error fetching encrypted text:", error));
  };

  const decryptText = (encryptedText, key) => {
    setDecryptedText(encryptedText);
  };

  const verifyDecryptedText = () => {
    axios
      .post(
        "https://cryptography_assignment.gudimetla7257.workers.dev/verify",
        {
          decrypted_text: decryptedText,
          email: email,
          phone_number: phoneNumber,
          name: name,
          user_submitted_code: userSubmittedCode,
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) =>
        console.error("Error verifying decrypted text:", error)
      );
  };

  return (
    <div>
      <h2>Encrypted Text: {encryptedText}</h2>
      <h2>Decrypted Text: {decryptedText}</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="User Submitted Code"
        value={userSubmittedCode}
        onChange={(e) => setUserSubmittedCode(e.target.value)}
      />
      <button onClick={verifyDecryptedText}>Verify Decrypted Text</button>
    </div>
  );
};

export default ApiInteractionComponent;*/





import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiInteractionComponent = () => {
  const [encryptedText, setEncryptedText] = useState('');
  const [key, setKey] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [userSubmittedCode, setUserSubmittedCode] = useState('');

  useEffect(() => {
    // Fetch encrypted text and key on component mount
    fetchEncryptedText();
  }, []);

  const fetchEncryptedText = () => {
    axios.get('https://cryptography_assignment.gudimetla7257.workers.dev/encrypt')
      .then(response => {
        const { encrypted_text, key } = response.data;
        setEncryptedText(encrypted_text);
        setKey(key);
        decryptText(encrypted_text, key);
      })
      .catch(error => console.error('Error fetching encrypted text:', error));
  };

  const decryptText = (encryptedText, key) => {
    // Implement Vigenère decryption algorithm using the provided key
    // This is just a placeholder implementation, replace it with your decryption algorithm
    // For example, you could use a library like CryptoJS for decryption
    // Example: const decryptedText = CryptoJS.AES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
    const decryptedText = encryptedText; // Placeholder
    setDecryptedText(decryptedText);
  };

  const verifyDecryptedText = () => {
    axios.post('https://cryptography_assignment.gudimetla7257.workers.dev/verify', {
      decrypted_text: decryptedText,
      email: email,
      phone_number: phoneNumber,
      name: name,
      user_submitted_code: userSubmittedCode
    })
      .then(response => {
        console.log(response.data);
        // Handle success or error response here
      })
      .catch(error => console.error('Error verifying decrypted text:', error));
  };

  return (
    <div>
      <h2>Encrypted Text: {encryptedText}</h2>
      <h2>Decrypted Text: {decryptedText}</h2>
      <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="text" placeholder="User Submitted Code" value={userSubmittedCode} onChange={e => setUserSubmittedCode(e.target.value)} />
      <button onClick={verifyDecryptedText}>Verify Decrypted Text</button>
    </div>
  );
};

export default ApiInteractionComponent;
