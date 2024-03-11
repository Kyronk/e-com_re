const express = require('express');
require("dotenv").config();
const cors = require("cors");


const app =  express();





const PORT = process.env.PORT || 4567;



const listener = app.listen(PORT , () => {
    console.log("Server is start on post = ", listener.address().port);
});