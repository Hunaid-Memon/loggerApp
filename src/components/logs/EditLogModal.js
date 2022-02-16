import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateLog } from '../../actions/logAction';
import M from 'materialize-css/dist/js/materialize.min.js'

const EditLogModal = ({ updateLog, current }) => {

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState('');
    const [developer, setDeveloper] = useState('');

    useEffect(() => {
        if(current) {
            setMessage(current.message);
            setAttention(current.attention);
            setDeveloper(current.developer)
        }
    }, [current])

    const onSubmit = () => {
        if(message === '' || developer === '') {
            M.toast({ html: 'Please provide value for message and developer' })
        } else {
            const updatedLog = {
                id: current.id,
                message,
                attention,
                developer,
                date: new Date()
            }

            updateLog(updatedLog);

            M.toast({ html: 'Log Updated' });

            setMessage('');
            setAttention(false);
            setDeveloper('');
        }
    }

    return (
        <div id='edit-log-modal' className="modal" >
            <div className="modal-content">
                <h4>Enter Developer Log</h4>
                <div className="raw">
                    <div className="input-field">
                        <input type="text"
                                name="message"
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                            />
                    </div>
                </div>
                <div className="raw">
                    <div className="input-field">
                        <select name="developer"
                                value={developer}
                                className="browser-default"
                                onChange={e => setDeveloper(e.target.value)}
                            >
                            <option value="" disabled>Select Developer</option>
                            <option value="Hunaid Memon" >Hunaid Memon</option>
                            <option value="Muhammad Yousuf" >Muhammad Yousuf</option>
                        </select>
                    </div>
                </div>
                <div className="raw">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox"
                                        className="filled-in"
                                        checked={attention}
                                        value={attention}
                                        onChange={e => setAttention(!attention)}
                                />
                                <span>Need Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!"
                    onClick={onSubmit}
                    className="modal-close waves-effect waves-blue btn-flat"
                >
                    Submit
                </a>
            </div>
        </div>
    );
};

EditLogModal.propTypes = {
    current: PropTypes.object,
    updateLog: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    current: state.log.current
})

export default connect(mapStateToProps, { updateLog  })(EditLogModal);
