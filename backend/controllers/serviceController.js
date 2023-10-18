const serviceModel = require("../models/serviceModel");
const { validationResult } = require("express-validator");

//! create a new service
const serviceController = {
  addService: async (req, res) => {
    console.log(req.body);
    const {
      service_name,
      service_image,
      category_id,
      subcategory_id,
      price,
      location,
      capacity_number,
      company_id,
      short_description,
    } = req.body;

    //* Check is there is any validation problem
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }

    //! adding a new service
    try {
      const newService = await serviceModel.create({
        service_name: service_name,
        service_image: service_image,
        category_id: category_id,
        subcategory_id: subcategory_id,
        price: price,
        location: location,
        capacity_number: capacity_number,
        company_id: company_id,
        short_description: short_description,
        options: options,
      });
      res.status(200).json({
        message: "Service added with success",
        service: newService,
      });
    } catch (error) {
      console.log(error);
    }
  },

  //! get all the services list
  listingServices: async (req, res) => {
    try {
      const services = await serviceModel.paginate(
        {},
        { page: req.query.page, limit: 5 }
      );
      res.status(200).send(services);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  },

  //! Search for a service
  searchForService: async (req, res) => {
    try {
      const services = await serviceModel.paginate(
        { service_name: req.query.name },
        { name: req.query.name, page: req.query.page, limit: 1 }
      );
      res.status(200).send(service);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  },

  //! Get a service by ID
  getServiceById: async (req, res) => {
    const { id } = req.params;
    try {
      const service = await serviceModel.findOne({ _id: id });
      res.status(200).send(service);
    } catch (error) {
      console.log(error);
    }
  },

  //! update a service
  updateService: async (req, res) => {
    const {
      service_name,
      service_image,
      category_id,
      subcategory_id,
      price,
      location,
      capacity_number,
      company_id,
      short_description,
      options,
    } = req.body;
    const { id } = req.params;
    try {

      //*find the service to update
      const serviceToUpdate = await serviceModel.findOne({ _id: id });

      //*update the product
      await serviceModel.findByIdAndUpdate(serviceToUpdate._id, {
        service_name: service_name,
        service_image: service_image,
        category_id: category_id,
        subcategory_id: subcategory_id,
        price: price,
        location: location,
        capacity_number: capacity_number,
        company_id: company_id,
        short_description: short_description,
        options: options,
      });
      res.status(200).json({ message: "The service has been updated with success" });
    } catch (error) {
      console.log(error);
    }
  },

  //! delete a service
  deleteService: async (req, res) => {
    const { id } = req.params;
    try {
      await serviceModel.findByIdAndDelete(id);
      res.status(200).json({ message: "The service has been deleted with success" });
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = serviceController;
