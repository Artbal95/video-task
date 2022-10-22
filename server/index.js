const app = require("./app/app");
const { PORT } = require("./config/config");


app.listen(PORT, () => {
    console.log(`Server Start on ${PORT}`);
});