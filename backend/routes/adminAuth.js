const express = require("express");
const bcrypt = require("bcryptjs");
const pool = require("../db");
const router = require("express").Router();
const jwt = require("jsonwebtoken");

require('dotenv').config();

//Username=admin123 pass=admin

router.post("/admin",validInfo, async (req,res)=>{
    try {
       //1.req.body

         const {username,password} = req.body;
       //2. check if user doesn't exits (if not then we throw error)
        const user = await pool.query("SELECT * FROM users where username = $1 &",[username]);
           
        if(user.rows.length === 0){
            return res.status(401).json("Password or username is incorrect");
        }
       //3. check if Incomming password is same database password
        const validPassword = await bcrypt.compare(password,user.rows[0].password);
        
         if(!validPassword){
            return res.status(401).json("Password  is incorrect"); 
         }
         const active = user.rows[0].status;
         if(active == 0){
            return res.status(401).json("Conform your account"); 
         }
         const role = user.rows[0].role;
         const user_id = user.rows[0].user_id;
        return res.status(200).send({role,user_id})
        ;

    } catch (err) {
        console.error(err.message);
    }
})