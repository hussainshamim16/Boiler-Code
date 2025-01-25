import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter Your Name"]
    },
    email: {
        type: String,
        required: [true, "Enter Your Email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Enter Your Password"]
    },
    role:{
        type: String,
        enum:["Teacher","Student"],
        required : [true, "Enter Your role"]
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
}, {timestamps: true}
)

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
  
    this.password = await bcrypt.hash(this.password, 10);
    next();
  });

export default mongoose.model("user", userSchema)