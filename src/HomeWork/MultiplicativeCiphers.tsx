import { useState } from 'react';

function MultiplicativeCipher() {
  const [message, setMessage] = useState('');
  const [key, setKey] = useState(0);
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [decryptedMessage, setDecryptedMessage] = useState('');
  const [errors,setErrors]=useState(false);

  const encryptMessage = () => {
    let encryptedText = '';
    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);
      // Check if the character is a letter
      if (charCode >= 65 && charCode <= 90) {
        // Uppercase letters
        encryptedText += String.fromCharCode(((charCode - 65) * key % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        // Lowercase letters
        encryptedText += String.fromCharCode(((charCode - 97) * key % 26) + 97);
      } else {
        // Non-alphabetic characters remain unchanged
        encryptedText += message.charAt(i);
      }
    }
    setEncryptedMessage(encryptedText);
  };

  const decryptMessage = () => {
    let decryptedText = '';
    let modInverse = 0;
    for (let i = 0; i < 26; i++) {
      if ((key * i) % 26 === 1) {
        modInverse = i;
        break;
      }
    }
    if(modInverse==0){
        setErrors(true)
    }
    for (let i = 0; i < encryptedMessage.length; i++) {
      let charCode = encryptedMessage.charCodeAt(i);
      // Check if the character is a letter
      if (charCode >= 65 && charCode <= 90) {
        // Uppercase letters
        decryptedText += String.fromCharCode(((charCode - 65) * modInverse % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        // Lowercase letters
        decryptedText += String.fromCharCode(((charCode - 97) * modInverse % 26) + 97);
      } else {
        // Non-alphabetic characters remain unchanged
        decryptedText += encryptedMessage.charAt(i);
      }
    }
    setDecryptedMessage(decryptedText);
  };

  return (
    <>
        <div className="w-full h-full bg-gray-200 ">
            <div className="max-w-xl p-10 mx-auto shadow-md bg-slate-300">
                <hr className="mb-1 border-t-2 border-black" />
                <hr className="border-t-2 border-black mb-9"/>
                <h2 className="mb-4 text-xl font-semibold">Multiplicative Cipher Encryption and Decryption</h2>
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
                    <span className="font-semibold">Encrypted Message:</span> {encryptedMessage}
                </div>
                <div className="block">
                    <span className={`font-semibold`}>Decrypted Message:</span> 
                    <span className={`font-semibold ${errors===false? "":"text-red-500"}`}>{errors===false?decryptedMessage:"your key is not valide!"}</span>
                </div>
            </div>
        </div>
    </>
  );
}

export default MultiplicativeCipher;
