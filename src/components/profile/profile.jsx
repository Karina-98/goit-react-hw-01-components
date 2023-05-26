import { Description } from '../description/description'
import { Stats } from '../stats/stats'

import css from './profile.module.css'

export const Profile = ({user}) => {
   return  <section className={css.profile} key={user.username}>
    <div>
      <Description user={user} />
      <Stats user={user.stats} />
    </div>
      </section>
}