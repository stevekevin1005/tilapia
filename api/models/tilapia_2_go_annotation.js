module.exports = {
  attributes: {
    geneid: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    goid: {
      type: Sequelize.STRING,
      allowNull: false
    },
    source: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  associations: function() {
    tilapia_2_go_annotation.belongsToMany(tilapia_2_information,{
      through: 'tilapia2_variation_information'
    });
    tilapia_2_go_annotation.hasOne(tilapia_2_go_term);
  }
};
