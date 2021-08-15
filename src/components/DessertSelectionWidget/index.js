import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import { fetchAllDesserts, createDessert, clearDessert } from "../../actions/index";
import DessertsDisplay from "../DessertsDisplay";
import { v4 as uuid } from 'uuid'
import { Grid } from "@material-ui/core";

const DessertSelectionWidget = () => {
  // Fetches List of Desserts From Redux Store
  var dessert_item = useSelector((state) => state.allDesserts.desserts);
  const nameInputRef = useRef();
  const [flag, setFlag] = useState(true);
  const [clearFlag, setClearFlag] = useState(true);
  const [showList, setshowList] = useState(false);
  const [fetchButtonTitle, setfetchButtonTitle] = useState('Fetch Desserts');

  // Error State to Show error Messages if Promise Fails/API Call Fails
  const [errors, setErrors] = useState(false);

  const dispatch = useDispatch();

  const fetchDesserts = () => {
    setfetchButtonTitle('Loading..')
    // Dispatches action to fetch desserts to Redux Store
    dispatch(fetchAllDesserts())
      .then(() => {
        setfetchButtonTitle('Fetch Desserts');
      })
      .catch((err) => setErrors(true));
  };

  const showDesserts = () => {
    setshowList(true);
    setClearFlag(false);
    setFlag(false);
  };

  const hideDesserts = () => {
    setshowList(false);
    setFlag(true);
  };

  const addDessert = async (event) => {
    event.preventDefault();
    const request = {
      id: uuid(),
      name: nameInputRef.current.value
    }
    dispatch(createDessert(request))
      .then(() => {
        setClearFlag(false);
        setFlag(false);
      })
      .catch((err) => setErrors(true));
  }

  const clearDessertsList = () => {
    setFlag(true);
    setClearFlag(true);
    dispatch(clearDessert())
  }
  var hideCondition = dessert_item.length <= 0

  return (
    <div>
      <Grid container spacing={3}>
      <Grid item xs={6}>
        <h3>React Redux Code Challenge</h3>
        <h2>Fetch a list of desserts</h2>
          <button onClick={fetchDesserts}>{ fetchButtonTitle}</button>
        <h2>Display the list of desserts</h2>
        <button onClick={showDesserts} disabled={hideCondition}>
          Show desserts
        </button>
        <h2>Hide the list of desserts</h2>
        <button onClick={hideDesserts} disabled={flag}>
          Hide Desserts
        </button>
        <h2>Add new dessert</h2>
        <form onSubmit={ addDessert }>
          <input ref={ nameInputRef} type="text" id="name" />
          <button>Add new dessert</button>
          </form>
        <h2>Clear list of desserts</h2>
        <button disabled={clearFlag} onClick={ clearDessertsList }>Clear desserts list</button>
        </Grid>
        <Grid item xs={6}>
          {dessert_item && showList && (
          <DessertsDisplay dessertsLists={dessert_item}></DessertsDisplay>
          )}
          </Grid>
        </Grid>
      </div>
    
  );
};

export default DessertSelectionWidget;
