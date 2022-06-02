const {Sequelize} = require('sequelize')

const sequelize = require('./conn')

const Post = sequelize.define('post', {
    content:Sequelize.STRING
}, {timestamps:false, tableName:'tbl_post'})

const Reaction = sequelize.define('reaction', {
    type:Sequelize.STRING
}, {timestamps:false, tableName:'tbl_reaction'})

Post.hasMany(Reaction);
Reaction.belongsTo(Post);

//sequelize.sync({alter:true})

//fill tables with some data


const makePostWithReaction = async(content, reactionType) => {
    const post = await Post.create({content});
    await Reaction.bulkCreate(
        reactionType.map(type => ({type, postId:post.id}))
    );
    return post;
}
makePostWithReaction('Winter', 
        ['Like', 'Happy', 'Happy', 'Like', 'Like', 'Like', 'Like', 'Sad', 'Happy', 'Like']
    );

makePostWithReaction('Summer', 
    ['Sad', 'Sad', 'Happy', 'Like', 'Sad', 'Like', 'Happy', 'Sad', 'Happy', 'Sad']
);

makePostWithReaction('Monsoon', 
        ['Happy', 'Like', 'Happy', 'Happy', 'Like', 'Like', 'Happy', 'Happy', 'Happy', 'Happy']
);


Reaction.findAll({raw:true}) .then( (res) => {console.log(res)})

Post.findAll({
    attributes: {
        include: [
            [
                sequelize.literal(`(
                    SELECT COUNT(*)
                    FROM tbl_reaction as reaction
                    WHERE
                        reaction.postId = post.id
                        AND
                        reaction.type = 'Happy'
                )`),
                'Happy_ReactionCount'
            ]
        ]
    },
    raw:true
})
.then( (res) => {console.log(res)})
.catch( (err) => {console.log(err)})

//  Ordering
Post.findAll({
    attributes: {
        include: [
            [
                sequelize.literal(`(
                    SELECT COUNT(*)
                    FROM tbl_reaction as reaction
                    WHERE
                        reaction.postId = post.id
                        AND
                        reaction.type = 'Happy'
                )`),
                'Happy_ReactionCount'
            ]
        ]
    },
    order:[
        [sequelize.literal('Happy_ReactionCount'), 'DESC']
    ],
    raw:true
})
.then( (res) => {console.log(res)})
.catch( (err) => {console.log(err)})