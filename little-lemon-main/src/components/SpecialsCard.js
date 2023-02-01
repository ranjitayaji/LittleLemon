import React from 'react'
import "../components/styles/SpecialsCard.css"
import Dessert1 from "../components/assets/cd79b2835343bbea5a05a4d10fa5407d.jpg"
import Dessert2 from "../components/assets/f125c5885a0511b1328f51d2e65ab666.jpg"
import Dessert3 from "../components/assets/c04b0ec0e30d441ab2a65a5df5a8d2f3.jpg"
import { MdDeliveryDining } from "react-icons/md"
import { NavLink } from 'react-router-dom'


const SpecialsCard = () => {
    const specialMenus = [
        {   
            image: Dessert1,
            title: "Indian Thali",
            price: "500 Rs",
            description: "A Thali consists of several different dishes to create a perfectly balanced meal",
            order: "Order Online"
        },
        {
            image: Dessert2,
            title: "Crunchwrap",
            price: "800 Rs",
            description: "Vegetarian Crunchwrap Supreme is the meatless and tastier version of Taco bell's",
            order: "Order Online"
        },
        {
            image: Dessert3,
            title: "Cheese Rollatini",
            price: "900 Rs",
            description: "Cheese Rollatini is filled with cooked summer squash that is rolled up with Cheese",
            order: "Order Online"
        }
    ]

    const specialMenusItems = specialMenus.map(menu => {
            const image = menu.image;
            const title = menu.title;
            const price = menu.price;
            const description = menu.description;
            const order = menu.order;
            
            return (
                <div>
                    <div className="special-card-container">
                        <div className="image-container">
                                <img src={image} alt="Special dessert" />
                            </div>
                        <div className="special-card-text">
                            <div className="special-card-title">
                                <h3>{title}</h3>
                                <h3 className="price-tag">{price}</h3>
                            </div>
                            <p>{description}</p>
                            <NavLink to="#">
                                <h4>
                                    {order}
                                    { <MdDeliveryDining size={30} style={{ color: "#333333", marginLeft: "10px",}} /> }
                                </h4>
                            </NavLink>
                        </div>
                    </div>
                </div>
            )
    })


  return (
    <div>
      <div className="special-card">
        {specialMenusItems}
      </div>
    </div>
  )
}

export default SpecialsCard
