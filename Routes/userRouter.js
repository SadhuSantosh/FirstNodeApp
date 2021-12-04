import express from "express";
import bcrypt from "bcrypt";
import { addUser, getUserbyUsername } from "../helper.js";

const router = express.Router();
const passwordPattern = /(?=.*[A-Z]+)(?=.*[a-z]+)(?=.*[0-9]+)(?=.*[!@#$*]).{8,}/g;

router.route("/signup")
    .post(async (req, res) => {
        const { username, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const isUserExists = await getUserbyUsername(username);
        const hashedPassword = await bcrypt.hash(password, salt);
        const isStrongPassword = password.match(passwordPattern);
        isUserExists
            ?
            res.send({ message: `The user with username ${username} already exists` })
            :
            (isStrongPassword
                ?
                (await addUser({ username, password: hashedPassword, salt: salt }) && res.send({ message: `${username} added sucessfully` }))
                :
                res.send(
                    {
                        message: "password is not strong, it should contain minimum of 8 characters including a capital letter, small letter, special character and a number. Ex:Password@123"
                    })
            )
    })

// Task
// Store the data in users collection
// username & hashedPassword
// 1. verify username already exists
// 2. password is strong are not - "Provide a stronger password"
// at least 8 characters
// at least 1 small, capital letter & one special character


export const userRouter = router;