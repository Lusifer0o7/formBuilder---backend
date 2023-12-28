const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Form = require("../models/formModel");
const ApiFeatures = require("../utils/apifeatures");

exports.createForm = catchAsyncErrors(async (req, res, next) => {
    
    const { title, inputs } = req.body;

    const form = await Form.create({
      title,
      inputs
    });

    res.status(201).json({
      success: true,
      form,
    });
});

exports.getAllForm = catchAsyncErrors(async (req, res, next) => {
    
  const forms = await Form.find();

  res.status(200).json({
    success: true,
    forms
  });
});

exports.getForm = catchAsyncErrors(async (req, res, next) => {
 
  const form = await Form.findById(req.params.id);

  res.status(200).json({
    success: true,
    form,
    
  });
});


exports.updateForm = catchAsyncErrors(async (req, res, next) => {

  

   const form = await Form.updateOne({_id: req.params.id}, req.body);

  res.status(200).json({
    success: true,
    message: `${form.modifiedCount} Record Updated`,
  });
});

exports.deleteForm = catchAsyncErrors(async (req, res, next) => {
    
  const form = await Form.findById(req.params.id);

  if (!form) {
    return next(new ErrorHander("Form not found", 404));
  }


  await form.deleteOne();

  res.status(200).json({
    success: true,
    message: "Form Deleted Successfully",
  });
});

