import React from 'react';
import './ResourceDisplay.css';
import ResourceCard from '../../components/ResourceCard/ResourceCard';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

/** Component for Resource Display Page */
const ResourceDisplay = () => {
  return (
    <div>

      <Typography pt={2} pb={2} align='left' variant='h5' component='div' sx={{ fontWeight: 'bold' }}>Resources</Typography>

      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <ResourceCard title="Doc Title1" resource_type="Doc" link_to_resource="../../properties/elc-home-mar2022.jpeg" description="Lorem ipsum dolor sit amet, in sed percipitur eloquentia Lorem ipsum dolor sit amet, in sed" url='http://yahoo.com'></ResourceCard>
        </Grid>
        <Grid item md={6} xs={12}>
          <ResourceCard title="Doc Title2" resource_type="Doc" link_to_resource="../../properties/elc-home-mar2022.jpeg" description="Lorem ipsum dolor sit amet, in sed percipitur eloquentia Lorem ipsum dolor sit amet, in sed" url='http://google.com'></ResourceCard>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <ResourceCard title="Video Title1" resource_type="Video" link_to_resource="../../properties/elc-home-mar2022.jpeg" description="Lorem ipsum dolor sit amet, in sed percipitur eloquentia Lorem ipsum dolor sit amet, in sed" ></ResourceCard>
        </Grid>
        <Grid item md={6} xs={12}>
          <ResourceCard title="Video Title2" resource_type="Video" link_to_resource="../../properties/elc-home-mar2022.jpeg" description="Lorem ipsum dolor sit amet, in sed percipitur eloquentia Lorem ipsum dolor sit amet, in sed"></ResourceCard>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <ResourceCard title="Website Title1" resource_type="Website" link_to_resource="../../properties/elc-home-mar2022.jpeg" description="Lorem ipsum dolor sit amet, in sed percipitur eloquentia Lorem ipsum dolor sit amet, in sed"></ResourceCard>
        </Grid>
        <Grid item md={6} xs={12}>
          <ResourceCard title="Website Title2" resource_type="Website" link_to_resource="../../properties/elc-home-mar2022.jpeg" description="Lorem ipsum dolor sit amet, in sed percipitur eloquentia Lorem ipsum dolor sit amet, in sed"></ResourceCard>
        </Grid>
      </Grid>
    </div>
  );
};
export default ResourceDisplay;
