const User = require('./User');
const Post = require('./Post');

// create associations User can post as many posts as wanted 
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// Many posts can only belong to one user
Post.belongsTo (User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };

