import React from 'react';
// import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc Chill Tâm Trạng Buồn',
            thumbnaiUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/5/4/9/45493e859cde749c75fb4377c14d0db3.jpg'
        },
        {
            id: 2,
            name: 'Giai Điệu Chữa Lành',
            thumbnaiUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/3/5/1/8351ceb59c750597f4fd74670d2c9088.jpg'
        },
        {
            id: 3,
            name: 'Nhạc Hoa Lời việt',
            thumbnaiUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/5/4/9/45493e859cde749c75fb4377c14d0db3.jpg'
        }
    ];
    return (
        <div>
            <h2>Album List</h2>
            <AlbumList albumList={albumList}></AlbumList>
        </div>
    );
}

export default AlbumFeature;