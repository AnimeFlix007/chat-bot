import { Configuration, OpenAIApi } from "openai";
import { arrayItems } from "./__mocks__/MockData";
import AI_answer from "./components/AI_answer";
import OptionSelection from "./components/OptionSelect";
import "./App.css";
import { useState } from "react";

function App() {
  const configuration = new Configuration({
    organization: import.meta.env.VITE_ORG_KEY,
    apiKey: import.meta.env.VITE_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff = async () => {
    let object = { ...option, prompt: input };
    setLoading(true);
    const response = await openai.createCompletion(object);
    console.log(object, response.data);
    setResult(response.data.choices[0].text);
    setLoading(false);
  };

  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <AI_answer
          doStuff={doStuff}
          setInput={setInput}
          loading={loading}
          result={result}
          selectOption={selectOption}
        />
      )}
    </div>
  );
}

export default App;
