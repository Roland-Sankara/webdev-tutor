import "./styles.css";
import { useState, useEffect } from "react";
import Quote from "../components/Quote";

function App() {
  const [count, setCount] = useState(0);
  // it returns an array: [0, function]
  const [quotes, setQuotes] = useState(null);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  async function fetchQuotes(){
    let apiEndpoint = "https://type.fit/api/quotes";
    try{
      let response = await fetch(apiEndpoint);
      let data = await response.json();
      setQuotes(data);
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="App">
      <h1>Counter</h1>

      <p>{count}</p>

      <button onClick={increaseCount}>Increase +</button>
      <button onClick={decreaseCount}>Decrease -</button>

      {/* quotes display component */}
      <div className="quotes-container">
        {quote ? (
          quotes.slice(0,4).map((quote,index)=><Quote key={index} text={quote.text} author={quote.author} />)
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </div>
  );
}

export default App;
