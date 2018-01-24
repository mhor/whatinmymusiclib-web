import { connect } from 'react-redux';
import { fetchTracks } from '../actions/tracks';
import TrackList from '../components/TrackList';

const mapStateToProps = state => ({
  tracksList: state.track.tracksList,
});

const mapDispatchToProps = dispatch => ({
  fetchTracks: () => {
    dispatch(fetchTracks());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);
