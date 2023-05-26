import css from './stats.module.css'
import PropTypes from 'prop-types'

export const Stats = ({ user }) => {
   return <ul className={css.stats}>
    <li className={css.stats_li}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{user.followers}</span>
    </li>
    <li className={css.stats_li}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{user.views}</span>
    </li>
    <li className={css.stats_li}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{user.likes}</span>
    </li>
</ul>
}

Stats.propTypes = {
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
}
