import { Hotel as HotelType, IHotelRepository } from "@/types/hotel.type";
import Hotel from "models/hotel.model";
import logger from "@/config/logger";

// This class handles hotel-related database operations.
class HotelRepository implements IHotelRepository {
  async addNewHotel(hotelDetails: HotelType) {
    try {
      const data = await Hotel.create(hotelDetails);
      return data;
    } catch (error) {
      logger.error("Error adding new hotel:", error);
      throw error;
    }
  }

  async getHotelDetails(hotelId: number) {
    try {
      const data = await Hotel.findByPk(hotelId);
      return data;
    } catch (error) {
      logger.error("Error fetching hotel details:", error);
      throw error;
    }
  }
}

export default new HotelRepository();
