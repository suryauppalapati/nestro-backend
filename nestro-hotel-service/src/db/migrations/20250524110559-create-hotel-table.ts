import { QueryInterface } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(
      `
      CREATE TABLE IF NOT EXISTS nestro_hotels (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
      `
    );
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(
      `
      DROP TABLE IF EXISTS nestro_hotels
      `
    );
  },
};
