import { Model, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";
import sequelize from "./sequelize.config";

/**
 * Sequelize Models accept two generic types to define
 * the model's Attributes and Creation Attributes.
 *
 * - `InferAttributes` tells TypeScript to infer the attributes declared in the model.
 * - `InferCreationAttributes` tells TypeScript which attributes are optional during creation.
 */
class Hotel extends Model<InferAttributes<Hotel>, InferCreationAttributes<Hotel>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare address: string;
  declare location: string;
  declare created_at: CreationOptional<Date>;
  declare updated_at: CreationOptional<Date>;
}

/**
 * Initialize the Hotel model with its attributes.
 * The `sequelize` instance is passed to connect the model to the database.
 * The `underscored` option is set to true to use snake_case for column names.
 */
Hotel.init(
  {
    id: {
      type: "INTEGER",
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: "STRING",
      allowNull: false,
    },
    address: {
      type: "STRING",
      allowNull: false,
    },
    location: {
      type: "STRING",
      allowNull: false,
    },
    created_at: {
      type: "DATE",
      defaultValue: new Date(),
    },
    updated_at: {
      type: "DATE",
      defaultValue: new Date(),
    },
  },
  {
    sequelize,
    tableName: "nestro_hotels",
    underscored: true, // Use snake_case for column names
  }
);

export default Hotel;
