import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./UI/Header/Header"
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from 'react-redux';
import store from "./BLL/store"
import Main from "./UI/Main/Main";
import Footer from "./UI/Footer/Footer";

function App() {

  let [choiceMode, setMode] = useState(false)

  let changeMode = () => {
    setMode(!choiceMode)
  }


  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          {//<div onClick={changeMode} className={choiceMode ? "AsideOn" : "AsideOff"} >
            //Check
            //</div>
            //<div className="Main fluid">
            //</div>
          }
          <div>
            <Header />
          </div>
          <div>
          <Main />
          </div>
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
