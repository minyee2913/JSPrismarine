const DataPacket = require('./packet');
const Identifiers = require('../identifiers');

'use strict';

class ItemStackRequestPacket extends DataPacket {
    static NetID = Identifiers.ItemStackRequestPacket

    requests = []

    decodePayload() {
        for (let i = 0; i < this.readUnsignedVarInt(); i++) {
            this.requests.push(this.readItemStackRequest());
        }
    }
}
module.exports = ItemStackRequestPacket;