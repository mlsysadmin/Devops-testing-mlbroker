const LISTING_ROUTER = require("./_listing.routes/listing.routes");
const SELLER_ROUTER = require("./_listing.routes/seller/seller.routes");
const USER_ROUTER = require("./_user.routes/user.routes");
const SUPPORT_ROUTER = require("./_listing.routes/support/support.routes");
const PUBLIC_ROUTER = require("./public/public.routes");
const GOOGLE_ROUTER = require('./google.route');

module.exports = {
    USER_ROUTER,
    LISTING_ROUTER,
    SELLER_ROUTER,
    SUPPORT_ROUTER,
    PUBLIC_ROUTER,
    GOOGLE_ROUTER
}