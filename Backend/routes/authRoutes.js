const express = require("express");
 
const router = express.Router();

//Auth Routes

router.post("/register", registerUser); //Regist user 
router.post("/login", loginUser); //Login User

router.get("/profile",Protect, getUserProfile ); //Get User Profile
router.put("/profile", Protect,updateUserProfile); //Update Profile

module.exports = router;