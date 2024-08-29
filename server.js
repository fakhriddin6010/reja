const http = require("http");
const mongodb = require("mongodb");

let db;
// const connectionString = "mongodb+srv://deni:f5GzlzdDaZWsX14f@cluster0.yf1o8.mongodb.net/Reja";
const connectionString = "mongodb+srv://deni:f5GzlzdDaZWsX14f@cluster0.yf1o8.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";


mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true}, 
    (err,client) => {
        if(err) console.log("ERROR on connection MongoDB");
        else{
            console.log("MongoDB connection succeed")
            module.exports=client;
            const app =require("./app");
            const server = http.createServer(app);
            let PORT = 6002; // 
            server.listen(PORT,function(){
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
});

        }
    } );
