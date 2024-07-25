// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="planets-app-container" data-testid="planets">
      <h1 className="heading"> PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachplanet => (
          <PlanetItem key={eachplanet.id} planetDetails={eachplanet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
