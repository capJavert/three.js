const { Server } = require("socket.io");
const { createServer } = require("http");

const httpServer = createServer().listen(7777)
const io = new Server(httpServer, {
    cors: {
        origin: "*"
    },
    allowEIO3: true
});

io.on("connection", (socket) => {
    socket.on("face", (args) => {
        io.emit('face', args);
    });
});
