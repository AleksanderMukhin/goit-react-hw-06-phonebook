import { useDispatch, useSelector } from 'react-redux';
import { getFilter, filterContacts } from '../../redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <label className={css.filter}>
      Find contacts by name
      <input
        className={css.filter_input}
        value={filter}
        onChange={e => dispatch(filterContacts(e.target.value))}
        type="text"
      />
    </label>
  );
};
