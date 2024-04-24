import css from './FeedbackOptions.module.css';
import { PropTypes } from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul className={css.OptionsList}>
        {options.map(option => (
          <li key={option}>
            <button className={css.Button} type="button" name={option} onClick={onLeaveFeedback}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};