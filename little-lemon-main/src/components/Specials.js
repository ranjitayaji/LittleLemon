import React from 'react'
import "../components/styles/Specials.css"
import SpecialsCard from './SpecialsCard'
import SpecialsCard1 from './SpecialsCard1'


const Specials = () => {
  return (
    <div className="specials-section-container">
      <div className="specials-section-title">
      
            <h2>Today's Specials</h2>
            <div className="btn-container">
                
            </div>
      </div>
      <SpecialsCard />
      <div className="specials-section-title">
            <h2>Special Desserts</h2>
            <div className="btn-container">
                
            </div>
      </div>
      <SpecialsCard1 />

    </div>
    
  )
}

export default Specials
