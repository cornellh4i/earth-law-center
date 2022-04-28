import ResourceCard from "../ResourceCard/ResourceCard"
import Typography from '@mui/material/Typography';

function ResourceList({ resource, category }) {
  if (!resource || resource.length === 0) {
    return <p>No resources yet</p>
  }
  return <div>
    <Typography pt={2} pb={2} align='left' variant='h5' component='div' sx={{ fontWeight: 'bold' }}>{category}</Typography>
    {category === "ALL RESOURCES" &&
      resource.map((item) => (
        <ResourceCard title={item.title} resource_type={item.resource_type} description={item.id} />
      ))}
    {category === "VIDEOS" &&
      resource.map((item) => (
        item.resource_type === "Video" && <ResourceCard title={item.title} resource_type={item.resource_type} description={item.id} url={item.website} />
      ))}
    {category === "DOCUMENTS" &&
      resource.map((item) => (
        item.resource_type === "Doc" && <ResourceCard title={item.title} resource_type={item.resource_type} description={item.id} />
      ))}
    {category === "WEBSITES" &&
      resource.map((item) => (
        item.resource_type === "Website" && <ResourceCard title={item.title} resource_type={item.resource_type} description={item.id} />
      ))}
  </div>
}

export default ResourceList