const express = require('express');
const app = express();

// Flash
const flash = require('express-flash');
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(cookieParser("RANDOMDFJKLAFJLKA"));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());
// End Flash

// Method Override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
// End Method Override

// Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
// End Body Parser

// Configs
const systemConfig = require("./configs/system");
app.locals.prefixAdmin = systemConfig.prefixAdmin;
// End Configs

// Routes
const routeAdmin = require("./routes/admin/index.route");
// End Routes

// Dotenv
require('dotenv').config();
const port = process.env.PORT;
// End Dotenv

// Pug
app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");
// End Pug

// Public
app.use(express.static(`${__dirname}/public`));
// End Public

routeAdmin(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});