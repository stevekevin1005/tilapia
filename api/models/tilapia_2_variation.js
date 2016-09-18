module.exports = {
  attributes: {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false, 
      primaryKey: true
    },
    contig: {
      type: Sequelize.STRING,
      allowNull: false
    },
    position: {
      type: Sequelize.STRING,
      allowNull: false
    },
    no_use1: {
      type: Sequelize.STRING,
      allowNull: false
    },
    ref: {
      type: Sequelize.STRING,
      allowNull: false
    },
    alt: {
      type: Sequelize.STRING,
      allowNull: false
    },
    no_use2: {
      type: Sequelize.STRING,
      allowNull: false
    },
    no_use3: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  associations: function() {
    tilapia_2_variation.belongsToMany(tilapia_2_information,{
      through: 'tilapia2_variation_information'
    });
  }
};
