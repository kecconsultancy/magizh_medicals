import React, { useEffect, useState } from 'react'
import { image } from '../images'
import { storage } from '../firebase'

// const img = require()

function MenusCard(props) {
  const [Data, setData] = useState([])
  useEffect(() => {
    // const storageRef = storage.ref();
    const temp = {
      imagePath: props.imagePath,
      title: props.title,
      description: props.description
    }

    try {
      const imageData = props.imagePath.split("/")[2].split(".")[0]

      temp.image = image
      // console.log(temp.image[`image${image}`]);
      // console.log("temp", temp);
    } catch (error) {
      // console.log("err");
    }
    setData(temp)
  }, [])


  // const [Image, setImage] = useState("../images/about_new.png")
  // useEffect(() => {
  //   console.log("imagePath", props.imagePath);
  //   setImage(require(props.imagePath))


  // }, [])

  return (
    <div class="col-lg-3 col-sm-6" onClick={e => props.onClick(e)}>

      <div class="menu-item bg-white shadow-on-hover">
        <img src={props.imagePath
        } alt="" />
        <div class="menu-item-content p-4">
          <div>
            {/* <span>Rated(5.4)</span>
            <span class="stars">
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-half-fill"></i>
            </span> */}
          </div>
          <h5 class="mt-1 mb-2">
            <a href="#">{props.title}</a>
          </h5>
          <p class="small">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MenusCard