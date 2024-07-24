const express = require("express");
const router = express.Router();
const {
  getAllMedicines,
  showCreateMedicineForm,
  createMedicine,
  showEditMedicineForm,
  updateMedicine,
  deleteMedicine,
  getMedicineById,
} = require("../controller/medicineController");

router.get("/", getAllMedicines);

router.get("/new", showCreateMedicineForm);

router.post("/", createMedicine);

router.get("/:id/edit", showEditMedicineForm);

router.put("/:id", updateMedicine);

router.delete("/:id", deleteMedicine);

router.get("/:id", getMedicineById);

module.exports = router;
