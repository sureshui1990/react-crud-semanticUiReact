import _ from "lodash";
import {honerMobile,sandwichMaker,sportShoe,inverterAc,cricketBat} from '../assets/img/base64/default-images';

// Default data - API data section
// export default function(state = [
//   {productname:"Honor mobile", description:"The Honor 9 Lite boasts a double-sided 2.5D glass. Watch movies, play games - high definition on the 14.35 cm (5.65'') FHD+ display", category:'Electronics', name: "Honor 9 lite",
//   imgsrc: 'https://rukminim1.flixcart.com/image/832/832/jcnovbk0/mobile/j/c/s/honor-9-lite-lld-al10-original-imaffh2qzqyd2jmg.jpeg?q=70' , 
//   price: 10000, color:"Black & silver"},
//   {productname:"Appliances", description:"Preparing a tasty breakfast or supper can be easy and fun with this 2-slice sandwich maker. It also needs less oil or fat for cooking.", category:'Appliances', name: "Sandwitch Maker",
//   imgsrc: "https://rukminim1.flixcart.com/image/312/312/j1b0xow0/sandwich-maker/5/q/g/nova-2-slice-sandwich-maker-original-imaesur6v2vmvyek.jpeg?q=70", price:1234567890, color:"Blue" },
//   {productname:"Cricket", description:"Blade made of Poplar Willow is fully quality wood with lightweight-700 g,", category:'Sports', name: "Ceat size Poplar Willow Cricket Bat",
//   imgsrc: "https://rukminim1.flixcart.com/image/312/312/j1l10nk0/bat/y/z/d/700-size-5-5-na-ceat-original-imaestuqrtzgfsng.jpeg?q=70",
//    price: 5500, color:"White & blue" },
//   {productname:"Running Shoes", description:"Mesh Panel Detail, Panel and Stitch Detail, Textured Detail with 331g weight.", category:'Men Shoes', name: "IPuma Stocker IDP Running Shoes For Men",
//   imgsrc: "https://rukminim1.flixcart.com/image/312/312/j76i3rk0/shoe/u/a/p/rapple-nw1-8-puma-asphalt-lime-punch-black-original-imaexhbdztgepz8d.jpeg?q=70" ,
//    price:3000, color:"Black & white" },
//    {productname:"Appliances", description:"18K Santis Pro - MAI18SP3N8F0, Copper Condenser,Power Consumption: 1990 W.", category:'Appliances', name: "Inverter AC",
//    imgsrc: "https://rukminim1.flixcart.com/image/312/312/jfr57rk0/air-conditioner-new/2/3/u/153vjzj-1-2-inverter-voltas-original-imaf45dyjh8nnrtw.jpeg?q=70" ,
//     price: 25000, color:"white" }

// Default 5 product data - image through base64 - API data(Product details API)
export default function(state = [
  {productname:"Honor mobile", description:"The Honor 9 Lite boasts a double-sided 2.5D glass. Watch movies, play games - high definition on the 14.35 cm (5.65'') FHD+ display", category:'Electronics', name: "Honor 9 lite",
  image_base64: honerMobile, price: 10000, color:"Black & silver"},
  {productname:"Appliances", description:"Preparing a tasty breakfast or supper can be easy and fun with this 2-slice sandwich maker. It also needs less oil or fat for cooking.", category:'Appliances', name: "Sandwitch Maker",
  image_base64: sandwichMaker, price: 20000, color:"Blue" },
  {productname:"Cricket", description:"Ceat ct 200 Poplar Willow Cricket Bat Features & Specifications stand. The details about ceat ct 200 Poplar Willow Cricket Bat(Short Handle, 900 g).", category:'Sports', name: "Ceat size Poplar Willow Cricket Bat",
  image_base64: cricketBat, price: 5500, color:"White & blue" },
  {productname:"Running Shoes", description:"Puma Black-ANDEAN TOUCAN - SSIPL RETAIL LIMITED 75, Mesh Panel Detail, Panel and Stitch Detail, Textured Detail with 331g weight.", category:'Men Shoes', name: "IPuma Stocker IDP Running Shoes For Men",
  image_base64: sportShoe,  price:3000, color:"Black & white" },
   {productname:"Appliances", description:"18K Santis Pro - MAI18SP3N8F0, Copper Condenser as  as accurately as 0.1ºC or 0.5ºC, Power Consumption: 1990 W.", category:'Appliances', name: "Inverter AC",
   image_base64: inverterAc, price: 25000, color:"white" }
], action) {
  switch (action.type) {
    case "PRODUCT_ADD":
      return _.concat(state,action.payload);
    case "PRODUCT_UPDATE":
      state=action.payload;
      return state;
    case "PRODUCT_DELETE":
      state=action.payload;
      return state;
    default:
      return state;
  }
}
