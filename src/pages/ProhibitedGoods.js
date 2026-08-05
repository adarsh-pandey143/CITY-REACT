import React from 'react';
import './Page.css';
import './ProhibitedGoods.css';

const ProhibitedGoods = () => {
  const prohibitedItems = [
    {
      name: 'Explosives and Fireworks',
      icon: '💣',
      description: 'Any explosive materials, fireworks, or pyrotechnic devices'
    },
    {
      name: 'Flammable Liquids and Gases',
      icon: '🔥',
      description: 'Gasoline, propane, butane, and other flammable substances'
    },
    {
      name: 'Toxic and Poisonous Substances',
      icon: '☠️',
      description: 'Chemicals, pesticides, and other toxic materials'
    },
    {
      name: 'Radioactive Materials',
      icon: '☢️',
      description: 'Radioactive substances and materials'
    },
    {
      name: 'Corrosive Materials',
      icon: '⚠️',
      description: 'Acids, alkalis, and other corrosive substances'
    },
    {
      name: 'Weapons and Ammunition',
      icon: '🔫',
      description: 'Firearms, ammunition, and weapons of any kind'
    },
    {
      name: 'Illegal Drugs and Narcotics',
      icon: '🚫',
      description: 'Controlled substances and illegal narcotics'
    },
    {
      name: 'Perishable Food Items',
      icon: '🍖',
      description: 'Food items without proper refrigeration or packaging'
    },
    {
      name: 'Live Animals',
      icon: '🐾',
      description: 'Live animals except with special arrangements'
    },
    {
      name: 'Cash and Currency',
      icon: '💰',
      description: 'Cash, currency, and negotiable instruments'
    },
    {
      name: 'Precious Metals and Stones',
      icon: '💎',
      description: 'Gold, silver, diamonds without proper documentation'
    },
    {
      name: 'Hazardous Waste Materials',
      icon: '🗑️',
      description: 'Hazardous waste and contaminated materials'
    }
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1>Prohibited Goods</h1>
        </div>
      </div>
      <div className="page-content">
        <div className="container">
          <div className="content-section">
            <h2>Items We Cannot Transport</h2>
            <p>
              For the safety of our staff, customers, and the general public, R A LOGISTICS has strict policies 
              regarding prohibited items. Please review the list below before shipping.
            </p>
            
            <div className="prohibited-items-grid">
              {prohibitedItems.map((item, index) => (
                <div key={index} className="prohibited-item-card">
                  <div className="prohibited-icon">{item.icon}</div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            <h3>Restricted Items</h3>
            <p>
              Some items may be transported with proper documentation, special handling, or additional fees. 
              Please contact us before shipping restricted items to ensure compliance with regulations.
            </p>
            <p>
              If you are unsure whether your item can be shipped, please contact our customer service team 
              for clarification. We reserve the right to refuse any shipment that violates our policies or 
              poses a safety risk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProhibitedGoods;

