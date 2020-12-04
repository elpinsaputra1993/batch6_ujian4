import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Menu from "./Component/Menu";
import { getDefaultNormalizer } from "@testing-library/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Content from "./Component/Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.getContent = this.getContent.bind(this);
    this.getData = this.getData.bind(this);
    this.state = {
      data_all: [],
      data_group_by: [],
      data_category: [],
      data_content: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  groupByKey(array, key) {
    return array.reduce((hash, obj) => {
      if (obj[key] === undefined) return hash;
      return Object.assign(hash, {
        [obj[key]]: (hash[obj[key]] || []).concat(obj),
      });
    }, {});
  }

  getData() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        const dt = json;
        const temp = this.groupByKey(json, "category");
        // console.log(Object.keys(temp));
        // console.log(temp);
        // console.log(temp.electronics);
        // console.log(typeof temp);
        // console.log(typeof temp);
        this.setState({
          data_all: dt,
          data_group_by: temp,
          data_content: [],
          data_category: Object.keys(temp),
        });
        // console.log(this.state.data_category);
        // this.category.map((element) => {
        //   console.log(element);
        // });
      })
      .catch((reject) => {
        console.log(reject);
        // alert(reject);
      });
  }

  getContent(text) {
    // alert(text);
    // console.log(Object.key);
    // this.setState({
    //   data_content: this.state.data_all.filter(
    //     (item) => item.category === text
    //   ),
    // });
    // console.log(`before ${this.state.data_content}`);
    fetch(`https://fakestoreapi.com/products/category/` + text)
      .then((res2) => res2.json())
      .then((json2) => {
        console.log(json2);
        this.setState({
          data_content: json2,
        });
      });

    // console.log(`after ${this.state.data_content}`);

    // console.log(this.state.data_all);
  }

  render() {
    return (
      // <Router>
      <div>
        <Header />
        <div className="wrappage">
          {/* End Header Box */}
          {/* Content Box */}
          <div className="relative clearfix full-width">
            {/* Menu & Slide */}
            <div className="clearfix container-web relative">
              <div className=" container relative">
                <div className="row">
                  <div className=" relative menu-slide col-lg-12 clear-padding">
                    {/* Menu */}
                    <div className=" menu-web relative">
                      {
                        <Menu
                          data_menu={this.state.data_category}
                          test={"okkk"}
                          proses={this.getContent}
                        />
                      }
                    </div>
                    {/* Slide */}
                    {<Content img={this.state.data_content} />}
                  </div>

                  {/* End Menu & Slide */}
                </div>
              </div>
            </div>
            {/* testst */}
            {/* <div>
              {this.state.data_content.map((elm, idx) => {
                return <h1>{elm.title}</h1>;
                console.log(elm.image);
              })}
            </div> */}
            {/* testst */}

            {/* Footer Box */}
            <Footer />
          </div>
          {/* End Footer Box */}
        </div>
      </div>
      // </Router>
    );
  }
}
export default App;
