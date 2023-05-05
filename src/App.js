import { Route, Routes } from 'react-router-dom';
import LoginPage from "./Components/LoginPage";
import HomeScreen from "./Screen/HomeScreen";
import ProductScreen from './Screen/ProductScreen';
import { useEffect } from 'react';
import { storage } from './firebase';
import { getDownloadURL, ref } from 'firebase/storage';
import ViewProduct from './Components/ViewProduct';
import ProductSection from './Components/ProductSection';
import DataEntry from './Components/DataEntry';
function App() {
  useEffect(() => {
    const imageRef = ref(storage, "images/dashborad-4.png")
    // const imageRef = storage.child('images/dashborad-4.png');
    getDownloadURL(imageRef).then((url) => {
      console.log('Download URL:', url);
    })
      .catch((error) => {
        console.log('Error getting download URL:', error);
      });



  }, [])

  return <>

    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/dataEntry" element={<DataEntry />} />
      <Route path="/products" element={<ProductScreen />} >

        <Route path="" element={<ProductSection />} ></Route>
        <Route path="view/:tag/:id" element={<ViewProduct />} ></Route>

      </Route>
      {/* <Route path="/viewproduct" element={<ViewProduct />} /> */}
    </Routes>
  </>
}

export default App;
