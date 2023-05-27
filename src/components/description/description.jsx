import css from './Description.module.css';
import PropTypes from 'prop-types';

export const Description = ({ user }) => {
  return (
    <div className={css.description}>
      <img src={user.avatar} alt={user.username} className={css.avatar} />
      <p className={css.name}>{user.username}</p>
      <p className="tag">@{user.tag}</p>
      <p className="location">{user.location}</p>
    </div>
  );
};

Description.prototype = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};
