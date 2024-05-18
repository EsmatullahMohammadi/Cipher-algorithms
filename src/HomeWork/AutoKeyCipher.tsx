import { useState } from 'react';

function AutokeyCipher() {
  const [message, setMessage] = useState('');
  const [key, setKey] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [decryptedMessage, setDecryptedMessage] = useState('');

  const encryptMessage = () => {
    let encryptedText = '';
    let keyNum = parseInt(key, 10);
    let currentKey = keyNum;

    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);
      let shiftValue = currentKey % 26;

      if (charCode >= 65 && charCode <= 90) { // Uppercase letters
          let encryptedCharCode = (charCode - 65 + shiftValue) % 26 + 65;
          encryptedText += String.fromCharCode(encryptedCharCode);
          currentKey = message.charCodeAt(i) - 65; // Extend key with current character
      } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
          let encryptedCharCode = (charCode - 97 + shiftValue) % 26 + 97;
          encryptedText += String.fromCharCode(encryptedCharCode);
          currentKey = message.charCodeAt(i) - 97; // Extend key with current character
      } else {
        // Non-alphabetic characters remain unchanged
        encryptedText += message.charAt(i);
      }
    }
    setEncryptedMessage(encryptedText);
  };

  const decryptMessage = () => {
    let decryptedText = '';
    let keyNum = parseInt(key, 10);
    let currentKey = keyNum;

    for (let i = 0; i < encryptedMessage.length; i++) {
      let charCode = encryptedMessage.charCodeAt(i);
      let shiftValue = currentKey % 26;

      if (charCode >= 65 && charCode <= 90) { // Uppercase letters
        if(charCode - 65 - shiftValue < 0){
          const p=charCode - 65 - shiftValue ;
          const c=p- Math.floor(p/26)*26;
          let decryptedCharCode = c % 26 + 65;
          decryptedText += String.fromCharCode(decryptedCharCode);
          currentKey = decryptedText.charCodeAt(i) - 65; // Extend key with decrypted character
        }else{
          let decryptedCharCode = (charCode - 65 - shiftValue ) % 26 + 65;
          decryptedText += String.fromCharCode(decryptedCharCode);
          currentKey = decryptedText.charCodeAt(i) - 65; // Extend key with decrypted character
        }
        
        
      }
      else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
        if(charCode - 97 - shiftValue < 0){
          const p=charCode - 97 - shiftValue ;
          const c=p-Math.floor(p/26)*26;
          let decryptedCharCode = c % 26 + 97;
          decryptedText += String.fromCharCode(decryptedCharCode);
          currentKey = decryptedText.charCodeAt(i) - 97;
        }else{
          let decryptedCharCode = (charCode - 97 - shiftValue ) % 26 + 97;
          decryptedText += String.fromCharCode(decryptedCharCode);
          currentKey = decryptedText.charCodeAt(i) - 97; // Extend key with decrypted character
        }
        
      } else {
        // Non-alphabetic characters remain unchanged
        decryptedText += encryptedMessage.charAt(i);
      }
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
          <label className="block mb-2">Key (numeric):</label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
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
          <span className="mr-2 font-semibold">Decrypted Message: {decryptedMessage}</span>
        </div>
      </div>
    </div>
  );
}

export default AutokeyCipher;
