import express from "express";
import { hotelController } from "@/controllers/v1";
import { pathParamValidator, requestBodyValidator } from "@/validators/request.validator";
import { addHotelSchema, hotelIdParamSchema, optionalHotelIdParamSchema } from "@/schema/hotel.schema";

const hotelRouter = express.Router();

hotelRouter.get("/:hotelId", pathParamValidator(optionalHotelIdParamSchema), hotelController.getHotelDetails);
hotelRouter.post("/", requestBodyValidator(addHotelSchema), hotelController.addNewHotel);

// The following routes are yet to made functional, but they are defined for future use.
hotelRouter.put("/:hotelId", pathParamValidator(hotelIdParamSchema), hotelController.updateHotelDetails);
hotelRouter.delete("/:hotelId", pathParamValidator(optionalHotelIdParamSchema), hotelController.deleteHotel);

export default hotelRouter;
