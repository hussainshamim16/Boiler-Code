import express from 'express';
const router = express.Router();
import {
    addUser,
    Allusers,
    LoginUser
} from "../controllers/user.controllers.js";

router.post("/users", addUser)
router.post("/login", LoginUser)
router.get("/users", Allusers)



router.get("/users/:id", (req, res) => {
    console.log("Hello from single users")
})

export default router;
