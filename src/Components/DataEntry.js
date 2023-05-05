import React, { useEffect, useState } from 'react'
import "../assets/css/form.css"
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Navbar from './Navbar';

function DataEntry() {

  const [Title, setTitle] = useState("");
  const [Descritpion, setDescritpion] = useState("");
  const [Tag, setTag] = useState("");
  const [ImageUrl, setImageUrl] = useState("");
  const [ShowCard, setShowCard] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  useEffect(() => {

    console.log("efect")

  })
  const deleteForm = () => {
    setSelectedFile(null)
  }
  const checkField = () => {

    return Title != "" && Descritpion != "" && Tag != "" && selectedFile != null
  }
  const submitForm = () => {


    // 'file' comes from the Blob or File API
    if (checkField()) {
      const storageRef = ref(storage, "images/" + selectedFile.name);
      uploadBytes(storageRef, selectedFile).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        getDownloadURL(storageRef).then((url) => {
          console.log("Download URL:", url);
          setImageUrl(url);
          // Use the URL to display or share the image
        }).catch((error) => {
          console.error("Error getting download URL:", error);
        });
      });
    } else {
      alert("fill all fields")
    }

  }
  function handleFileInputChange(event) {
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    setSelectedFile(event.target.files[0]);
    console.log(selectedFile);

    setShowCard(true)
  }
  return (
    <>
      <Navbar />
      <div class="formbold-main-wrapper">

        <div class="formbold-form-wrapper">
          {/* <form action="https://formbold.com/s/FORM_ID" method="POST"> */}
          <div class="formbold-mb-5">
            <label for="email" class="formbold-form-label">
              Title
            </label>
            <input
              type="Title"
              name="Title"
              id="Title"
              placeholder="Enter the Title"
              class="formbold-form-input"
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div class="formbold-mb-5">
            <label for="Description" class="formbold-form-label">
              Description:
            </label>
            <input
              type="text"
              name="Description"
              id="Description"
              placeholder="Enter the Description"
              class="formbold-form-input"
              onChange={e => setDescritpion(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="Description" class="formbold-form-label">
              Tag:
            </label>
            <select class="form-control" value={Tag} onChange={e => setTag(e.target.value)} id="exampleFormControlSelect1">
              <option value={null}>select a tag</option>
              {["Tablets", "Himalayan", "Kits", "Boosters"].map((el) => (
                <option>{el}</option>
              ))}
              <option value="new Tag">add a new Tag</option>
            </select>
          </div>
          < div class="formbold-mb-5">
            <label for="New Tag" class="formbold-form-label">
              Description:
            </label>
            <input
              type="text"
              name="Description"
              id="Description"
              placeholder="Enter the tag"
              class="formbold-form-input"
              onChange={e => setDescritpion(e.target.value)}
            />

            <div class="mb-6 pt-4">
              <label class="formbold-form-label formbold-form-label-2">
                Upload File
              </label>

              <div class="formbold-mb-5 formbold-file-input">
                <label for="file">
                  <input type="file" name="file" id="file" onChange={e => handleFileInputChange(e)} />
                  <div>
                    <span class="formbold-drop-file"> Drop files here </span>
                    <span class="formbold-or"> Or </span>
                    <span class="formbold-browse"> Browse </span>
                  </div>
                </label>
              </div>


              <div class="formbold-file-list formbold-mb-5">
                <div class="formbold-file-item">
                  <span class="formbold-file-name"> {selectedFile ? selectedFile.name : "Not yet Uploded"} </span>
                  {selectedFile ? <button onClick={e => deleteForm()}>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button> : ""}

                </div>

              </div>
            </div>

            <div>
              <button onClick={e => submitForm()} class="formbold-btn w-full">Send File</button>
            </div>
            {/* </form> */}
          </div>
        </div >
      </div>
    </>
  )
}

export default DataEntry