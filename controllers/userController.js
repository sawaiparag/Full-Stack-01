//const User = require("../model/userModel")

exports.home = (req,res) =>{
    res.send ("Hello Everyone...")
};

exports.aboutus = (req,res) => {
    res.send("This is About us")
};

exports.createUser = async (req, res)=> {
    try {
        const {name, email} = req.body;
        if(!name || !email) {
            throw new Error ("Name and Email are mandatory");
        }
        const userExists = await User.findOne({email});
        if (userExists) {
            throw new Error ("Email already Exists");
        }

        const user = await User.create({name, email});
        res.status(201).json({
            success:true,
            message: "User Created Sucessfully",
            user,
        });

    } catch (error) {
        console.log(error);
    }

}