module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('votes', 'ispublished', {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    }),
  ]),

  down: (queryInterface, Sequelize) => Promise.all([queryInterface.removeColumn('votes', 'positionId')]),
};