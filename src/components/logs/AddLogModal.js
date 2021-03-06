import React, {useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../../actions/logAction';
import M from 'materialize-css/dist/js/materialize.min.js'

const AddLogModal = ({ addLog }) => {

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState('');
    const [developer, setDeveloper] = useState('');

    const onSubmit = () => {
        if(message === '' || developer === '') {
            M.toast({ html: 'Please provide value for message and developer' })
        } else {
            
            const newLog = {
                message,
                attention,
                developer,
                date: new Date()
            }

            addLog(newLog);
            M.toast({ html: 'Log Added' });

            // console.log(message, attention, developer);
            setMessage('');
            setAttention(false);
            setDeveloper('');
        }
    }

    return (
        <div id='add-log-modal' className="modal" >
            <div className="modal-content">
                <h4>Enter Developer Log</h4>
                <div className="raw">
                    <div className="input-field">
                        <input type="text"
                                name="message"
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                            />
                        <label htmlFor="message" className="active" >Developer Log</label>
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

AddLogModal.propTypes = {
    addLog: PropTypes.func.isRequired,
};

export default connect(null, {addLog})(AddLogModal);
