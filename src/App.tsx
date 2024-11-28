import "./App.css";
import CategoryBtn from "./components/CategoryButton/CategoryBtn";
import useStore from "./store";
import { sendMessageToOpenAI } from "./utils/sendMessageToOpenAi";

function App() {
  const { responseText, setCategory } = useStore();

  return (
    <div className="App">
      <div>
        <textarea
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Podaj kategorię fiszek np. 'Praca w korporacji..."
          cols={50}
          rows={10}
        />
      </div>
      <div>
        <CategoryBtn onClick={sendMessageToOpenAI}>
          Wyślij do OpenAI
        </CategoryBtn>
      </div>
      {responseText && (
        <div>
          <h3>Odpowiedź od OpenAI:</h3>
          <p>{responseText}</p>
        </div>
      )}
    </div>
  );
}

export default App;
