module.exports = {
  attributes: {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false, 
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    term_type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    acc: {
      type: Sequelize.STRING,
      allowNull: false
    },
    is_obsolete: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    is_root: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    is_relation: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  associations: function() {
    tilapia_2_go_term.belongsTo(tilapia_2_go_annotation);
  }
};
