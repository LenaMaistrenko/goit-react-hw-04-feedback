import PropTypes from 'prop-types';
export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div
      class="buttons"
      style={{ display: 'flex', gap: '20px', borderRadius: '5px' }}
    >
      {options.map(item => (
        <button key={item} name={item} type="button" onClick={onLeaveFeedback}>
          {item}
        </button>
      ))}
    </div>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
