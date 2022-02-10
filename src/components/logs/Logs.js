import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import Preloader from '../layouts/Preloader';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logAction'

const Logs = ({ log: { logs, loading }, getLogs }) => {
    // const [logs, setLogs] = useState([]);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLogs();

        //estlint-disable-next-line
    }, [])

    // const getLogs = async () => {
    //     setLoading(true);
    //     const res = await fetch('/logs');
    //     const data = await res.json();
    //     setLogs(data);
    //     setLoading(false);
    // }

    if(loading || logs === null ) {
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
        )}
    </ul>
    )
};

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    log: state.log
})

export default connect(mapStateToProps, { getLogs })(Logs);
