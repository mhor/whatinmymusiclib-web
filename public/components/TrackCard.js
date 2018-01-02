import React from 'react';
import Moment from 'react-moment';

export const TrackCard = props => (
  <div className="box">
    <article className="media">
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{props.name}</strong>
            <br />
            {props.albumName}
            <br />
            {props.artistName}
          </p>
        </div>
        <div className="content content-since">
          <small>since <Moment format="YYYY-MM-DD HH:mm">{props.addedAt}</Moment></small>
        </div>
      </div>
    </article>
  </div>
);

export default TrackCard;
