import React from 'react';

// function App() {
//   return (
//     <>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => {console.log("I'm changed.")}}></input>
//     </>
//   );
// }

const App = () => {
  return (
    <>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </>
  )
}

const Cat = () => {
  return <div>Meow!!</div>
}

export default App;
