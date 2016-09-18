module.exports = {
  attributes: {
    contig: {
      type: Sequelize.STRING,
      allowNull: false
    },
    SSRPattern1: {
      type: Sequelize.STRING,
      allowNull: false
    },
    SSRPattern2: {
      type: Sequelize.STRING,
      allowNull: false
    },
    fiveFrinkinSequence: {
      type: Sequelize.STRING,
      allowNull: false
    },
    threeFrinkinSequence: {
      type: Sequelize.STRING,
      allowNull: false
    },
    startLocation: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    endLocation: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }
};
