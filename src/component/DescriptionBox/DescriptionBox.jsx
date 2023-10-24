import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
     <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Review (122)</div>
     </div>
     <div className="descriptionbox-description">
        <p>
        E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet. These business transactions occur either as business-to-business (B2B), business-to-consumer (B2C), consumer-to-consumer or consumer-to-business.
        E-commerce is powered by the internet. Customers access an online store to browse through and place orders for products or services via their own devices.
        </p>
        <p>
        Business-to-business (B2B) e-commerce refers to the electronic exchange of products, services or information between businesses rather than between businesses and consumers.
        Business-to-consumer (B2C) is the retail part of e-commerce on the internet. It is when businesses sell products, services or information directly to consumers.
        </p>
     </div>
    </div>
  )
}

export default DescriptionBox