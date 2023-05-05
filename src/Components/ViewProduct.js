import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import "../assets/css/content.css"
function ViewProduct(props) {
  const { id } = useParams()
  useEffect(() => {
    console.log(id)


  }, [])

  return (
    <header>
      <section>
        <div id="containerProduct">
          <div id="containerD">
            <div id="imageSection">
              <img id="imgDetails" src="./assets/images/logo-thumb.png" />
            </div>
            <div id="productDetails">
              <h1>' .$row["name"].'</h1>
              <h4>' .$row["brand"].'</h4>
              <div id="details">
                <h3>Rs ' .$row["price"].'</h3>
                <h3>Description</h3>
                <p>' .$row["description"].'</p>
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