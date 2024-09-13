
const {conn,productModel, userModel,ourProductModel,contactFormModel,billingInfoModel}=require('../config/db');
const mongoose=require('mongoose');
const path = require('path');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const multer  = require('multer')



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../vite-project/src/assets/images'));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,Date.now() + "-" + file.originalname)
    }
  })
  
  const upload = multer({ storage })




async function getproductModel(req, res) {
    const id = req.params.id;

    try {
        // Check if the id is "all"
        if (id === "all") {
            const products = await productModel.find(); // Fetch all products
            return res.json(products);
        }

        // If id is not "all", validate and use it as ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid product ID" });
        }

        const product = await productModel.findById(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.json(product);
    } catch (err) {
        console.error("Error fetching product:", err);
        return res.status(500).json({ message: "Server error" });
    }
}
async function getOurProductModel(req, res) {
    try {
        // Check if the id is "all"
            const products =await ourProductModel.find({_id:req.params.id});
            console.log(products);
            if(products){
                return res.json(products);
            }
            else{
                return res.status(404).json({ message: "Our Product not found" });
            }
}
catch(err){
    console.error("Error fetching product:", err);
    return res.status(500).json({ message: "Server error" });

}
}


async function insertProducts(req, res){
    const products = req.body; // Expect an array of products in the request body

    try {
        const insertedProducts = await productModel.insertMany(products);
        return res.status(201).json({
            message: "Products inserted successfully",
            data: insertedProducts
        });
    } catch (err) {
        console.error("Error inserting products:", err);
        return res.status(500).json({
            message: "Failed to insert products",
            error: err.message
        });
    }
}
async function getAll(req,res){
    try{
        const ko=await productModel.find();
        if(ko){
            return res.status(200).json(ko);
        }
        else{
            return res.status(500).json({message:"Products not found"});
        }
    }
    catch(err){
        return res.status(500).json({err:"Error on finding products"});
    }
    

}

const signupModel = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate input
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if the user already exists
        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create a new user
        const newUser = new userModel({
            name,
            email,
            password: await bcrypt.hash(password, 10),  // Hash the password
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        // Generate JWT token
        const jsonweb = jwt.sign(
            { email: savedUser.email, _id: savedUser._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Respond with the saved user
        return res.status(201).json({
            success: true,
            message: "User signed up successfully",
            jsonweb,
            user: {
                name: savedUser.name,
                email: savedUser.email,
            },
        });
    } catch (err) {
        console.error("Error during signup:", err);  // Log the error to the console
        return res.status(500).json({
            message: "Internal server error",
            success: false,
            error: err.message,  // Send the error message in the response for debugging
        });
    }
};


async function loginModel(req,res){
    try {
        const {email, password } = req.body;
        const user=await userModel.findOne({email});
        // Validate input (you may want to add more validation here)
        if (!user) {
            return res.status(403).json({ message: "Authorization failed email or password is wrong" });
        }


        const isPasswordEqual=await bcrypt.compare(password,user.password);
        if(!isPasswordEqual){
            return res.status(403).json({ message: "Authorization failed email or password is wrong" });
        }

        const jsonweb=jwt.sign({email:user.email,_id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:'24h'}
        )

        // Create a new user
      
        
        // Save the user to the database

        // Respond with the saved user
        res.status(200).json({
            success: true,
            message: "Login successfully",
            jsonweb,
            name:user.name,
            email,
            
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: err.message,  // Send the error message in the response for debugging
        });
    }

}

const getOurProducts=async(req,res)=>{
    try{
        const ko=await ourProductModel.find();
        if(ko){
            return res.status(200).json(ko);
        }
        else{
            return res.status(500).json({message:"Our  products not found"});
        }
    }
    catch(err){
        return res.status(500).json({err:"Error on finding our products"});
    }
    

}

async function createContactForm(req,res){
    const {name,email,phone_no,msg}=req.body;
    try{
        const kop=await contactFormModel.create({name,email,phone_no,msg});
        return res.status(200).json(kop);
    }
    catch(err){
        return res.status(500).json({err:"Error on creating the data"});
    }

}
async function billingInfo(req,res){
    console.log(req.body); // Add this to check incoming data

    const { name, company_name, street_address, apartment, city, phone_no, email,paymentMethod} = req.body;
    try{
        const kiu=await billingInfoModel.create({name,company_name,street_address,apartment,city,phone_no,email,paymentMethod});
        return res.status(200).json(kiu);

    }
    catch(err){
        return res.status(500).json({err:"Error on creating the billing user data"});

    }

}


const getBillingInfo=async(req,res)=>{
    try{
        const ko=await billingInfoModel.find();
        if(ko){
            return res.status(200).json(ko);
        }
        else{
            return res.status(500).json({message:"Our  products not found"});
        }
    }
    catch(err){
        return res.status(500).json({err:"Error on finding our products"});
    }
    

}

const getSingleBillingInfo=async(req,res)=>{
    const id=req.params.id;

    try{
        const billingInfo = await billingInfoModel.findById(id); // Fetch by id
        if (billingInfo) {
            return res.status(200).json(billingInfo);  // Return the found billing info
        } else {
            return res.status(404).json({ message: "Billing information not found" }); // Handle not found case
        }
    } catch (err) {
        return res.status(500).json({ err: "Error fetching billing information" }); // Error handling
    }

}

const getSingly=async(req,res)=>{

    try {
        const billingDetails = await billingInfoModel.find(); // Fetch data from MongoDB
      const streetAddress = billingDetails[0].street_address; // Get street address from first item

      res.status(200).json(billingDetails); // This should include 'street_address'
    } catch (error) {
      res.status(500).json({ error: 'Error fetching billing details' });
    }
  };
  

module.exports={getproductModel,insertProducts,getAll,upload,signupModel,loginModel,getOurProducts,getOurProductModel,createContactForm,billingInfo,getBillingInfo,getSingleBillingInfo,getSingly};