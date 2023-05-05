import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import "../assets/css/content.css"
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
function ViewProduct(props) {
  // const [data, setdata] = useState({})
  const [ShowData, setShowData] = useState({})
  const { id, tag } = useParams()
  const getData = async (docRef) => {
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const data = docSnap.data()
      setShowData(data[id])
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  useEffect(() => {
    const docRef = doc(db, "products", "Himalayan");
    const data = getData(docRef)
    console.log(data)
    console.log("hello");
  }, [])

  return (
    <header>
      <section>
        <div id="containerProduct">
          <div id="containerD">
            <div id="imageSection">
              <img id="imgDetails" src={ShowData.image} />
            </div>
            <div id="productDetails">
              <h1>{ShowData.title}</h1>
              <h4>{tag}</h4>
              <div id="details">
                <h3>Rs { }</h3>
                <h3>Description</h3>
                <p>{ShowData.description}</p>
              </div>

              <div id="button"><button id="addtocart">Add to Cart</button></div>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

export default ViewProduct