import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layouts/SearchBar';
import Logs from './components/logs/Logs'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import AddBtn from './components/layouts/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddDeveloperModal from './components/developers/AddDeveloperModal';
import DeveloperListModal from './components/developers/DeveloperListModal';

const App = () => {

  useEffect(() => {
    // Initialize Materialize JS
    M.AutoInit();
  })

  return (
    <Fragment>
      <SearchBar/>
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddDeveloperModal />
        <DeveloperListModal />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
