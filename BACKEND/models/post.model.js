import express from "express";
import mongoose from "mongoose";

const postScheema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
    }
})

export default mongoose.model(post, postScheema)