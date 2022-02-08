import React, { useState, useEffect } from 'react';
import LogItem from './LogItem';
import Preloader from '../layouts/Preloader';

const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLogs();

        //estlint-disable-next-line
    }, [])

    const getLogs = async () => {
        setLoading(true);
        const res = await fetch('/logs');
        const data = await res.json();

        setLogs(data);
        setLoading(false);
    }

    if(loading) {
        return <Preloader />
    }

  return (
    <ul class="collection with-header">
        <li class="collection-header">
            <h4 className='center' >Developer Logs</h4>
        </li>

        {!loading && logs.length === 0 ? (
            <p className='center' >There are currently no Developer Logs</p>
        ) : (
            logs.map(log => <LogItem key={log.id} log={log} />)
        ) }

    {/* <li class="collection-item">Alvin</li>
    <li class="collection-item">Alvin</li>
    <li class="collection-item">Alvin</li>
    <li class="collection-item">Alvin</li> */}
  </ul>
    )
};

export default Logs;
