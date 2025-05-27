import { Request, Response, NextFunction } from "express";
import HotelService from "@/services/hotel.service";
import hotelRepository from "repositories/hotel.repository";
import { StatusCodes } from "http-status-codes";
import { InternalServerError } from "@/utils/error.util";

const hotelService = new HotelService(hotelRepository);

const addNewHotel = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const newHotel = request.body;
    const res = await hotelService.createNewHotel(newHotel);
    response.status(StatusCodes.OK).json({
      message: "Hotel added successfully!",
      success: true,
      data: res,
      errors: null,
    });
  } catch (error) {
    throw new InternalServerError("Failed to add new hotel");
  }
};

const getHotelDetails = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const hotelId = parseInt(request.params.hotelId);
    const hotelDetails = await hotelService.getHotelById(hotelId);
    if (!hotelDetails) {
      response.status(StatusCodes.NOT_FOUND).json({
        message: "Hotel not found!",
        success: false,
        data: null,
        errors: null,
      });
      return;
    }
    response.status(StatusCodes.OK).json({
      message: "Hotel details fetched successfully!",
      success: true,
      data: hotelDetails,
      errors: null,
    });
  } catch (error) {
    throw new InternalServerError("Failed to fetch hotel details");
  }
};

const updateHotelDetails = (request: Request, response: Response, next: NextFunction) => {
  response.status(StatusCodes.NOT_IMPLEMENTED).send("NOT IMPLEMENTED");
  // This function is not implemented yet
};

const deleteHotel = (request: Request, response: Response, next: NextFunction) => {
  response.status(StatusCodes.NOT_IMPLEMENTED).send("NOT IMPLEMENTED");
  // This function is not implemented yet
};

export { addNewHotel, getHotelDetails, updateHotelDetails, deleteHotel };
