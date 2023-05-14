
// used to be App.js 
// import logo from './logo.svg';
// import './App.css';

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

// export default App;

// changed to App.jsx 
// changing the app component to render the InboxScreen 

import './index.css';
import store from './lib/store';

import { Provider } from 'react-redux';
import InboxScreen from './components/InboxScreen';

function App() {
 return (
  <Provider store={store}>
    <InboxScreen />
  </Provider>
 );
}
export default App;