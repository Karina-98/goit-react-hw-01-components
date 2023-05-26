import css from './statistics.module.css';
import { getRandomHexColor } from 'components/randomColor/randomColor';
import PropTypes from 'prop-types';

export const Statistics = ({ title, data }) => {
  console.log(data);
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
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  parent: PropTypes.string,
};
