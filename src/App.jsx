import './App.css'
import Accordion from './components/accordion'
import ImageSlider from './components/image-slider'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import LoadMoreData from './components/load-more-data'

function App() {


  return (
    <>
      <Accordion />
      <RandomColor />
      <StarRating numberOfStars={10}/>
      <ImageSlider url="https://picsum.photos/v2/list" limit={10} page={1}/>
      <LoadMoreData />
    </>
  )
}

export default App
