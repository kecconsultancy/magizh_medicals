import React, { useState } from 'react';
import MenusCard from './MenusCard';
const image1 = require('../images/1.webp');
const image2 = require('../images/2.webp');
const image3 = require('../images/3.webp');
const image4 = require('../images/4.webp');
const image5 = require('../images/5.webp');
const image6 = require('../images/6.webp');
const image7 = require('../images/7.webp');
const image8 = require('../images/8.webp');
const image9 = require('../images/9.webp');
const image10 = require('../images/10.webp');
const image11 = require('../images/11.webp');
const image12 = require('../images/12.webp');
const image13 = require('../images/13.webp');
const image14 = require('../images/14.webp');
const image15 = require('../images/15.webp');
const image16 = require('../images/16.webp');
const image17 = require('../images/17.webp');
const image18 = require('../images/18.webp');
const image19 = require('../images/19.webp');
const image20 = require('../images/20.webp');
const image21 = require('../images/21.webp');
const image22 = require('../images/22.webp');
const image23 = require('../images/23.webp');
const image24 = require('../images/24.webp');
const image25 = require('../images/25.webp');
const image26 = require('../images/26.webp');
const image27 = require('../images/27.webp');
const image28 = require('../images/28.webp');
const image29 = require('../images/29.webp');
const image30 = require('../images/30.webp');
const image31 = require('../images/31.webp');
const image32 = require('../images/32.avif');

