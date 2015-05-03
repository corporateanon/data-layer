import t from 'tcomb';

const FeedItem = t.struct({
  id: t.Str,
  text: t.Str,
  createdAt: t.Str,
  name: t.Str,
  screenName: t.Str,
  userName: t.Str,
  userFollowersCount: t.Num
});

export default FeedItem;