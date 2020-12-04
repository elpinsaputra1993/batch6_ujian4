import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_icon: [
        "icon_hot",
        "icon_food",
        "icon_mobile",
        "icon_electric",
        "icon_computer",
        "icon_fashion",
        "icon_health",
        "icon_mother",
        "icon_book",
        "icon_tablet",
        "icon_sport",
        "icon_auto",
        "icon_voucher",
      ],
    };
  }

  render() {
    return (
      <ul>
        {this.props.data_menu.map((elm, idx) => {
          //   console.log(this.state.data_icon[idx]);
          let img = `img/${this.state.data_icon[idx]}.png`;
          //   document.getElementById(`img${idx}`).src = "hackanm.gif";
          return (
            <li>
              <a href="#" onClick={(e) => this.props.proses(elm)}>
                <img src="img/icon_hot.png" alt="Icon Hot Deals" />
                <p>{elm}</p>
              </a>
            </li>
          );
        })}

        {/* <li>
          <a href="#">
            <img src="img/icon_hot.png" alt="Icon Hot Deals" />
            <p>Hot Deals</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/icon_food.png" alt="Icon Food" />
            <p>Food</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/icon_mobile.png" alt="Icon Mobile & Tablet" />
            <p>Mobile &amp; Tablet</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/icon_electric.png" alt="Icon Electric Appliances" />
            <p>Electric Appliances</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="img/icon_computer.png"
              alt="Icon Electronics & Technology"
            />
            <p>Electronics &amp; Technology</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/icon_fashion.png" alt="Icon Fashion" />
            <p>Fashion</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/icon_health.png" alt="Icon Health & Beauty" />
            <p>Health &amp; Beauty</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/icon_mother.png" alt="Icon Mother & Baby" />
            <p>Mother &amp; Baby</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/icon_book.png" alt="Icon Books & Stationery" />
            <p>Books &amp; Stationery</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/icon_tablet.png" alt="Icon Home & Life" />
            <p>Home &amp; Life</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/icon_sport.png" alt="Icon Sports & Outdoors" />
            <p>Sports &amp; Outdoors</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/icon_auto.png" alt="Icon Auto & Moto" />
            <p>Auto &amp; Moto</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/icon_voucher.png" alt="Icon Voucher Service" />
            <p>Voucher Service</p>
          </a>
        </li> */}
      </ul>
    );
  }
}

export default Menu;
