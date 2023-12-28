const express = require("express");
const {
  createForm,
  updateForm,
  getForm,
  getAllForm,
  deleteForm
} = require("../controllers/formController");

const router = express.Router();


router
  .route("/forms").get(getAllForm);

router
  .route("/form/create").post(createForm);

router
  .route("/form/:id")
  .get(getForm)
  .put(updateForm)
  .delete(deleteForm);

module.exports = router;