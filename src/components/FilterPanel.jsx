import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { useDispatch, useSelector } from 'react-redux';
import {clearFilter, removeFilter} from '../redux/filters/filters-actions'
import {selectFilters} from '../redux/filters/filter-selectors'


const FilterPanel = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleClearFilter = () => {
    dispatch(clearFilter());
  }

  if(!filters.length){
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {
            filters.map(el => <Badge key={el} onClear={() => dispatch(removeFilter(el))} variant="clearable">{el}</Badge>)
          }
        </Stack>

        <button className='link' onClick={handleClearFilter}>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};