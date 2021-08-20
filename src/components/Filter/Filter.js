import React from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";
import { getFilter } from "../../redux/contacts-selectors";
import { useDispatch, useSelector } from "react-redux";
import { handleFilterContacts } from "../../redux/filterReducer";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label_filter}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(handleFilterContacts(e.target.value))}
      ></input>
    </label>
  );
};

export default Filter;

