import React from "react";
import "./product.css";
import bounce1 from "../components/images/bike1.png";
import bounce2 from "../components/images/bike2.png";
import bounce3 from "../components/images/bike3.png";
import bounce4 from "../components/images/bike4.png";
import bounce5 from "../components/images/bike5.png";
import bounce6 from "../components/images/bike6.png";
import bounce7 from "../components/images/bike7.png";
import bounce8 from "../components/images/bike8.png";

import { useTheme } from "./themeContext";

export default function Product({ children }) {
  const theme = useTheme();

  return (
    <div>
      <product>
        <div
          className={theme.theme === true ? "product_dark" : "product_white"}
        >
          <div class="product_grid product_main-content ">
            <div class="product_card">
              <div class="product_image">
                <img src={bounce1} alt="tree" />
              </div>

              <div class="product_description">
                Hero Glamour XTEC Drum Booking for Ex-showroom Price (Candy
                Blazing Red/Blue)
                <div class="products_description_buttons">
                  <h3>₹83,388</h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>Add to Cart</small>
                  </button>
                </div>
              </div>
            </div>

            <div class="product_card">
              <div class="product_image">
                <img src={bounce2} alt="tree" />
              </div>

              <div class="product_description">
                Hero Xpulse 200 4V Booking for Ex-showroom Price (Sports
                Red,Blue,Black)
                <br />
                <div class="products_description_buttons">
                  <h3>₹1,37,496</h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>Add to Cart</small>
                  </button>
                </div>
              </div>
            </div>
            <div class="product_card">
              <div class="product_image">
                <img src={bounce3} alt="tree" />
              </div>

              <div class="product_description">
                Hero Xtreme 160R Booking for Ex-showroom Price (Matt Axis
                Grey)/(Matt Axis Red)
                <div class="products_description_buttons">
                  <h3>₹1,23,496</h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>Add to Cart</small>
                  </button>
                </div>
              </div>
            </div>
            <div class="product_card">
              <div class="product_image">
                <img src={bounce4} alt="tree" />
              </div>

              <div class="product_description">
                Hero HF Deluxe (Self Start) Booking for Ex-showroom Price (Candy
                Blazing Red/Black/Blue)
                <div class="products_description_buttons">
                  <h3>₹65,488</h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>Add to Cart</small>
                  </button>
                </div>
              </div>
            </div>
            <div class="product_card">
              <div class="product_image">
                <img src={bounce5} alt="tree" />
              </div>

              <div class="product_description">
                Hero Pleasure+ VX Drum Booking for Ex-showroom Price (Matte
                Vernier Grey)
                <div class="products_description_buttons">
                  <h3> ₹70,508 </h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>Add to Cart</small>
                  </button>
                </div>
              </div>
            </div>

            <div class="product_card">
              <div class="product_image">
                <img src={bounce6} alt="tree" />
              </div>

              <div class="product_description">
                Hero Pleasure+ VX Drum Booking for Ex-showroom Price (Pole star
                Blue)
                <div class="products_description_buttons">
                  <h3> ₹70,508 </h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>Add to Cart</small>
                  </button>
                </div>
              </div>
            </div>

            <div class="product_card">
              <div class="product_image">
                <img src={bounce7} alt="tree" />
              </div>

              <div class="product_description">
                Hero Destini 125 Drum Booking for Ex-showroom Price (Nexus Blue)
                <div class="products_description_buttons">
                  <h3> ₹83,568 </h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>Add to Cart</small>
                  </button>
                </div>
              </div>
            </div>

            <div class="product_card">
              <div class="product_image">
                <img src={bounce8} alt="tree" />
              </div>

              <div class="product_description">
                Hero Maestro Edge 125 Drum Booking for Ex-showroom Price (Matte
                )
                <div class="products_description_buttons">
                  <h3> ₹77,896 </h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>Add to Cart</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </product>
    </div>
  );
}
