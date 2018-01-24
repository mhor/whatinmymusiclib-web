import { schema } from 'normalizr';

const trackSchema = new schema.Entity('tracks');

const tracksListSchema = [trackSchema];

export default tracksListSchema;
