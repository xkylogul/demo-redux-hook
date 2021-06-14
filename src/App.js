
import './App.css';
import React from 'react'
//import Home from './components/Home'
//import About from './components/About'
import Home1 from './components/Home1'
import About1 from './components/About1'
import ClassComponent from './hooks/ClassComponent'
import HooksComponent from './hooks/HooksComponent'
import ManyHooks from './hooks/ManyHooks'
import EffectHooks from './hooks/EffectHooks';
import MemoCallback from './hooks/MemoCallback';
import HookRef from './hooks/HookRef';

export const NameContext = React.createContext()
export const UserContext = React.createContext()

function App() {
  return (
    <div className="App">
   {/*  <Home1/>
    <About1/> */}
{/*     <ClassComponent/>
    <HooksComponent/> */}
    {/* <ManyHooks/> */}
{/* <NameContext.Provider value={{name:'XIAKEYU'}}>
  <UserContext.Provider value = {{user:'xiakeyu'}}>
  <EffectHooks/>
  </UserContext.Provider>
</NameContext.Provider> */}
    {/* <MemoCallback />  */}
    <HookRef/>
    </div>
  );
}

export default App;
