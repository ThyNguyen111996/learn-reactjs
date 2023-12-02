import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Album from '../Album';

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};

AlbumList.defaultProps = {
    albumList: []
};

function AlbumList({ albumList }) {
    return (
        <ul className='album-list'>
            {albumList.map(album => (
                <li key={album.id}>
                    <Album album={album}></Album>
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;