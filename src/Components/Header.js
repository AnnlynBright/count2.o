import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import ImageGallery from 'react-image-gallery';



class Header extends Component {

  constructor() {
    super();
    this.state = {
      images: [],
    };
  }


  handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    if (imageFile) {
      const imageURL = window.URL ? window.URL.createObjectURL(imageFile) : null;
      if (imageURL) {
        // You can perform further actions with the selected image URL here
        console.log('Selected image URL:', imageURL);
      } else {
        console.log('Browser does not support URL.createObjectURL()');
      }
    }
  };

  // Function to trigger the file input when the button is clicked
  handleUploadButtonClick = () => {
    this.fileInputRef.current.click();
  };

  
 
  render() {
    if (!this.props.data) return null;
    const { images } = this.state;

    const project = this.props.data.project;
    
    
    
    return (
      
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">Count People</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>Upload your image </h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <button  className="button btn project-btn" onChange={this.handleImageChange}>
                  
                  <i className="fa fa-book"></i>Upload
                </button>

                <button className="button btn project-btn"> <input 
                type="file" accept="image/*" 
                onChange={this.handleImageChange} />
        {images.length > 0 && <ImageGallery items={images} />}  <i className="fa fa-book"></i>Upload</button>

        <form>
          <button type="button" onClick={this.handleImageChange}>
            Select Image
          
          <input
            type="file"
            accept="image/*"
            ref={this.fileInputRef}
            style={{ display: 'none' }}
            onChange={this.handleImageChange}
          />
          </button>
        </form>
      
                
              </ul>
            </Fade>
          </div>
        </div>
       

        
      </header>
    );
  };
}

export default Header;
