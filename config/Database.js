const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://shruthi1193_db_user:Tl0MEJHdAH@cluster0.0o0njhk.mongodb.net/?appName=Cluster0')
.then(() => {
    console.log("DB connected");
})
.catch(err => {
    console.log(err)
});
