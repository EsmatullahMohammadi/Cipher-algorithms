import { useState } from 'react';

function AutokeyCipher() {
  const [message, setMessage] = useState('');
  const [key, setKey] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [decryptedMessage, setDecryptedMessage] = useState('');

  const encryptMessage = () => {
    let encryptedText = '';
    let currentKey = key;
    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);
      let keyCharCode = currentKey.charCodeAt(i);
        console.log(keyCharCode) // it has a mistake here
      if (charCode >= 65 && charCode <= 90) {
        let encryptedCharCode = (charCode - 65 + keyCharCode ) % 26 + 65;
        encryptedText += String.fromCharCode(encryptedCharCode);
        currentKey += String.fromCharCode(encryptedCharCode);
      }else if (charCode >= 97 && charCode <= 122) {
        let encryptedCharCode = (charCode - 97 + keyCharCode ) % 26 + 97;
        encryptedText += String.fromCharCode(encryptedCharCode);
        currentKey += String.fromCharCode(encryptedCharCode);
      }else {
        // Non-alphabetic characters remain unchanged
        encryptedText += message.charAt(i);
      }
      
    }
    setEncryptedMessage(encryptedText);
  };

  const decryptMessage = () => {
    let decryptedText = '';
    let currentKey = key;
    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);
      let keyCharCode = currentKey.charCodeAt(0);
      let decryptedCharCode = (charCode - keyCharCode + 26) % 26 + 65;
      decryptedText += String.fromCharCode(decryptedCharCode);
      currentKey += String.fromCharCode(charCode);
    }
    setDecryptedMessage(decryptedText);
  };

  return (
    <div className="w-full h-full bg-gray-200">
    <div className="max-w-xl p-10 mx-auto shadow-md bg-slate-300">
      <hr className="mb-1 border-t-2 border-black" />
      <hr className="border-t-2 border-black mb-9" />
      <h2 className="mb-4 text-xl font-semibold">Autokey Cipher Encryption and Decryption</h2>
      <div className="mb-4">
        <label className="block mb-2">Message:</label>
        <input
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Key:</label>
        <input
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="number"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <button
          className="px-4 py-2 mr-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none"
          onClick={encryptMessage}
        >
          Encrypt
        </button>
        <button
          className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none"
          onClick={decryptMessage}
        >
          Decrypt
        </button>
      </div>
      <div className="block my-4">
        <span className="mr-2 font-semibold">Encrypted Message:</span>{encryptedMessage}
      </div>
      <div className="block">
        <span className={`font-semibold mr-2`}>Decrypted Message: {decryptedMessage}</span>
      </div>
    </div>
  </div>
  
  );
}

export default AutokeyCipher;
