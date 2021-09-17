const pool = require("../../config/database");
const bcrypt = require("bcryptjs")
const jwtGenerator = require("../../utils/jwtGenerator");
const validInfo = require("../../middleware/validInfo")
const jwt = require("jsonwebtoken");
const nodemalier = require('../../middleware/nodemalier');

require('dotenv').config();


exports.Register = async (req, res) => {
   try {
        //console.log("Hello")
       //1. req.body (name,email,password)
          
         var role = "Client";
           var status = 0;
           const {username,email,password} = req.body;
          // console.log(username)
       //2.check if user exits
          const user = await pool.query("SELECT * from users WHERE username = $1",[username]);
         // var id = await pool.query("SELECT user_id from users order by id DESC LIMIT 1");
        //  
          if(user.rows.length !== 0){
              return res.status(401).send("User aleardy exist")
          }
            //check email user exits
           const check_Email = await pool.query("SELECT * from users WHERE email = $1",[email]);
           if(check_Email.rows.length !== 0){
               return res.status(401).send("Email aleardy exist")
           }
             

       //3.bcrypt the user password
           const salt = await bcrypt.genSalt(10);
           const bcryptPassword = await bcrypt.hash(password,salt);
         //  res.json(bcryptPassword);
       //4. enter new user inside our database
         const token = jwt.sign({username:req.body.username},process.env.jwtSecret,{expiresIn:"1hr"});

           const newUser = await pool.query(
               "INSERT INTO users(username,role,password,token,status,email) VALUES($1,$2,$3,$4,$5,$6)",
               [username,role,bcryptPassword,token,status,email]
           );
          
         //  res.json(newUser.rows[0]);
       //5. genrating our jwt token
            //  id = id+1;
           nodemalier.sendConfirmationEmail(
               username,
               email,
               token
           );
      //    const token = jwtGenerator(newUser.rows[0].password)
          res.json({token});  
   } catch (err) {
       console.error(err.message);
   }
 };