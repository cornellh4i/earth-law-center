import ResourceCard from "../ResourceCard/ResourceCard"
import Typography from '@mui/material/Typography';
import Masonry from '@mui/lab/Masonry';
import './ResourceList.css';

/** Component for a landing card used by template law/letter cards
 *  @param {resource} is the json of resource data
 *  @param {category} is the category chosen from the side bar
*/
function ResourceList({ resource, category }) {
  if (!resource || resource.length === 0) {
    return <p>No resources yet</p>
  }
  return <div className="resource-box">
    <Typography pt={2} pb={2} align='left' variant='h5' component='div' sx={{ fontWeight:'bold', color:'#64926E', fontFamily:'Nunito' }}>{category}</Typography>
    <Masonry columns={2} spacing={2}>
      {category === "ALL RESOURCES" &&
        resource.map((item) => (
          <ResourceCard title={item.title} resource_type={item.resource_type} description={item.description} url={item.url} youtube={item.youtube} />
        ))}
      {category === "VIDEOS" &&
        resource.map((item) => (
          item.resource_type === "Video" && <ResourceCard title={item.title} resource_type={item.resource_type} description={item.description} url={item.url} youtube={item.youtube} />
        ))}
      {category === "DOCUMENTS" &&
        resource.map((item) => (
          item.resource_type === "Doc" && <ResourceCard title={item.title} resource_type={item.resource_type} description={item.description} url={item.url} />
        ))}
      {category === "WEBSITES" &&
        resource.map((item) => (
          item.resource_type === "Website" && <ResourceCard title={item.title} resource_type={item.resource_type} description={item.description} url={item.url} />
        ))}
    </Masonry>
  </div>
}

export default ResourceList