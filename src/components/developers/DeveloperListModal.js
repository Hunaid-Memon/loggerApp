import React, { useEffect } from 'react';
import DeveloperItem from './DeveloperItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDevelopers } from '../../actions/developerAction'

const DeveloperListModal = ({ developer: { developers ,loading }, getDevelopers }) => {
    // const [developers, setDevelopers] = useState([]);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        getDevelopers();

        //estlint-disable-next-line
    }, [])

    // const getDevelopers = async () => {
    //     setLoading(true);
    //     const res = await fetch('/developers');
    //     const data = await res.json();

    //     setDevelopers(data);
    //     setLoading(false);
    // }

  return (
        <div className="modal" id="developer-list-modal">
            <div className="modal-content">
                <h4>Developer List</h4>
                <ul className="collection" >
                    {!loading && 
                        developers.map(developer => (
                            <DeveloperItem developer={developer}
                                            key={developer.id}
                            />
                        )) 
                    }
                </ul>
            </div>
        </div>  
    )
};

DeveloperListModal.propTypes = {
    developer: PropTypes.object.isRequired,
    getDevelopers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    developer: state.developer
})

export default connect(mapStateToProps, { getDevelopers })(DeveloperListModal);
