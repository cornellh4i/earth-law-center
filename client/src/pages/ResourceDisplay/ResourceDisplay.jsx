import React, { useState } from 'react';
import './ResourceDisplay.css';
import ResourceData from '../../data/ResourceData';
import ResourceList from '../../components/ResourceList/ResourceList'
import Grid from '@mui/material/Grid';
import Header from "../../components/Header/Header"
import ResourceSideBar from "../../components/ResourceSideBar/ResourceSideBar"

/** Component for Resource Display Page */
const ResourceDisplay = () => {
  const [category, setCategory] = useState("ALL RESOURCES");

  return (
    <>
      <Header />
      <Grid container columns={16}>
        <Grid item xs={4}>
          <ResourceSideBar category={category} setCategory={setCategory} />
        </Grid>
        <Grid item xs={8}>
          <ResourceList resource={ResourceData} category={category} />
        </Grid>
      </Grid>
    </>
  );
};
export default ResourceDisplay;
