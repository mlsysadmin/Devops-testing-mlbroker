'use strict'

const { createHash } = require("node:crypto");

module.exports = (passphrase) => {

    const hash = createHash("sha512").update(passphrase).digest("hex");

    return hash;

}