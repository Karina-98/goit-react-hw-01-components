import css from './FriendList.module.css'
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <section>
      <ul className={css.friend_list}>
        {friends.map(({ avatar, id, isOnline, name }) => (
          <li className={css.item} key={id}>
        <span className={css.status} style={{backgroundColor: isOnline === true ? 'green' : 'red'}}></span>
            <img className={css.avatar}src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

FriendList.prototype = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired)
}
