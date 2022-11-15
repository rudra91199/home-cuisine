import React from 'react';
import './Offer.css'
import freshfood from '../../../images/freshFood.jpg'
import ecoProducts from '../../../images/ecoProducts.jpg'
import healthyDesert from '../../../images/healthyDesert.jpeg'

const Offer = () => {
    return (
        <div className='offers'>
            <h2 className='offer-header'>What I can Offer?</h2>
            <div className='offer-style'>
                <span></span>
                <p>from my heart</p>
                <span></span>
            </div>
            <div className='offered'>
                <div className='offered-quality'>

                    <div className='offered-img'>
                        <img src={freshfood} alt="" />
                    </div>
                    <h3 className='title'>Always <span className='span-title'>Fresh</span></h3>
                    <p>Our aim is to offer simple, fresh,good food. Good fresh food with many vegetables along with love and caring for others.</p>
                </div>
                <div className='offered-quality'>
                    <div className='offered-img'>
                        <img src={ecoProducts} alt="" />
                    </div>
                    <h3 className='title'>Eco <span className='span-title'>Products</span></h3>
                    <p>Our bodies need real, fresh food to maintain health. Packaged food creates dis-ease. There’s no nourishment in it.</p>
                </div>
                <div className='offered-quality'>
                    <div className='offered-img'>
                        <img src={healthyDesert} alt="" />
                    </div>
                    <h3 className='title'>Healthy <span className='span-title'>Dessert</span></h3>
                    <p>You can’t buy happiness, but you can buy dessert.  Always save room for dessert. There is nothing dessert can’t solve.</p>
                </div>
            </div>
        </div>
    );
};

export default Offer;