import { z } from "zod";

// Zod schemas for validating hotel-related requests.
const addHotelSchema = z.object({
  name: z
    .string({ required_error: "Hotel name is required" })
    .max(50, "Hotel name must be less than 50 characters")
    .nonempty("Hotel name cannot be empty"),
  address: z
    .string({ required_error: "Address is required" })
    .max(100, "Address must be less than 100 characters")
    .nonempty("Address cannot be empty"),
  location: z
    .string({ required_error: "Location is required" })
    .max(30, "Location must be less than 30 characters")
    .nonempty("Location cannot be empty"),
});

const hotelIdParamSchema = z.object({
  hotelId: z.string({ required_error: "Hotel ID is required" }),
});

const optionalHotelIdParamSchema = z.object({
  hotelId: z
    .string()
    .optional()
    .refine((val) => val === undefined || !isNaN(Number(val)), {
      message: "Hotel ID must be a number if provided",
    }),
});

export { addHotelSchema, hotelIdParamSchema, optionalHotelIdParamSchema };
