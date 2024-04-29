import React, { useState } from 'react';
import './Menu_Menu.css';
import pinoyMenuData from '../../utils/pinoyMenu.json';

const HomeMenu = () => {
  const [menuItems, setMenuItems] = useState(pinoyMenuData);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const renderCategory = (categoryName) => {
    const category = menuItems.find(category => category.name === categoryName);
    return (
      category && (
        <div className="menuCategory" key={categoryName}>
          <div className="categoryTitle">{category.name}</div>
          <div className="menuCards">
            {category.food.map((item, index) => (
              <div key={index} className="menuCard">
                <span className="itemName">{item.name}</span>
                <span className="itemPrice">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      )
    );
  };

  const renderCategoryButtons = () => (
    <>
      <button className="categoryButton" onClick={() => setSelectedCategory(null)}>
        All
      </button>
      {menuItems.map((category, index) => (
        <button key={index} className="categoryButton" onClick={() => setSelectedCategory(category.name)}>
          {category.name}
        </button>
      ))}
    </>
  );

  return (
    <section className='flexCenter'>

        <div className='menu-innerWidth'>
          {/* 
          <div className='flexCenter primaryText' style={{ marginBottom: '30px', marginTop: '50px' }}>
            Menu
          </div>
          */}
          <div className="categoryButtonsContainer" style={{ marginBottom: '30px', marginTop: '50px'  }}>
            {renderCategoryButtons()}
          </div>      
        </div>
        <div className='menu-innerWidth menuContainer' style={{ marginBottom: '50px', padding: '50px', border: '1px solid #ccc' }}>
          <div className="">
            {selectedCategory === null ? menuItems.map(category => renderCategory(category.name)) : renderCategory(selectedCategory)}
          </div>
        </div>        

    </section>
  );
};

export default HomeMenu;
