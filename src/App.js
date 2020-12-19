import React,{useState, useEffect} from 'react'
import SeasonsGrid from './components/SeasonsGrid'
import Showcase from './components/Showcase'
import Footer from './components/Footer'
import axios from 'axios'
import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsloading] = useState(true)

  useEffect(()=>{
    const fetchItems = async ()=>{
      const result = await axios('https://www.breakingbadapi.com/api/episodes')
      console.log(result.data)
      setIsloading(false)
      setItems(result.data)
    };
    fetchItems();
  },[])

  return (
    <section className="main-section">
      <Showcase/>
      <SeasonsGrid isLoading={isLoading}  items={items}/>
      <Footer/>
    </section>
  )
}

export default App
