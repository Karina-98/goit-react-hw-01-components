import { Description } from '../Description/Description';
import { Stats } from '../Stats/Stats';
import PropTypes from 'prop-types';

import css from './Profile.module.css';

export const Profile = ({ user }) => {
  return (
    <section className={css.profile} key={user.username}>
      <div>
        <Description user={user} />
        <Stats user={user.stats} />
      </div>
    </section>
  );
};

Profile.prototype = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,}