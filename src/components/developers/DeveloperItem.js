import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteDeveloper } from '../../actions/developerAction';
import M from 'materialize-css/dist/js/materialize.min.js'


const DeveloperItem = ({ developer, deleteDeveloper }) => {

    const {firstName, lastName} = developer;
    // console.log(firstName);
    const onDelete = () => {
        deleteDeveloper(developer.id);
        M.toast({ html: 'Developer Deleted' })
    }

    return <li className='collection-item' >
        <div>
            {firstName} {lastName}
            <a href="#!" onClick={onDelete} className="secondary-content">
                <i className="material-icons grey-text">delete</i>
            </a>
        </div>

  </li>
};

DeveloperItem.propTypes = {
    developer: PropTypes.object.isRequired
};

export default connect(null, { deleteDeveloper })(DeveloperItem);
