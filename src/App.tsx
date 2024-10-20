import AdditiveCipher from "./HomeWork/AdditiveCipher";
import AffineCipher from "./HomeWork/AffineCiphers";
import AutoKeyCipher from "./HomeWork/AutoKeyCipher";
import MultiplicativeCipher from "./HomeWork/MultiplicativeCiphers";
import NaveBar from "./HomeWork/NaveBar";
import DESComponent from "./HomeWork/DES";
import AESCipher from "./HomeWork/AES";
function App() {

  return (
    <>
        <NaveBar />
        <AdditiveCipher />
        <MultiplicativeCipher />
        <AffineCipher />
        <AutoKeyCipher />
        <DESComponent />
        <AESCipher />

    </>
  );
}

export default App;
