import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div>
        <div className=" slide-box-home slide-v2 relative">
          <div className=" slide-home owl-carousel owl-theme">
            {this.props.img.map((elm, idx) => {
              return (
                <div className="item">
                  <img
                    src={elm.image}
                    alt={elm.title}
                    style={{ width: "600px", height: "590px" }}
                  />
                  {/* <img
                src="https://placeimg.com/600/590/nature"
                alt="Banner Home V2"
              /> */}
                  {/* <img src="img/banner_v2.png" alt="Banner Home V2" /> */}
                </div>
              );
            })}
          </div>
        </div>
        <div className=" box-banner-small-v2 box-banner-small">
          <div className="relative effect-layla zoom-image-hover">
            <img src="https://placeimg.com/300/295/arch" alt />
            {/* <img src="img/banner_small_home_v2__1-min.png" alt /> */}
            <a href="#" />
          </div>
          <div className="relative effect-layla zoom-image-hover">
            <img src="https://placeimg.com/300/295/tech" alt />
            {/* <img src="img/banner_small_v2_1-min.png" alt /> */}
            <a href="#" />
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
// {this.props.img.map((elm, idx) => {
//     return (
//       <div className="item">
//         <img src={elm.image} alt={elm.title} />
//         {/* <img src="img/banner_v2.png" alt="Banner Home V2" /> */}
//       </div>
//     );
//   })}
