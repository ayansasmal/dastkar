import React, { useState } from "react";
import classes from "./HeaderSearch.module.css";

const HeaderSearch = (props) => {
  const [showSelect, setShowSelect] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const searchCriterias = {
    id: "Id",
    name: "Name",
    contact: "Contact No.",
    email: "Email Id",
  };
  let cls = classes.SearchLarge;
  if (props.mobile) cls = classes.SearchSmall;

  const selectValue = (event) => {
    console.log(event.target.attributes.value.value);
    setShowSelect(!showSelect);
    setSelectedValue(searchCriterias[event.target.attributes.value.value]);
  };

  const listItems = Object.keys(searchCriterias).map((value, index) => (
    <li
      key={index}
      className={classes.SelectOptions}
      onClick={selectValue}
      value={value}
    >
      {searchCriterias[value]}
    </li>
  ));

  const toggleSelect = () => {
    setShowSelect(!showSelect);
  };

  const searchHandler = () => {
    console.log("clicked search ::", selectedValue, searchValue);
  };

  const grabSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={cls}>
      <div className={classes.SearchBy}>
        <span>Search By</span>
      </div>
      <div className={classes.Chevron}>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
      <div className={classes.CustomSelect}>
        <input
          className={classes.InputSelect}
          type="text"
          readOnly
          onClick={toggleSelect}
          value={selectedValue}
        />
        <ul className={classes.SelectDropDown} hidden={showSelect}>
          {listItems}
        </ul>
      </div>
      <div className={classes.Chevron}>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
      <input
        className={classes.InputValue}
        type="text"
        value={searchValue}
        onChange={grabSearchValue}
      />
      <div className={classes.SearchIcon} onClick={searchHandler}>
        <ion-icon name="search-outline"></ion-icon>
      </div>
    </div>
  );
};

export default HeaderSearch;
