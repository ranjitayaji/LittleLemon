import React from 'react'
import "../components/styles/SpecialsCard1.css"
import Dessert1 from "../components/assets/2d7139a2fcfe646a952e501dc18e0414.jpg"
import Dessert2 from "../components/assets/b3d903727e21693125bcb04ea3011399.jpg"
import Dessert3 from "../components/assets/583f2fa5ce880586af28a51e721733a5.jpg"
import { MdDeliveryDining } from "react-icons/md"
import { NavLink } from 'react-router-dom'


const SpecialsCard1 = () => {
    const specialMenus = [
        {   
            image: Dessert1,
            title: "Badam Milk",
            price: "250 Rs",
            description: "Kesar Badam Milk is a popular traditional Indian Ayurvedic Drink",
            order: "Order Online"
        },
        {
            image: Dessert2,
            title: "Rasmalai Fudge",
            price: "400 Rs",
            description: "Rasmalai Fudge is a delicious rich creamy and fudge fusion dessert",
            order: "Order Online"
        },
        {
            image: Dessert3,
            title: "Mango Burfi",
            price: "500 Rs",
            description: "Mango Burfi is a melt-in-the-mouth Indian milk fudge Flavoured with mango",
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
                    <div className="special-card-container1">
                        <div className="image-container1">
                                <img src={image} alt="Special dessert" />
                            </div>
                        <div className="special-card-text1">
                            <div className="special-card-title1">
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
      <div className="special-card1">
        {specialMenusItems}
      </div>
    </div>
  )
}

export default SpecialsCard1