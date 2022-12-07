const express = require("express");
const router = express.Router();
const cancionesController = require("../controllers/canciones.controller")
const validaciones = require("../validations/canciones.validation")
  
router.get("/", cancionesController.getAll)
router.get("/:id", cancionesController.getById)
router.put("/:id", validaciones, cancionesController.update)
router.delete("/:id", cancionesController.delete)
router.post("/", validaciones, cancionesController.create)



module.exports = router;