import { Component } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./home";
import Vote from "./Vote";
import Like from "./Like";

class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">홈</Link></li>
                    <li><Link to="/vote">투표</Link></li>
                </ul>
                <hr />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    {["/vote", "/tour"].map(path=> (
                        <Route key={path} path={path} element={<Vote/>} />
                    ))}
                    <Route path="/like/:item_id" element={<Like/>} />
                    <Route path="*" element={<div>페이지가 없습니다.</div>} />
                </Routes>
            </div>
        )
    }
}

// class App extends Component {
//     render() {
//         return (
//             <Routes>
//                 <Route path="/" element={<Home/>} />
//                 <Route path="/vote" element={<Vote/>} />
//                 <Route path="/like" element={<Like/>} />
//             </Routes>
//         )
//     }
// }

// class App extends Component {
//     render() {
//         const name = "react";
//         return <Poll />;
//     }
// }
// class App extends Component {
//     render() {
//         const name = "react";
//         return (
//             <>
//                 <div className="react">{name}</div>
//                 <MyComponent name="리액트" favoriteNumber={1}>
//                     리액트
//                 </MyComponent>
//                 <Counter />
//                 <Say />
//                 <Loader />
//             </>
//         );
//     }
// }

// class App extends Component {
//     render() {
//         const name = "react";
//         return (
//             <>
//                 <div className="react">{name}</div>
//                 <MyComponent name="리액트" favoriteNumber={1}>
//                     리액트
//                 </MyComponent>
//                 <Counter />
//                 <Say />
//             </>
//         );
//     }
// }

// class App extends Component {
//     render() {
//         const name = "react";
//         return (
//             <>
//                 <div className="react">{name}</div>
//                 <MyComponent name="리액트" favoriteNumber={1}>
//                     리액트
//                 </MyComponent>
//                 <Counter />
//             </>
//         );
//     }
// }

// class App extends Component {
//     render() {
//         const name = "React";
//         return (
//            <>
//             <div className="React">{name}</div>
//             <MyComponent name="리액트" favoriteNumber={1}>리액트</MyComponent>
//            </>
//         );
//     }
// }

// class App extends Component {
//     render() {
//         const name = "React";
//         return (
//            <>
//             <div className="React">{name}</div>
//             <MyComponent name={3}>리액트</MyComponent>
//            </>
//         );
//     }
// }

// class App extends Component {
//     render() {
//         const name = "React";
//         return (
//             <>
//                 <div className="React">{name}</div>
//                 <MyComponent name="첫 번째"/>
//                 <MyComponent />
//             </>
//         );
//     }
// }

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

// class App extends Component {
//   render() {
//     const name = "리액트";
//     return (
//       <>
//         <div className="react">{name}</div>
//         <input />
//       </>
//     )
//   }
// }

export default App;
