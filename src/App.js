import React, {useEffect , Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import SearchBar from "./components/layouts/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layouts/Addbtn";
import AddLogModal from "./components/logs/AddLogModal";


const App =() => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment >
      <SearchBar/>
      <div className="container">
        <AddBtn/>
        <AddLogModal/>
        <Logs/>
      </div>
    </Fragment>
  );
}

export default App;
