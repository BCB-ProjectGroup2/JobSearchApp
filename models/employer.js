module.exports = function(sequelize, DataTypes) {
  var Employer = sequelize.define("Employer", {
    department_name: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company_size: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company_maturity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    office_culture: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    role_seniority: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    role_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    salary_range: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_time: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    upward_mobility: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    international_offices: {
      type: DataTypes.INTEGER,
      allowNull: false
    },


  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Employer;
};