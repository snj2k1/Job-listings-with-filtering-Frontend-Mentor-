import { JobPosition } from './JobPosition';
import {selectVisiblePositions} from '../redux/positions/positions-selectors';
import {selectFilters} from '../redux/filters/filter-selectors';
import { useDispatch, useSelector } from 'react-redux';
import {addFilter} from '../redux/filters/filters-actions';

const JobList = () => {
  const filters = useSelector(selectFilters);
  const positions = useSelector((state) => selectVisiblePositions(state, filters));
  const dispatch = useDispatch();

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  }

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition key={item.id} handleAddFilter={handleAddFilter} {...item} />
      ))}
    </div>
  )
}

export {JobList};