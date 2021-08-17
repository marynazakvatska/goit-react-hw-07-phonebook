import React from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";
import { getFilter } from "../../redux/selectors";
import * as actions from '../../redux/actions'
import {useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

return (
   <label className={s.label_filter}>
    Find contacts by name<input type="text"
      value={value}
      onChange={(e) => dispatch(actions.changeFilter(e.target.value))}></input>
        </label>
)
}


export default Filter;


/* const mapStateToProps = state => ({
  value: state.contacts.filter
})

const mapDispatchToProps = dispatch => ({
  onChange: (e) => dispatch(changeFilter(e.target.value))
})


export default connect(mapStateToProps, mapDispatchToProps)(Filter)
 */
/* Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}; */