import express from "express";
import { createUser, getUsers, updateUser, deleteUser } from '../controllers/usersController.js';
export const router = express.Router();
router.get('/', getUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);