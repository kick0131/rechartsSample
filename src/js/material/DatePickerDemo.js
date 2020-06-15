import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

//表示させたいデータ群
import * as json from '../../data/chartdata.json';
const chartdata = json.score01;

export default () => {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-06-01T12:34:56'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // 週末判定
  function disableWeekends(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }
  
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <DatePicker 
          id="date-picker"
          label="Date picker"
          value={selectedDate}
          onChange={handleDateChange}
          hintText="Weekends Disabled"
          shouldDisableDate={disableWeekends}
          format="yyyy/MM/dd"
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy/MM/dd"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
