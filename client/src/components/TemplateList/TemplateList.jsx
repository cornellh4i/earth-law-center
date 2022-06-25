import TemplateCard from "../TemplateCard/TemplateCard"
// import Masonry from '@mui/lab/Masonry';
// import Grid from '@mui/material/Grid';

/** Component for a landing card used by template law/letter cards
 *  @param {data} is the json of data data
 *  @param {category} is the category chosen from the side bar
*/
function dataList({ data, checked }) {
  if (!data || data.length === 0) {
    return <p>No data yet</p>
  }
  return <div>{
    data.map((item) => (
      <TemplateCard title={item.title} summary={item.summary} letter={item.letter} edit={item.edit} download={item.download} preview={item.preview} law={item.law} jurisdiction={item.jurisdiction} currentFilter={checked} />
    ))} 
  </div>
}

export default dataList