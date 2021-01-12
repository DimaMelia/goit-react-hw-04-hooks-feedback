import propTypes from 'prop-types';
import s from './Controls.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="controls">
      {options.map(option => (
        <button
          type="button"
          className={s.controlBtn}
          name={option}
          key={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string),
};

export default FeedbackOptions;
