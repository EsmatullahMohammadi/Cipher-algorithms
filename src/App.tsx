import AdditiveCipher from "./HomeWork/AdditiveCipher";
import AffineCipher from "./HomeWork/AffineCiphers";
import AutoKeyCipher from "./HomeWork/AutoKeyCipher";
import MultiplicativeCipher from "./HomeWork/MultiplicativeCiphers";
import NaveBar from "./HomeWork/NaveBar";

function App() {

  return (
    <>
        <NaveBar />
        <AdditiveCipher />
        <MultiplicativeCipher />
        <AffineCipher />
        <AutoKeyCipher />

    </>
  );
}

export default App;
