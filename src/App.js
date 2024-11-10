import { Fragment } from "react";
import { Component } from "react";
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App() {
//   const name = "React";
//   return (
//     <Fragment>
//       {name === "React" ? (
//         <h1>{name} Programming</h1>
//       ) : (
//         <h1>Hello World</h1>
//       )}
//       <button>Click me</button>
//     </Fragment>
//   );
// }

// function App() {
//   const name = "React";
//   return (
//     <Fragment>
//       {name === "리액트" ? (
//         <h1>{name} Programming</h1>
//       ) : null}
//       <button>Click me</button>
//     </Fragment>
//   );
// }

// function App() {
//   const name = "리액트";
//   return (
//     <Fragment>
//       {name === "리액트" && (
//         <h1>{name} Programming</h1>
//       )}
//     </Fragment>
//   )
// }

// function App() {
//   const name = undefined;
//   return name || "값이 undefined입니다.";
// }

// function App() {
//   const name = "리액트";
//   const style = {
//     backgroundColor: "black",
//     color: "aqua",
//     fontSize: "48px",
//     fontWeight: "bold",
//     padding: 16
//   };
//   return (
//     <div style={style}>{name}</div>
//   );
// }

// function App() {
//   const name = "리액트";
//   return (
//   <div className="react">
//       {name}
//     </div>
//   );
// }

// function App() {
//   const name = "리액트";
//   return (
//     <>
//      <div className="react">{name}</div>
//      <input />
//     </>
//   );
// }

class App extends Component {
  render() {
    const name = "리액트";
    return (
      <>
        <div className="react">{name}</div>
        <input />
      </>
    )
  }
}

export default App;
