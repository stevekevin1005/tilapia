module.exports = {
  attributes: {
    geneId: {
      type: Sequelize.STRING,
      allowNull: false
    },
    contig: {
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
    },
    region: {
      type: Sequelize.STRING,
      allowNull: false
    },
    parent:{
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  associations: function() {
    tilapia_2_information.belongsToMany(tilapia_1_SSR,{
      through: 'tilapia2_SSR_information'
    });
    tilapia_2_information.belongsToMany(tilapia_2_variation,{
      through: 'tilapia2_variation_information'
    });
  }
};
