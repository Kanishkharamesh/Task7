/* import express from 'express';
import { fetch } from '../controller/userController.js';
const router = express.Router();
router.get('/fetch', fetch);
export default router; */

/* import express from 'express';
import { fetch } from '../controller/userController.js';
const router = express.Router();
router.get('/fetch', fetch);
router.post('/create', fetch);
export default router; */

/* import express from 'express';
import { create, fetch ,update} from '../controller/userController.js';
const router = express.Router();
router.get('/fetch', fetch);
router.post('/create', create);
router.put('/update/:id', update);
export default router; */

/* import express from "express";
import { create, fetch, update, remove } from "../controller/userController.js";
const router = express.Router();
// Routes
router.post("/create", create);      // Create a new user
router.get("/fetch", fetch);         // Fetch all users
router.put("/update/:id", update);   // Update user by ID
router.delete("/delete/:id", remove); // Delete user by ID
export default router; */

import express from 'express';
import { create, deleted, fetch ,update , findvalue} from '../controller/userController.js';
const router = express.Router();
router.get('/fetch', fetch);
router.post('/create', create);
router.put('/update/:id', update);
router.delete('/delete/:id', deleted);
router.get('/findvalue/:id', findvalue);
export default router;
