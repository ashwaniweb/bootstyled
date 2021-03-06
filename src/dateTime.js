import React from 'react';
import PropTypes from 'prop-types';
import DateTimePicker from 'react-datetime';
import { FormControl } from './input';
import styled from 'styled-components';

const DateTime = styled(DateTimePicker)`
  position: relative;

  .cross {
    opacity: 0;
    &:hover {
      opacity: 1;
    }
  }
  .form-control {
    &:hover,
    &:focus {
      & + .cross {
        opacity: 1;
      }
    }
  }

  .rdtPicker {
    max-height: 0;
    position: absolute;
    width: 100%;
    padding: 4px;
    margin-top: 1px;
    z-index: 99999 !important;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid #f9f9f9;
    overflow: hidden;
    opacity: 0;
    transition: all 0.3s;
  }
  &.rdtOpen .rdtPicker {
    max-height: 300px;
    opacity: 1;
  }
  .rdtStatic .rdtPicker {
    box-shadow: none;
    position: static;
  }

  .rdtPicker .rdtTimeToggle {
    text-align: center;
  }

  .rdtPicker table {
    width: 100%;
    margin: 0;
  }
  .rdtPicker td,
  .rdtPicker th {
    text-align: center;
    height: 28px;
  }
  .rdtPicker td {
    cursor: pointer;
  }
  .rdtPicker td.rdtDay:hover,
  .rdtPicker td.rdtHour:hover,
  .rdtPicker td.rdtMinute:hover,
  .rdtPicker td.rdtSecond:hover,
  .rdtPicker .rdtTimeToggle:hover {
    background: #eeeeee;
    cursor: pointer;
  }
  .rdtPicker td.rdtOld,
  .rdtPicker td.rdtNew {
    color: #999999;
  }
  .rdtPicker td.rdtToday {
    position: relative;
  }
  .rdtPicker td.rdtToday:before {
    content: '';
    display: inline-block;
    border-left: 7px solid transparent;
    border-bottom: 7px solid #428bca;
    border-top-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    bottom: 4px;
    right: 4px;
  }
  .rdtPicker td.rdtActive,
  .rdtPicker td.rdtActive:hover {
    background-color: #428bca;
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  }
  .rdtPicker td.rdtActive.rdtToday:before {
    border-bottom-color: #fff;
  }
  .rdtPicker td.rdtDisabled,
  .rdtPicker td.rdtDisabled:hover {
    background: none;
    color: #999999;
    cursor: not-allowed;
  }

  .rdtPicker td span.rdtOld {
    color: #999999;
  }
  .rdtPicker td span.rdtDisabled,
  .rdtPicker td span.rdtDisabled:hover {
    background: none;
    color: #999999;
    cursor: not-allowed;
  }
  .rdtPicker th {
    border-bottom: 1px solid #f9f9f9;
  }
  .rdtPicker .dow {
    width: 14.2857%;
    border-bottom: none;
    cursor: default;
  }
  .rdtPicker th.rdtSwitch {
    width: 100px;
  }
  .rdtPicker th.rdtNext,
  .rdtPicker th.rdtPrev {
    font-size: 21px;
    vertical-align: top;
  }

  .rdtPrev span,
  .rdtNext span {
    display: block;
    user-select: none;
  }

  .rdtPicker th.rdtDisabled,
  .rdtPicker th.rdtDisabled:hover {
    background: none;
    color: #999999;
    cursor: not-allowed;
  }
  .rdtPicker thead tr:first-child th {
    cursor: pointer;
  }
  .rdtPicker thead tr:first-child th:hover {
    background: #eeeeee;
  }

  .rdtPicker tfoot {
    border-top: 1px solid #f9f9f9;
  }

  .rdtPicker button {
    border: none;
    background: none;
    cursor: pointer;
  }
  .rdtPicker button:hover {
    background-color: #eee;
  }

  .rdtPicker thead button {
    width: 100%;
    height: 100%;
  }

  td.rdtMonth,
  td.rdtYear {
    height: 50px;
    width: 25%;
    cursor: pointer;
  }
  td.rdtMonth:hover,
  td.rdtYear:hover {
    background: #eee;
  }

  .rdtCounters {
    display: flex;
  }

  .rdtCounter {
    height: 100px;
  }

  .rdtCounter {
    width: 100%;
  }

  .rdtCounterSeparator {
    line-height: 100px;
  }

  .rdtCounter .rdtBtn {
    height: 40%;
    line-height: 40px;
    cursor: pointer;
    display: block;
    user-select: none;
  }
  .rdtCounter .rdtBtn:hover {
    background: #eee;
  }
  .rdtCounter .rdtCount {
    height: 20%;
    font-size: 1.2em;
  }

  .rdtMilli {
    vertical-align: middle;
    padding-left: 8px;
    width: 48px;
  }

  .rdtMilli input {
    width: 100%;
    font-size: 1.2em;
    margin-top: 37px;
  }

  .rdtTime td {
    cursor: default;
  }
`;
const Icon = styled.button`
  position: absolute;
  background: #fff;
  color: #354052;
  border-radius: 50%;
  right: 10px;
  top: 12px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  border: 0;
  outline: 0;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.14);
`;

const propTypes = {
  date: PropTypes.bool,
  time: PropTypes.bool,
};

const defaultProps = {
  date: true,
  time: false,
};

function renderInput(props) {
  function clear() {
    props.onChange({ target: { value: '' } });
  }

  return (
    <div>
      <FormControl {...props} />
      {props.value && (
        <Icon className="cross" onClick={clear}>
          X
        </Icon>
      )}
    </div>
  );
}

export default function DateTimeFunc({ date, time, ...props }) {
  return (
    <DateTime
      {...props}
      renderInput={renderInput}
      closeOnSelect
      dateFormat={date}
      timeFormat={time}
    />
  );
}

DateTimeFunc.propTypes = propTypes;
DateTimeFunc.defaultProps = defaultProps;
