
import FoodData from '../Data/FoodData'
import Card from './Card'


const Cards = ({ category, searchQuery }) => {
  const filteredData = FoodData.filter(item => {
    const matchCategory = category === "All" || item.category === category
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div className='flex flex-wrap  max-w-[90%] '>
        {filteredData.map((item, index)=>(
            <Card key={index} item = {item}/>
        ))}
       
    </div>
    
  )
}

export default Cards
