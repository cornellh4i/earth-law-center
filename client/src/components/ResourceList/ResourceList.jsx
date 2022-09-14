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
    return <div className="resource-box">
      <div className="resource-page-title">{category}</div>
    </div>
  }
  return <div className="resource-box">
    <div className="resource-page-title">{category}</div>
    <Masonry columns={2} spacing={4}>
      {category === "ALL RESOURCES" &&
        resource.map((item) => (
          <ResourceCard title={item.title} resource_type={item.resource_type} description={item.description} url={item.url} youtube={item.youtube} vid_img={item.vid_img} doc_img = {item.doc_img} doc_pdf = {item.doc_pdf}/>
        ))}
      {category === "VIDEOS" &&
        resource.map((item) => (
          item.resource_type === "Video" && <ResourceCard title={item.title} resource_type={item.resource_type} description={item.description} url={item.url} vid_img={item.vid_img} youtube={item.youtube} />
        ))}
      {category === "DOCUMENTS" &&
        resource.map((item) => (
          item.resource_type === "Doc" && <ResourceCard title={item.title} resource_type={item.resource_type} description={item.description} doc_img = {item.doc_img} doc_pdf = {item.doc_pdf} />
        ))}
      {category === "WEBSITES" &&
        resource.map((item) => (
          item.resource_type === "Website" && <ResourceCard title={item.title} resource_type={item.resource_type} description={item.description} url={item.url} />
        ))}
    </Masonry>
  </div>
}

export default ResourceList