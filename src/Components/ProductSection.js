import React, { useEffect, useState } from 'react';
import MenusCard from './MenusCard';
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase';
import { image } from '../images';
import { useNavigate } from 'react-router-dom';


function ProductSection() {
  const navigate = useNavigate();
  const [MasterCopy, setMasterCopy] = useState([])
  const [Tags, setTag] = useState([]);
  const [DataShow, setDataShow] = useState([])
  const [ShowData, setShowData] = useState(false)
  useEffect(() => {
    // console.log(image);
    if (MasterCopy.length == 0) {
      getData()
    }
    // console.log(MasterCopy, Tags);
  })
  const GetDataFromMaster = (el) => {
    // console.log(obj);

    const Data = []
    // console.log(el.data);
    for (const key of Object.keys(el.data)) {
      // console.log(el.data[key]);
      const tempData = el.data[key];
      tempData.key = key

      // tempData.img = "sd"
      Data.push(tempData);
    }
    // console.log(Data);
    return Data
  }

  const getData = async () => {

    const ref = collection(db, "products");

    const temp = await getDocs(ref).then(snap => {

      snap?.forEach((el) => {

        const mas = MasterCopy
        const tag = Tags
        const data = el?.data();
        const id = el.id;


        mas.push({ id: el.id, data })
        tag.push(id)
        setMasterCopy(mas)
        setTag(tag)
      });

      // console.log("snap");
      setShowData(true)
      const data = GetDataFromMaster(MasterCopy[0])
      // console.log("sdsd", data);
      setDataShow(data);

      // console.log("snap2", DataShow);
    });


  }



  const changeData = (tag) => {
    const TempData = MasterCopy.filter(el => el.id == tag)[0]
    const data = GetDataFromMaster(TempData)
    console.log(data);
    setDataShow(data);
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


        >
          {
            Tags.map((el) => {
              return <li key={el} className='nav-item' role='presentation'>
                <button
                  className={`nav-link `}
                  id={`pills-${el.tag}`}
                  type='button'
                  role='tab'
                  onClick={e => changeData(el)}
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
          // tabindex='0'
          >{
              <div className='row gy-4' >
                {DataShow.map((el) => (
                  <MenusCard
                    key={el.title}
                    imagePath={el.image}
                    // imagePath={el.image}
                    title={el.title}
                    description={el.description}
                    onClick={e => navigate(`/products/view/${el.tag}/${el.key}`)}
                  ></MenusCard>
                ))}
              </div>
            }
          </div>



        </div>
      </div>
    </section >
  );
}

export default ProductSection;
