import React from 'react';
import './Guarantees.css';

import delivery from '../assets/images/delivery.svg';
import moneyBack from '../assets/images/moneyBack.svg';
import customerService from '../assets/images/customerService.svg';


const Guarantees = () => {
  const items = [
    {
      icon: delivery,
      title: 'FREE AND FAST DELIVERY',
      text: 'Free delivery for all orders over $140',
      alt: 'Delivery'
    },
    {
      icon: customerService,
      title: '24/7 CUSTOMER SERVICE',
      text: 'Friendly 24/7 customer support',
      alt: 'Customer service'
    },
    {
      icon: moneyBack,
      title: 'MONEY BACK GUARANTEE',
      text: 'We return money within 30 days',
      alt: 'Money back guarantee'
    }
  ];

  return (
    <section className="guarantees">
      <div className="guaranteesInner">
        {items.map((item) => (
          <div className="guaranteeCard" key={item.title}>
            <div className="guaranteeIconOuter">
              <div className="guaranteeIconInner">
                <img className="guaranteeIcon" src={item.icon} alt={item.alt} />
              </div>
            </div>

            <h3 className="guaranteeTitle">{item.title}</h3>
            <p className="guaranteeText">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Guarantees;
