import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker
} from '@material-ui/pickers';

// ユーザ定義コンポーネント
import { DatePickerContext } from './WorkGraph03'

export default () => {
  // 親コンポーネント情報
  const datepicker = React.useContext(DatePickerContext);

  // 親コンポーネントのstateを更新
  const handleBeforeDateChange = (date) => {
    datepicker.beforehandler(date);
  };
  const handleAfterDateChange = (date) => {
    datepicker.afterhandler(date);
  };

  // 週末判定
  function disableWeekends(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        id="date-pickerbefore"
        label="Before"
        value={datepicker.before}
        onChange={handleBeforeDateChange}
        shouldDisableDate={disableWeekends}
        format="yyyy/MM/dd"
      />
      <DatePicker
        id="date-pickerafter"
        label="After"
        value={datepicker.after}
        onChange={handleAfterDateChange}
        shouldDisableDate={disableWeekends}
        format="yyyy/MM/dd"
      />
    </MuiPickersUtilsProvider>
  );
}
