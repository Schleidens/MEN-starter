// src/routes/itemRoutes.js
const express = require("express");
const router = express.Router();
const boilerController = require("../controllers/controller");

// GET all items
router.get("/", boilerController.getAllItems);

// POST new item
router.post("/", boilerController.createItem);

// GET item by ID
router.get("/:id", boilerController.getItemById);

// PUT update item by ID
router.put("/:id", boilerController.updateItem);

// DELETE item by ID
router.delete("/:id", boilerController.deleteItem);

module.exports = router;
