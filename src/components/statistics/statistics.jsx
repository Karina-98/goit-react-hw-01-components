import css from './Statistics.module.css';
import { getRandomHexColor } from 'helpers/randomColor/randomColor';
import PropTypes from 'prop-types';

export const Statistics = ({ title, data }) => {
  return (
    <>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.stat_list}>
          {data.map(({ id, label, percentage }) => (
              <li
                key={id}
                className={css.item}
                style={{ backgroundColor: getRandomHexColor() }}
              >
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
              </li>
           
          ))}
        </ul>
      </section>
    </>
  );
};

<section class="statistics"></section>;

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
