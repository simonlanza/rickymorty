import './App.css'
import RickMortyClass from "./components/RickMortyClass";
import RickMortyFunction from "./components/RickMortyFunction";
import Button from "./components/Button";
import {useState} from "react";

function App() {
    const [display, setDisplay] = useState();
    const [text, setText] = useState("Go to Characters");
    const [count, setCount] = useState(1);

    const switchDisplay = (arg) => {
        if(arg === 1) {
            setDisplay(<RickMortyFunction />);
            setText("Go To Class Component");
            setCount(prevState => prevState + 1);
        } else if (arg === 2) {
            setDisplay(<RickMortyClass />);
            setText("Go To Function Component");
            setCount(prevState => prevState - 1);
        } 
    }

    const title = "Rick & Morty Characters";

    return (
        <div className="container">
            <h1>{title}</h1>
            {display}
            <Button displayChanger={switchDisplay} text={text} num={count} />
        </div>
    )

}


export default App;
