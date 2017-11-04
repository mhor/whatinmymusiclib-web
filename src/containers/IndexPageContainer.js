import { connect } from 'react-redux';
import { fetchTracks, fetchTracksSuccess, fetchTracksFailure } from '../actions/tracks';
import IndexPage from '../components/IndexPage';

const mapStateToProps = state => ({
  tracksList: state.track.tracksList,
});

const mapDispatchToProps = dispatch => ({
  fetchTracks: () => {
    dispatch(fetchTracks()).then((response) => {
      !response.error
        ? dispatch(fetchTracksSuccess(response.payload.data))
        : dispatch(fetchTracksFailure(response.payload.data));
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
