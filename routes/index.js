const express = require("express");
const router = express.Router();
const homeController = require("../controller/home");
const uploadController = require("../controller/upload");
const homeUpload = require('../controller/Homepage/HomePageSlider')
const {getListContent} = require('../controller/Homepage/HomepageContent')
const {deleteContent} = require('../controller/Homepage/HomepageContent')
const {uploadContent} = require('../controller/Homepage/HomepageContent')
const {uploadABoutContent,deleteContentByTitle,getListOfContent} = require('../controller/Homepage/AboutUs/AbooutUs')
let routes = app => {
  router.get("/", homeController.getHome);
  router.post("/upload", uploadController.uploadFiles);
  router.get("/files", uploadController.getListFiles);
  router.get("/files/:name", uploadController.download);
  router.post('/homeupload',homeUpload.uploadFiles);
  router.get('/gethomeupload/images',homeUpload.getListFiles);
  router.get('/homeupload/download',homeUpload.download);
  router.delete('/homeupload/delete/:name',homeUpload.deleteFile);
  router.post("/uploadcontent", uploadContent);
  router.get("/content", getListContent);
  router.delete("/content/:id", deleteContent);
  router.post("/uploadabout",uploadABoutContent);
  router.delete("/deletecontent/:title", deleteContentByTitle);
  router.get("/getabout",getListOfContent);
  return app.use("/", router);
};

module.exports = routes;