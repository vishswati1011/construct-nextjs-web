import mongoose, { mongo } from "mongoose";

const projectModel = new mongoose.Schema({
    title: String,
    desc:String,
    image:String,
    video:String,
    connect:String
});

 export const Project = mongoose.models.projects||mongoose.model('projects',projectModel);