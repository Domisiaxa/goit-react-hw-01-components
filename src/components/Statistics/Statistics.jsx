import PropTypes from 'prop-types';

import { getRandomHexColor } from '../../helpful/getRandomColor';

import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section class={css.statistic}>
      {title && <h2 class="title">{title}</h2>}
      <ul class={css.list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            class={css.item}
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span class={css.label}>{label}</span>
            <span class={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
