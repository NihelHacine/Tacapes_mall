import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

function Article() {
const articles = useSelector((state)=>state.article?.article);
const n = useParams();
    const article = articles?.filter((el) => el._id == n.id)[0];
    return (
    <div>
     {article?.name}
    </div>
  )
}

export default Article