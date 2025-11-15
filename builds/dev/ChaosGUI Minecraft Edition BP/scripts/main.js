import {
    world,
    system
} from "@minecraft/server";

import "./components/sex.js"
import "./components/creeper_girl_mentality.js"
import "./components/creeper_girl_body.js"
import "./components/endergirl_mentality.js"
import "./components/endergirl_body.js"

export function sendPacket(type, data = {}) {
    const overworld = world.getDimension("overworld");

    // spawn a packet somewhere safe (void or buried)
    const packet = overworld.spawnEntity("utility:data_packet", { x: 0, y: 350, z: 0 });

    // save event name and data
    packet.setDynamicProperty("type", type);
    packet.setDynamicProperty("data", JSON.stringify(data));

    return packet;
}

function mainTick() {
    if (system.currentTick === 400) {
        world.sendMessage("All systems GO!");
    }
    system.run(mainTick);
}

system.run(mainTick);