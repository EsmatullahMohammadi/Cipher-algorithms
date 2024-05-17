import { useState } from 'react';

function AffineCipher() {
  const [message, setMessage] = useState('');
  const [aKey, setAKey] = useState(1);
  const [bKey, setBKey] = useState(0);
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [decryptedMessage, setDecryptedMessage] = useState('');
  const [errors,setErrors]= useState(false);

  const encryptMessage = () => {
    let encryptedText = '';
    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        // Uppercase letters
        encryptedText += String.fromCharCode(((aKey * (charCode - 65) + bKey) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        // Lowercase letters
        encryptedText += String.fromCharCode(((aKey * (charCode - 97) + bKey) % 26) + 97);
      } else {
        // Non-alphabetic characters remain unchanged
        encryptedText += message.charAt(i);
      }
    }
    setEncryptedMessage(encryptedText);
  };

  const modInverse = (a:number, m:number) => {
    for (let i = 1; i < m; i++) {
      if ((a * i) % m === 1) {
        return i;
      }
    }
    setErrors(true);
    return 0;
  };

  const decryptMessage = () => {
    let decryptedText = '';
    let modInv = modInverse(aKey, 26);
    for (let i = 0; i < encryptedMessage.length; i++) {
      let charCode = encryptedMessage.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        // Uppercase letters
        if((modInv * (charCode - 65 - bKey)) < 0){
            const p = modInv * (charCode - 65 - bKey);
            const c = p-Math.floor(p/26)*26;
            decryptedText += String.fromCharCode(c % 26 + 65);
        }else{
            decryptedText += String.fromCharCode((modInv * (charCode - 65 - bKey)) % 26 + 65);
        }
        
      } else if (charCode >= 97 && charCode <= 122) {
        // Lowercase letters
        if((modInv * (charCode - 97 - bKey)) < 0){
            const p = modInv * (charCode - 97 - bKey );
            const c = p-Math.floor(p/26)*26;
            decryptedText += String.fromCharCode(c % 26 + 97);
        }else{
            decryptedText += String.fromCharCode((modInv * (charCode - 97 - bKey )) % 26 + 97);
        }
        
      } else {
        // Non-alphabetic characters remain unchanged
        decryptedText += message.charAt(i);
      }
    }
    setDecryptedMessage(decryptedText);
  };

  return (
    <div className="w-full h-full bg-gray-200">
        <div className="max-w-xl p-10 mx-auto shadow-md bg-slate-300">
            <hr className="mb-1 border-t-2 border-black" />
            <hr className="border-t-2 border-black mb-9" />
            <h2 className="mb-4 text-xl font-semibold">Affine Cipher Encryption and Decryption</h2>
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
            <label className="block mb-2">A Key:</label>
            <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                type="number"
                value={aKey}
                onChange={(e) =>{
                    setAKey(parseInt(e.target.value));
                    setErrors(false);
                    }}
            />
            <label className="block mb-2 text-red-500">{errors?"your key is not valid for dycryption!":""}</label>
            </div>
            <div className="mb-4">
            <label className="block mb-2">B Key:</label>
            <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                type="number"
                value={bKey}
                onChange={(e) => setBKey(parseInt(e.target.value))}
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
            <span className={`font-semibold mr-2`}>
                Decrypted Message: <span className={`font-semibold ${errors===false? "":"text-red-500"}`}>{ errors?"false": decryptedMessage}</span>
            </span>
            </div>
        </div>
    </div>

  );
}

export default AffineCipher;
