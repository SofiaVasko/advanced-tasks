import './App.css';
import { MyPostComponent } from './myPostApp';
import './style.css'
import IconH from '../src/img/heart.png'
import IconR from '../src/img/repost.png'


const authorImage = "https://ashleylongshore.com/cdn/shop/products/Hannah-arendt-36x36.jpg?v=1663101181"
const postImage = "https://s01.sgp1.cdn.digitaloceanspaces.com/article/127276-jnzycnhzoz-1568295502.jpg"

function App() {
  return (
<div className='data'>
  <MyPostComponent author = {{ name: "Hannah Arendt☑️",
photo: authorImage,
nickname: "@political_philosopher"
  }} content="Evil comes from a failure to think. It defies thought for as soon as thought tries to engage itself with evil and examine the premises and principles from which it originates, it is frustrated because it finds nothing there. That is the banality of evil."
image= {postImage}
date={" 16 Feb"}
iconHeart={IconH}
iconRepost={IconR}
/>
</div>
)
}

export default App;
