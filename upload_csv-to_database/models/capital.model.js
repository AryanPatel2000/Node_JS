module.exports = (sequelize, Sequelize) => {
    const Capital = sequelize.define('capital', {
        state : {
            type: Sequelize.STRING,
            allowNull : false
        },
        capital : {
            type : Sequelize.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true,
        timestamps:false
    })

    return Capital;
}