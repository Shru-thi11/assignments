const posts = [
    {
        name: "Michael Choi",
        createdAt: "23-01-2013",
        message: "This is my message    This is my message This is my message This is my messageThis is my message"
    },

    {
        name: "john doe",
        createdAt: "23-01-2013",
        message: "This is my message    This is my message This is my message This is my messageThis is my message"
    }
];

exports.getAllPosts = () => {
    return posts;
};

exports.addPost = (newPost) => {
    posts.unshift(newPost); // Adds to the top of the feed
};