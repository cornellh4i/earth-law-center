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
      <Header title="Lorem Ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." hasSearch={true} searchBarPlaceholder="Search Lorem Ipsum" />
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
