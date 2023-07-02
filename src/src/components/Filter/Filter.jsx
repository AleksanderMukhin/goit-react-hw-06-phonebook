import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, handleFilterChange }) => {
  return (
    <label className={css.filter}>
      Find contacts by name
      <input
        className={css.filter_input}
        value={value}
        onChange={handleFilterChange}
        type="text"
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};
