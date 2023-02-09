import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
export function Statistics({ good, neutral, bad, total, persentage }) {
  return total > 0 ? (
    <>
      <p>Good: {good} </p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {persentage}%</p>
    </>
  ) : (
    <Notification message="There is no feedback" />
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
