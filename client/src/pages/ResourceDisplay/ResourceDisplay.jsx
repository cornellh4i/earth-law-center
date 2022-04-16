import React from 'react';
import './ResourceDisplay.css';
// import Header from '../../components/Header/Header'; 
import ResourceCard from '../../components/ResourceCard/ResourceCard';

/** Component for Resource Display Page */

const ResourceDisplay = () => {
  return (
    <div>
      {/* <Header/> */}
      <ResourceCard title="Video Title" link_to_resource="https://www.youtube.com/" description="lengendary loreum texts"></ResourceCard>
    </div>
  );
};
export default ResourceDisplay;
