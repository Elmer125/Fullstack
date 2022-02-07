import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header";
import { Content } from "./Components/Content";
import { Total } from "./Components/Total";
import {Hello} from './Components/Hello';
import { Contador } from "./Components/Contador/Contador";
import { RightAndLeft } from "./Components/RightAndLeft/RightAndLeft";
import { Unicafe } from "./Components/Unicafe/Unicafe";
import { Anecdotes } from "./Components/Anecdotes/Anecdotes";

function App() {
  /* const course = {
    name: "Half Stack application development",
    part: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  }; */

  const name='peter';
  const age=10
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const likes = new Uint8Array(anecdotes.length);
  console.log(anecdotes)
  console.log(likes)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Anecdotes likes={likes} anecdotes={anecdotes}/>
       {/*  <Unicafe/> */}
        {/* <RightAndLeft/> */}
        {/* <Contador /> */}
        {/* <Header course={course} />
        <Content course={course} />

        <Total course={course} /> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
