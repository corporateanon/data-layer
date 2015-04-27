import t from 'tcomb';

const FeedItem = t.struct({
  id_str: t.Str,
  text: t.Str,
});

export default FeedItem;
