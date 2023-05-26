import css from './description.module.css'
import PropTypes from 'prop-types'

export const Description = ({user}) => {
    console.log(user)
    return <div className={css.description}>
  <img
        src={user.avatar}
        alt={user.username}
        className={css.avatar }
    />
    <p className={css.name}>{user.username}</p>
        <p className="tag">@{user.tag}</p>
    <p className="location">{user.location}</p>
</div>
}

Description.propTypes = {
    avatar: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string
}