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
  },
  associations: function() {
    tilapia_1_SSR.belongsToMany(tilapia_2_information,{
      through: 'tilapia2_SSR_information'
    });
  }
};
