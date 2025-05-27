import z from "zod";
import { addHotelSchema } from "@/schema/hotel.schema";

type Hotel = z.infer<typeof addHotelSchema>;

interface IHotelRepository {
  addNewHotel: (hotelDetails: Hotel) => Promise<any>;

  getHotelDetails: (hotelId: number) => Promise<any>;
}

export type { Hotel, IHotelRepository };