function ProductSection() {

  // https://www.1mg.com/categories/fitness-supplements-5
  const [ItemData4, setItemData4] = useState([
    {
      image: image24,
      title: 'Sugar Free Gold Low Calorie Sweetener',
      description:
        'Ideal substitute as one pellet, in sweetness, is equivalent to a teaspoon of sugar  ',
    },
    {
      image: image25,
      title: 'Sensodyne Fresh Mint Sensitive Toothpaste',
      description:
        'Sensodyne toothpaste for daily protection of teeth against sensitivity ',
    },
    {
      image: image26,
      title: 'Navratna Cool Ayurvedic Oil',
      description:
        'Multi-benefit cooling oil that is enriched with herbal extracts  ',
    },
    {
      image: image27,
      title:
        'Tata 1mg Wrist Support Universal, Wrist Brace with Thumb Support for Optimal Support and Compression',
      description: 'A universal-sized wrist brace with a thumb opening ',
    },
    {
      image: image28,
      title: 'Tata 1mg Biotin Gummies for Healthy and Happy Hair',
      description:
        'Free from gluten, milk, soy, nut, gelatin, preservatives and artificial flavour  ',
    },
    {
      image: image29,
      title: 'Glucon-D Instant Energy Health Drink Tangy Orange',
      description: 'Restores energy levels in the body ',
    },
    {
      image: image30,
      title: 'Zingavita Omega 3 Fish Oil 1000mg Softgel',
      description: 'Enhances cardiovascular health ',
    },
    {
      image: image31,
      title: 'Tata 1mg Multivitamin Supreme',
      description:
        'Zinc, Calcium and Vitamin D Capsule for Immunity, Energy, Overall Health',
    },
  ]);
  const [ItemData3, setItemData3] = useState([
    {
      image: image16,
      title:
        'Tata 1mg Probiotics 30 Billion CFUs+ Capsule with Prebiotic Fibre',
      description:
        'Contains 30 billion CFU plus 14 live probiotic strains and prebiotic fibre  ',
    },
    {
      image: image17,
      title:
        'Tata 1mg Pain Relief Spray for Lower Back Pain, Joint Pain, Neck Pain & Sprain',
      description: 'Provides quick and long-lasting relief from pain ',
    },
    {
      image: image18,
      title:
        'Tata 1mg Medicated First Aid Dressing - Washproof, Bandages Pack of 20',
      description: 'Advanced protection for cuts and scrapes ',
    },
    {
      image: image19,
      title: 'Tata 1mg Adult Diaper Tape Style Medium',
      description: 'Anti-bacterial core helps prevent rashes ',
    },
    {
      image: image20,
      title: 'Tata 1mg Vitamin D3 Capsule',
      description: 'Helps in better calcium absorption in the body  ',
    },
    {
      image: image21,
      title:
        'Tata 1mg Elderly Care Combo for Eye & Heart Health, Memory Support, Immunity Wellness, Cholestrol & Blood Pressure Management',
      description:
        'Information about Tata 1mg Elderly Care Combo for Eye & Heart Health, Memory Support, Immunity Wellness, Cholestrol & Blood Pressure Management ',
    },
    {
      image: image22,
      title:
        'Tata 1mg Multivitamin Gummies with Zinc, Magnesium and Folic Acid for Immunity & Energy',
      description:
        'Antioxidant properties help neutralize free radicals and promote growth ',
    },
    {
      image: image23,
      title: 'Protinex Health and Nutritional Drink Rich Chocolate',
      description: 'High in protein and contains ten immunonutrients  ',
    },
  ]);
  const [ItemData2, setItemData2] = useState([
    {
      image: image9,
      title: 'Himalaya Liv. 52 DS Tablet',
      description: 'This tablet contains natural ingredients ',
    },
    {
      image: image10,
      title: 'Himalaya Wellness Pure Herbs Ashvagandha Tablet',
      description: 'Builds strength and immunity of the body  ',
    },
    {
      image: image11,
      title: 'Himalaya Tentex Royal Capsule',
      description: 'Improves strength and stamina ',
    },
    {
      image: image12,
      title: 'Himalaya Liv. 52 Tablet',
      description: 'Helps to protect the liver against hepatotoxins ',
    },
    {
      image: image13,
      title: 'Himalaya Wellness Pure Herbs Gokshura Tablet',
      description: 'May help to improve vigour and vitality  ',
    },
    {
      image: image14,
      title: 'Himalaya Septilin Tablet',
      description:
        'Relieves allergic disorders and alleviates respiratory conditions ',
    },
    {
      image: image15,
      title: 'Himalaya Liv.52 Syrup',
      description:
        'It protects the liver from chemically-induced hepatotoxicity  ',
    },
  ]);
  const [ItemsData, setItemsData] = useState([
    {
      image: image1,
      title: 'Tata 1mg Apple Cider Vinegar Probiotic Plus',
      description: 'Raw Unfiltered Unpasteurized with The Mother',
    },
    {
      image: image2,
      title: 'Tata 1mg Salmon Omega 3 Fish Oil Capsule',
      description:
        'It promotes heart health by decreasing triglycerides and increasing levels of good cholesterol',
    },
    {
      image: image3,
      title:
        'Tata 1mg Womens Multivitamin Veg Tablet with Zinc, Vitamin C, Calcium, Vitamin D and Iron, Support Immunity, Bones & Overall Health',
      description: 'Supports bone, skin and eye health ',
    },
    {
      image: image4,
      title: 'Tata 1mg Apple Cider Vinegar Probiotic Plus',
      description:
        'Tata 1mg Apple Cider Vinegar Probiotic Plus - Raw Unfiltered Unpasteurized with The Mother ',
    },
    {
      image: image5,
      title:
        'Tata 1mg Noni Juice Plus with Rich Antioxidant, Supports Joint Health and Immunity',
      description: 'Helps in improving the immunity level ',
    },
    {
      image: image6,
      title:
        'Tata 1mg Multivitamin Supreme, Zinc, Calcium and Vitamin D Capsule for Immunity, Energy, Overall Health',
      description:
        'A nutritional health supplement that helps to build your immunity ',
    },
    {
      image: image7,
      title:
        'Zingavita Sharp Eye Multivitamin Gummies for Kids (with Essential Eye Vitamins) Strawberry Mix',
      description: 'Supports eye health',
    },
    {
      image: image8,
      title: 'Lubistar 1% Eye Drop',
      description: 'burning, irritation, itching and redness ',
    },
  ]);
  // const [Data, SetDate] = useState([{
  //   tag: "Tablets",
  //   data: ItemsData,

  // },
  // {
  //   tag: "Himalayan",
  //   data: ItemData2,
  //   // active: true
  // },
  // {
  //   tag: "Kits",
  //   data: ItemData3
  // },
  // {
  //   tag: "Boosters",
  //   data: ItemData4
  // },
  // ])
  const [Tags, setTag] = useState(["Tablets", "Himalayan", "Kits", "Boosters"]);
  const [DataShow, setDataShow] = useState(ItemData3)
  const changeData = (tag) => {
    console.log("change");
    console.log(tag);
  }
  return (
    <section id='menu' className='bg-light'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 intro-text'>
            <h1>Explore Our Medicines</h1>
            <p>
              Medicine is the restoration of discordant elements, sickness is
              the discord of the elements infused into the living body.
            </p>
            <div id="search">

              <i className="ri-search-line search"></i>

              <input
                type="text"
                id="input"
                name="name"
                placeholder="Search"
              />

            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <ul
          className='nav nav-pills mb-4 justify-content-center'

        // role='tablist'
        >
          {
            Tags.map((el) => {
              return <li key={el} className='nav-item' role='presentation'>
                <button
                  className={`nav-link `}
                  // id={`pills-${el.tag}`}
                  type='button'
                  role='tab'
                  onClick={changeData(el)}
                >
                  {el}
                </button>
              </li>
            })
          }
        </ul>

        <div className='tab-content' >
          {/* {
            Data.map((el) => {
              return <div
                className={`tab-pane fade show ${el.isActive ? 'active' : ''}`}
                id={`pills-${el.tag}`}
                role='tabpanel'
                aria-labelledby={`pills-${el.tag}`}

              >
                <div className='row gy-4'>
                  {el.data.map((el) => (
                    <MenusCard
                      imagePath={el.image}
                      title={el.title}
                      description={el.description}
                    ></MenusCard>
                  ))}
                </div>
              </div>
            })
          } */}
          <div
            className='tab-pane fade show active'
            id='pills-breakfast'
            role='tabpanel'
            aria-labelledby='pills-all-tab'
            tabindex='0'
          >
            <div className='row gy-4'>
              {DataShow.map((el) => (
                <MenusCard
                  imagePath={el.image}
                  title={el.title}
                  description={el.description}
                ></MenusCard>
              ))}
            </div>
          </div>



        </div>
      </div>
    </section >
  );
}

export default ProductSection;
