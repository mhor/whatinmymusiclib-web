export const REQUEST_TRACKS_PENDING = 'REQUEST_TRACKS_PENDING';
export const REQUEST_TRACKS_SUCCESS = 'REQUEST_TRACKS_SUCCESS';
export const REQUEST_TRACKS_FAIL = 'REQUEST_TRACKS_FAIL';

export const fetchTracks = (page, limit, searchTerm, clearData) => ({
  types: ['REQUEST_TRACKS_PENDING', 'REQUEST_TRACKS_SUCCESS', 'REQUEST_TRACKS_FAIL'],
  normalize: true,
  clearData,
  searchTerm,
  payload: {
    request: {
      url: '/v1/tracks',
      params: {
        page,
        limit,
        search: searchTerm,
      },
    },
  },
});
