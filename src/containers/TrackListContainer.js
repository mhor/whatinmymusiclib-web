import { connect } from 'react-redux';
import { fetchTracks } from '../actions/tracks';
import TrackList from '../components/TrackList';

const mapStateToProps = state => ({
  tracksList: {
    result: state.track.tracksList.result,
    entities: state.track.tracksList.entities,
    hasMore: state.track.hasMore,
    isLoading: state.track.isLoading,
    nextPage: state.track.nextPage,
    isError: state.track.isError,
  },
});

const mapDispatchToProps = dispatch => ({
  fetchTracks: (page, limit) => {
    dispatch(fetchTracks(page, limit));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);
