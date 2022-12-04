import React, { useState } from 'react';
import './ResourceDisplay.css';
import ResourceData from '../../data/ResourceData';
import ResourceList from '../../components/ResourceList/ResourceList'
import Grid from '@mui/material/Grid';
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import ResourceSideBar from "../../components/ResourceSideBar/ResourceSideBar"

/** Component for Resource Display Page */
const ResourceDisplay = () => {
  const [category, setCategory] = useState("ALL RESOURCES")
  const [data, setData] = useState(ResourceData)
  const searchData=(input)=>{
    setData(ResourceData.filter((item)=>{
      if (input===''){
        return true
      }
      else {
        return item.title.toLowerCase().includes(input) || item.description.toLowerCase().includes(input)
      }
    }))
  }

  return (
    <div>
      <Header title="Earth Law Resources" description="Video, document, and website resources for creating earth laws." hasSearch={true} searchBarPlaceholder="Search Resources" handleSearch={searchData}/>
      <Grid container columns={14}>
        <Grid item xs={4}>
          <ResourceSideBar category={category} setCategory={setCategory} />
        </Grid>
        <Grid item xs={8}>
          <ResourceList resource={data} category={category} />
        </Grid>
      </Grid>
      <Footer text="Powered by Earth Law Center" />
    </div>
  );
};
export default ResourceDisplay;
