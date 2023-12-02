import React from 'react';
import PropTypes from 'prop-types';

TodoItem.propTypes = {
    id: PropTypes.number.isRequired
};

function TodoItem(props) {
    return (
        <li></li>
    );
}

export default TodoItem;