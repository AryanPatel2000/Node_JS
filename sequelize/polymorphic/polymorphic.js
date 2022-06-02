const uppercaseFirst = str => `${str[0].toUpperCase()} ${str.substr(1)}`;

const {Sequelize, Model, DataTypes} = require('sequelize')

const sequelize = new Sequelize('polymorphic_db', 'root', '', {
    dialect: 'mysql'
})
//sequelize.authenticate().then( () => {console.log('SUCCESS')}) .catch( (err) => {console.log(err)})

class Image extends Model{}
Image.init({
    title: DataTypes.STRING,
    url: DataTypes.STRING
}, {sequelize, modelName:'image', timestamps:false})

class Video extends Model{}
Video.init({
    title: DataTypes.STRING,
    text: DataTypes.STRING
}, { sequelize, modelName: 'video', timestamps:false })

class Comment extends Model{
    getCommentable(options){
        if(!this.commentableType) return Promise.resolve(null);
        const mixinMethodName = `get${uppercaseFirst(this.commentableType)}`;
        return this[mixinMethodName](options);
    }
}

Comment.init({
    title: DataTypes.STRING,
    commentableId: DataTypes.INTEGER,
    commentableType: DataTypes.STRING
}, {sequelize, modelName:'comment', timestamps:false})

Image.hasMany(Comment, {
    foreignKey: 'commentableId',
    constraints: false,
    scope: {
        commentableType:'image'
    }
});
Comment.belongsTo(Image, {foreignKey:'commentableId', constraints:false});

Video.hasMany(Comment, {
    foreignKey: 'commentableId',
    constraints: false,
    scope:{
        commentableType:'video'
    }
});
Comment.belongsTo(Video, {foreignKey:'commentableId', constraints:false})

Comment.findAll({
    include:[Image, Video],
   
 }, { raw:true})
 .then( (res) => {console.log(JSON.stringify(res, null, 2))})
 .catch( (err) => {console.log(err)})





