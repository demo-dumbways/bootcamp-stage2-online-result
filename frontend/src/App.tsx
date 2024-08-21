// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// ===

// function Hello() {
//   return <p> Hello </p>;
// }

// function App() {
//   return (
//     <>
//       <Hello />
//       <Hello />
//       <Hello />
//     </>
//   );
// }

// export default App;

// ===

// import { Button } from "./components/Button";

// function App() {
//   return <Button label="Halo Guys" onClick={() => console.log("test")} />;
// }

// export default App;

// ===

// import { UserList } from "./components/UserList";

// function App() {
//   return (
//     <UserList
//       users={[
//         {
//           id: 1,
//           name: "surya",
//         },
//         {
//           id: 2,
//           name: "elz",
//         },
//       ]}
//     />
//   );
// }

// export default App;

// ===

// import { Counter } from "./components/Counter";

// function App() {
//   return <Counter />;
// }

// export default App;

// ===

// import { Form } from "./components/Form";

// function App() {
//   return <Form />;
// }

// export default App;

// ===

// import { useEffect, useState } from "react";

// interface User {
//   id: number;
//   name: string;
//   username: string;
// }

// function App() {
//   const [users, setUsers] = useState<User[]>([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data));
//   }, []);

//   return (
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// }

// export default App;

// ===

// import { useFetchData } from "./hooks/useFetchData";

// interface User {
//   id: number;
//   name: string;
//   username: string;
// }

// function App() {
//   const { data, error } = useFetchData<User>(
//     `https://jsonplaceholder.typicode.com/users`
//   );

//   if (error) {
//     return <>{JSON.stringify(error)}</>;
//   }

//   return <>{JSON.stringify(data)}</>;
// }

// export default App;
