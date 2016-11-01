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
    "5'frinkinSequence": {
      type: Sequelize.STRING,
      allowNull: false
    },
    "3'frinkinSequence": {
      type: Sequelize.STRING,
      allowNull: false
    },
    start: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    end: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  associations: function() {
    tilapia_2_SSR.belongsToMany(tilapia_2_VAR,{
      through: 'tilapia_2_SSR_VAR'
    });
  },
  options: {
    timestamps: false,
    tableName: 'tilapia_2_ssr'
  }
};
