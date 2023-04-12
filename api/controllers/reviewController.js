import createError from "../utils/createError.js";
import Review from "../models/reviewModel.js";
import Product from "../models/productModel.js";

export const createReview = async (req,res,next) => {
    if(req.isSeller) return next(createError(403,"Seller cannot comment"));

    const newReview = new Review({
        userId: req.userId,
        productId: req.body.productId,
        desc: req.body.desc,
        star: req.body.star,
    });

    try {
        const review = await new Review.findOne({
            userId: req.userId,
            productId:req.body.productId,
        })

        if(review)
        return next(createError(403,"You have allready created a review for this product"));

        const savedReview = await newReview.save();
        await Product.findByIdAndUpdate(req.body.productId, {
            $inc:{ totalStars: req.body.star, starNumber: 1}
        });
        res.status(201).send(savedReview);
    } catch (error) {
        next(error)
    }
};