import {
    world,
    system
} from "@minecraft/server";

import "./packet_manager.js"
import "./components/sex.js"
import "./components/creeper_girl_mentality.js"
import "./components/creeper_girl_body.js"
import "./components/endergirl_mentality.js"
import "./components/endergirl_body.js"

function mainTick() {
    if (system.currentTick === 400) {
        world.sendMessage("All systems GO!");
    }
    system.run(mainTick);
}

system.run(mainTick);