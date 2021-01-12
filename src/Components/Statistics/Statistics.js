import propTypes from 'prop-types';

function Statistics({ options, total, positivePercentage }) {
  return (
    <div>
      {Object.entries(options).map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))}
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  total: propTypes.number,
  positivePercentage: propTypes.number,
};

export default Statistics;
