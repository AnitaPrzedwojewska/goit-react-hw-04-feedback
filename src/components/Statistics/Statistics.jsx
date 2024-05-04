import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul className={css.StatsList}>
        <li className={css.StatItem}>
          Good: <span className={css.StatValue}>{good}</span>
        </li>
        <li className={css.StatItem}>
          Neutral: <span className={css.StatValue}>{neutral}</span>
        </li>
        <li className={css.StatItem}>
          Bad: <span className={css.StatValue}>{bad}</span>
        </li>
      </ul>
      <ul className={css.StatsResultsList}>
        <li className={css.StatsResultsItem}>
          Total: <span className={css.StatValue}>{total}</span>
        </li>
        <li className={css.StatsResultsItem}>
          Positive feedback:{" "}
          <span className={css.StatValue}>{positivePercentage} %</span>
        </li>
      </ul>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
