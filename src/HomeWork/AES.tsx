import  { useState } from 'react';
import CryptoJS from 'crypto-js';

const AESCipher = () => {
  const [plaintext, setPlaintext] = useState('');
  const [key, setKey] = useState('');
  const [ciphertext, setCiphertext] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const handleEncrypt = () => {
    if (plaintext && key) {
      try {
        const encrypted = CryptoJS.AES.encrypt(plaintext, key).toString();
        setCiphertext(encrypted);
        setDecryptedText(''); // Clear decrypted text
      } catch (error) {
        alert('Encryption failed. Ensure the key is valid.');
      }
    } else {
      alert("Please provide both plaintext and key.");
    }
  };

  const handleDecrypt = () => {
    if (ciphertext && key) {
      try {
        const bytes = CryptoJS.AES.decrypt(ciphertext, key);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);
        setDecryptedText(decrypted);
      } catch (error) {
        alert('Decryption failed. Ensure the key is correct.');
      }
    } else {
      alert("Please provide both ciphertext and key.");
    }
  };

  return (
    <div className='w-full h-full bg-gray-200'>
      <div className='max-w-xl p-10 mx-auto bg-slate-300'>
        <hr className="mb-1 border-t-2 border-black" />
        <hr className="border-t-2 border-black mb-9" />
        <h2 className="mb-4 text-xl font-semibold">AES Cipher</h2>
        
        <div className="mb-4">
          <label className="block mb-2">Plaintext:</label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            value={plaintext}
            onChange={(e) => setPlaintext(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Key:</label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </div>

        <button
          className="px-4 py-2 mr-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={handleEncrypt}
        >
          Encrypt
        </button>

        <button
          className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
          onClick={handleDecrypt}
        >
          Decrypt
        </button>

        <div className="block my-4">
          <div>
            <span className="mr-2 font-semibold">Encrypted Message:</span>
            {ciphertext}
          </div>
          <div>
            <span className="mr-2 font-semibold">Decrypted Message:</span>
            {decryptedText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AESCipher;
