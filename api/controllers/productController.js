import Product from "../models/productModel.js";
import createError from "../utils/createError.js";

export const addProduct = async (req,res,next)=>{
    if(!req.isSeller)
        return next (createError(403,"Only seller can create product"));
    const newProduct = new Product(
        {
            userId: req.body,
            ...req.body,
        }
    )
    try {
        const savedProduct  = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        next(error)
    }
}


export const deleteProduct = async (req,res,next) =>{

    try {
        const product = await Product.findById(req.params.id);
        if(product.userId !== req.userId)
            return next(createError(403,"You can only delete your product"));
        await product.findByIdAndDelete(req.params.id);
        res.status(200).json("delete product success");
        
    } catch (error) {
        next(error)
    }
}

export const getProduct = async (req,res,next) =>{
    try{
    const product = new Product.findById(req.params.id);
    if(!product) next(createError(400,"Product not found"))
    res.status(200).json(product);
    }catch(error)
    {
        next(error)
    }
}

export const getProducts = (req,res,next) =>{
    
    
    try {
        
    } catch (error) {
        
    }
}

