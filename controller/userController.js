const { handleGetLocation, handleGetTemperature } = require('../helper/index');

const getUser = async (req, res) => {
    const { visitor_name } = req.query;

    if (!visitor_name) {
        return res.send("Hey name is required");
    }

    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    const userLocation = await handleGetLocation(ip);
    const userTemp = await handleGetTemperature(userLocation);

    res.status(200).json({
        "client_ip": ip,
        "location": userLocation,
        "greeting": `Hello, ${visitor_name}!, the temperature is ${userTemp} degrees Celsius in ${userLocation}`
    });
}

module.exports = getUser;
