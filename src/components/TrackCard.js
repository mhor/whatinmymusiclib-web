import React from 'react';

export const TrackCard = props => (
  <div className="track-preview">
    <h2 className="name">{props.name}</h2>
    <div className="artistName">{props.artistName}</div>
    <div className="albumName">{props.albumName}</div>
    <div className="addedAt">{props.addedAt}</div>
    <div className="number">{props.number}</div>
  </div>
);

export default TrackCard;
