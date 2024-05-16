import { useState } from 'react';

function AdditiveCipher() {
  const [message, setMessage] = useState('');
  const [key, setKey] = useState(0);
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [decryptedMessage, setDecryptedMessage] = useState('');

  const encryptMessage = () => {
    let encryptedText = '';
    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);
      // Check if the character is a letter
      if (charCode >= 65 && charCode <= 90) {
        // Uppercase letters
        encryptedText += String.fromCharCode(((charCode - 65 + key) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        // Lowercase letters
        encryptedText += String.fromCharCode(((charCode - 97 + key) % 26) + 97);
      } else {
        // Non-alphabetic characters remain unchanged
        encryptedText += message.charAt(i);
      }
    }
    setEncryptedMessage(encryptedText);
  };

  const decryptMessage = () => {
    let decryptedText = '';
    for (let i = 0; i < encryptedMessage.length; i++) {
      let charCode = encryptedMessage.charCodeAt(i);
      // Check if the character is a letter
      if (charCode >= 65 && charCode <= 90) {
        // Uppercase letters
        if(charCode-65-key < 0){
          const p =charCode-65-key;
          const c=p- Math.floor(p/26)*26;
          decryptedText += String.fromCharCode((c % 26) + 65);
        }else{
          decryptedText += String.fromCharCode(((charCode - 65 - key) % 26) + 65);
        }     
      } else if (charCode >= 97 && charCode <= 122) {
        // Lowercase letters
        if(charCode - 97 - key < 0){
          const p=charCode-97-key;
          const c=p- Math.floor(p/26)*26;
          decryptedText += String.fromCharCode((c % 26) + 97);
        }else{
          decryptedText += String.fromCharCode(((charCode - 97 - key) % 26) + 97);
        }
        
      } else {
        // Non-alphabetic characters remain unchanged
        decryptedText += encryptedMessage.charAt(i);
      }
    }
    setDecryptedMessage(decryptedText);
  };

  return (
    <div className='w-full h-full bg-gray-200'>
      <div className='max-w-xl p-10 mx-auto bg-slate-300'>
        <h2 className="mb-4 text-xl font-semibold">Additive Cipher Encryption and Decryption</h2>
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
                onChange={(e) => setKey(parseInt(e.target.value))}
            />
            </div>
        <button className="px-4 py-2 mr-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={encryptMessage}>Encrypt</button>
        <button className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700" onClick={decryptMessage}>Decrypt</button>
        <br />
        <div className="block my-4">
          <span className="mr-2 font-semibold">Encrypted Message:</span>{encryptedMessage}
        </div>
        <div className="block">
          <span className="mr-2 font-semibold">Decrypted Message:</span>{decryptedMessage}
        </div>
      </div>
    </div>

  );
}

export default AdditiveCipher;
