import ResourceCard from "../ResourceCard/ResourceCard"

function ResourceList({ resource, category }) {
  if (!resource || resource.length === 0) {
    return <p>No resources yet</p>
  }
  return <div>
    {resource.map((item) => (
      <ResourceCard title={item.title} resource_type={item.resource_type} description={item.id} />
    ))}
  </div>
}

export default ResourceList