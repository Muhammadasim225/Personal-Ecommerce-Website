const mongoose=require('mongoose');
const express=require('express');
const path = require('path');
const { number } = require('joi');

const app=express();

const conn=mongoose.connect('mongodb://127.0.0.1:27017/ecommerce') .then(() => {
    console.log("Successfully connected to the database");
})
.catch((err) => {
    console.log("Error connecting to the database", err);
});

const productSchema=new mongoose.Schema({
    img:{
        type: String,
        required: true,
    },
    title:{
        type:String,
        require:true,
    },
    price:{
        type:String,
        require:true,

    },
    discounted_price:{
        type:String,
        require:true,
    },
    rating:{
        type:Number,
        require:true,
    },
    reviews:{
        type:Number,
        require:true,
    },
    inStock: {
        type:Boolean,
        require:true,
     },
     description:{
        type:String,
        require:true,
     },
     availability:{
        type:String,
        require:true,
        enum: ['blue', 'red'],
     },
     size:{
        type:String,
        require:String,
        enum: ['xs', 's','m' ,'l' ,'xl'],
     },
     quantity:{
        type:Number,
        require:true,
     },
     addToFav:{
        type: Boolean,
        default: false,
     },
     freeDelivery: {
        type: Boolean,
        default: false,  // Assuming not all products have free delivery
      },
     returnPolicy:{
        type: String,
        require:true,
     },
     mainImage:{
        type:String,
        require:true,
     },
     smallImage1:{
        type:String,
        require:true,
     },
     smallImage2:{
        type:String,
        require:true,
     },
     smallImage3:{
        type:String,
        require:true,
     },
     smallImage4:{
        type:String,
        require:true,
     },
   
})
const contactFormSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone_no:{
        type:String,
        required:true,

    },
    msg:{
        type:String,
        required:true,

    }
})

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
    },
   
    password:{
        type:String,
        required:true,
    }
})
const billingInfoSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    company_name:{
        type:String,
        required:true,
    },
    street_address:{
        type:String,
        required:true,
    },
    apartment:{
        type:String,
        required:true,  
    },
    city:{
        type:String,
        required:true,
    },
    phone_no:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    paymentMethod: {
        type: String,
        enum: ['Bank', 'Cash on Delivery'],
        required: true,
      }
})


const productModel=mongoose.model("productModel",productSchema);
const ourProductModel=mongoose.model("ourProductModel",productSchema);
const userModel=mongoose.model("userModel",userSchema);
// const contactFormModel=mongoose.model("contactFormModel",contactFormSchema);
const billingInfoModel=mongoose.model("billingInfoModel",billingInfoSchema);

async function insertion(){

//     const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLFhr-JgZXg_8q6o5hpWXoqXFneenCt0dH2w&s';
//     const image1 = '/images/productdetailimage1.png';
//     const img1 = '/images/productdetailimage1.png';
//     const img2 = '/images/productdetailimage2.png';
//     const img3 = '/images/productdetailimage3.png';
//     const img4 = '/images/productdetailimage4.png';
//     try{
//         const newProduct=await productModel({
//           "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLFhr-JgZXg_8q6o5hpWXoqXFneenCt0dH2w&s",
//   "title": "HAVIT HV-G92 Gamepad",
//   "price": "$120",
//   "discounted_price": "$160",
//   "rating": 4.5,
//   "reviews": 88,
//   "inStock": true,
//   "description":"PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
//   "availability":"blue",
//   "size":"l",
//   "quantity":5,
//   "addToFav":true,
//   "freeDelivery":false,
//   "returnPolicy":true,
//   "mainImage":image1,
//   "smallImage1":img1,
//   "smallImage2":img2,
//   "smallImage3":img3,
//   "smallImage4":img4,
//         })


//         const savedProduct = await newProduct.save();
//         console.log("Product inserted successfully:", savedProduct);
//     }
//      catch (err) {
//         console.error("Error inserting product:", err);
    

//     }

// import dogfood from '../../assets/images/dogfood.jpeg';
// import satin_jacket from '../../assets/images/satin_jacket.jpg';
// import dslr from '../../assets/images/dslr.jpeg';
// import car from '../../assets/images/car.jpeg';
// import shoes from '../../assets/images/shoes.jpg';
// import laptop from '../../assets/images/laptop.jpg';
// import care from '../../assets/images/care.jpeg';
// import controller from '../../assets/images/GP11_PRD3-1000x563-1-600x338.jpeg';
// import airpod from '../../assets/images/airpod.jpg';
const img="/images/dogfood.jpeg";
const img1 = '/images/laptop.jpg';
const img2 = '/images/productdetailimage2.png';
const img3 = '/images/productdetailimage3.png';
const img4 = '/images/productdetailimage4.png';
const image1 = '/images/productdetailimage1.png';



try{
    const newProduct=await ourProductModel ({
            "img":img1,
           "title": "ASUS FHD Gaming Laptop",
           "price": "$150",
           "discounted_price": '$700',
           "rating": 2.0,
           "reviews": 20,
           "inStock": false,
           "description":"Unleash your gaming potential with the ASUS FHD Gaming Laptop, a powerhouse designed for gamers who demand speed, precision, and immersive visuals",
           "availability":"blue",
           "size":"m",
           "quantity":69,
           "addToFav":false,
           "freeDelivery":false,
           "returnPolicy":true,
           "mainImage":image1,
           "smallImage1":img1,
           "smallImage2":img2,
           "smallImage3":img3,
          "smallImage4":img4,

               })
               
               const savedProduct = await newProduct.save();
                       console.log("Product inserted successfully:", savedProduct);
}
catch(err){
            console.error("Error inserting product:", err);
}
}

// insertion(); // Call the insertion function to insert the data

module.exports={
    conn,
    productModel,
    userModel,
    ourProductModel,
    billingInfoModel
};