import TemplateCard from "../TemplateCard/TemplateCard"
// import Masonry from '@mui/lab/Masonry';
// import Grid from '@mui/material/Grid';

/** Component for a landing card used by template law/letter cards
 *  @param {data} is the json of data data
 *  @param {checked} is the checked boxes in the side bar
 *  @param {category} is the category chosen from the side bar
*/
function dataList({ data, checked, category }) {
  if (!data || data.length === 0) {
    return <p>No data yet</p>
  }
  return <div>{
    data.map((item) => (
      <TemplateCard
        key={item.id}
        className='template-card'
        title={item.title}
        summary={item.summary}
        letter={item.letter}
        // edit={item.edit}
        // download={item.download}
        category={item.category}
        filterCategory={category}
        preview={item.preview}
        law={item.law}
        jurisdiction={item.jurisdiction}
        currentFilter={checked}
        docID={item.docID}
        pdf={item.pdf}
      />
    ))}
  </div>
}

export default dataList