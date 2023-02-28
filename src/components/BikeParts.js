import React from "react";
import "./BikeParts.css";
import bounce1 from "../components/images/p1.png";
import bounce2 from "../components/images/p2.png";
import bounce3 from "../components/images/p3.png";
import bounce4 from "../components/images/p4.png";
import bounce5 from "../components/images/p8.png";
import bounce6 from "../components/images/p6.png";
import bounce7 from "../components/images/p7.png";
import bounce8 from "../components/images/p9.png";
import bounce9 from "../components/images/p10.png";

import { useTheme } from "./themeContext";

export default function BikeParts({ children }) {
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
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
              </div>

              <div class="product_description">
              Brake Disc Caliper
                <div class="products_description_buttons">
                  <h3> ₹4,650</h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>Add to Cart</small>
                  </button>
                </div>
              </div>
            </div>
          
            <div class="product_card">
              <div class="product_image">
                <img src={bounce2} alt="tree" />
                <br>
                </br>
              </div>
              <div>
                <br>
                </br>
              </div>
              <div class="product_description">
              
              Brake Disc Plate
               
                <div class="products_description_buttons">
                  <h3>₹2,850</h3>
                 
                  <button type="button" class="btn btn-primary  ">
                    <small>Add to Cart</small>
                  </button>
                </div>
              </div>
            </div>
            <div class="product_card">
              <div class="product_image">
              <br>
                </br>
              
                <img src={bounce3} alt="tree" />
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
               
                

              </div>
              

              <div class="product_description">
              Clutch Plates
                <div class="products_description_buttons">
               
                  <h3>₹1,350</h3>
                  <button type="button" class="btn btn-primary  ">
                    <small>Add to Cart</small>
                  </button>
                </div>
              </div>
            </div>
            <div class="product_card">
              <div class="product_image">
                <img src={bounce4} alt="tree" />
                <br>
                </br>
                
              </div>
              <div class="product_description">
              Disc  Brake  Master 
              Cylinder  Assy
             

                <div class="products_description_buttons">
                
                  <h3>₹829</h3>
                 
               

                  <button type="button" class="btn btn-primary  ">
                    <small>Add to Cart</small>
                  </button>
                </div>
              </div>
            </div>
            <div class="product_card">
              <div class="product_image">
              <br>
                </br>
                <br>
                </br>
               
                <img src={bounce5} alt="tree" />
               
                <br>
                </br>
                <br>
                </br>
                <br/>
                
                
              </div>

              <div class="product_description">
               Clutch Shoe
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
              One Way Clutch
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
              Clutch Assembly
                <div class="products_description_buttons">
                  <h3> ₹1,849 </h3>
                  
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
                Break Drum
                <div class="products_description_buttons">
                  <h3> ₹1,390 </h3>

                  <button type="button" class="btn btn-primary  ">
                    <small>Add to Cart</small>
                  </button>
                </div>
              </div>
            </div>


            <div class="product_card">
              <div class="product_image">
                <img src={bounce9} alt="tree" />
              </div>

              <div class="product_description">
               Clutch Pulley
                <div class="products_description_buttons">
                  <h3> ₹1,384 </h3>

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
