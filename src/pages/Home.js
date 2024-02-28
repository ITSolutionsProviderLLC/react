import React from 'react'
import Navbar from '../components/Navbar'
import { Categories } from '../components/Categories'
import Shop from '../components/Shop'
import data from "../components/data"

const Home = () => {
  console.log(data)
  return (
    <div>
      <Navbar />
      <div className='row'>
        <div className='col-3'>
          <Categories />
        </div>
        <div className='col-1'>
          <center>
            <span class="vertical-line"></span></center>
        </div>
        <div className='col'>
          <Shop data={data} />
        </div>

      </div>
    </div>

  )
}

export default Home