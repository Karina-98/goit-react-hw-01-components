import css from './friendList.module.css'

export const FriendList = ({ friends }) => {
  console.log(friends);
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
