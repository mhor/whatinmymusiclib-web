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
    searchTerm: state.track.searchTerm,
  },
});

const mapDispatchToProps = dispatch => ({
  fetchTracks: (page, limit, searchTerm, clearData) => {
    dispatch(fetchTracks(page, limit, searchTerm, clearData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);
