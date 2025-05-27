import { Hotel, IHotelRepository } from "@/types/hotel.type";

class HotelService {
  hotelRepository;

  constructor(HotelRepository: IHotelRepository) {
    this.hotelRepository = HotelRepository;
  }

  async createNewHotel(hotelData: Hotel) {
    const newHotel = await this.hotelRepository.addNewHotel(hotelData);
    return newHotel;
  }

  async getHotelById(hotelId: number) {
    const foundHotel = await this.hotelRepository.getHotelDetails(hotelId);
    return foundHotel;
  }
}

export default HotelService;
