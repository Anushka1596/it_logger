import React, {useEffect , Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.js';
import './App.css';
import SearchBar from "./components/layouts/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layouts/Addbtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/tech/AddTech";
import TechListModal from "./components/tech/TechListModal";
import {Provider} from 'react-redux'
import store from "./Store";

const App =() => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
    <Fragment >
      <SearchBar/>
      <div className="container">
        <AddBtn/>
        <AddLogModal/>
        <EditLogModal/>
        <AddTechModal/>
        <TechListModal/>
        <Logs/>
      </div>
    </Fragment>
    </Provider>
  );
}

export default App;
