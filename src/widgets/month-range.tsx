import { WidgetFuncType } from '../utils/create-field';
import { dateRange } from './date-range'

const monthRange: WidgetFuncType = dateRange(false, 'month')

export default monthRange