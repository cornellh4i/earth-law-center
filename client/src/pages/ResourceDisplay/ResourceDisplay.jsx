import React, { useState } from 'react';
import './ResourceDisplay.css';
import ResourceCard from '../../components/ResourceCard/ResourceCard';
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
          <>
            <ResourceList resource={ResourceData} category={category} />
          </>
          {/* <div>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <ResourceCard title="Doc Title1" resource_type="Doc"></ResourceCard>
              </Grid>
              <Grid item md={6} xs={12}>
                <ResourceCard title="Doc Title2" resource_type="Doc"></ResourceCard>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <ResourceCard title="Video Title1" resource_type="Video"></ResourceCard>
              </Grid>
              <Grid item md={6} xs={12}>
                <ResourceCard title="Video Title2" resource_type="Video"></ResourceCard>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <ResourceCard title="Website Title1" resource_type="Website"></ResourceCard>
              </Grid>
              <Grid item md={6} xs={12}>
                <ResourceCard title="Website Title2" resource_type="Website"></ResourceCard>
              </Grid>
            </Grid>
          </div> */}
        </Grid>
      </Grid>
    </>
  );
};
export default ResourceDisplay;
