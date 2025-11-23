import { system, world } from "@minecraft/server"
import * as PM from "./../../packet_manager.js"

const PHY_GENDER = "chaosgui:phy_gender";
const VIRGIN = "chaosgui:virgin";

system.runInterval(() => {
    for (const entity of world.getAllEntities()) {
        if (entity.typeId !== "chaosgui:mob_talker_cupa") continue;

        // Logic
        const phy_gender = getDynamicProperty(PHY_GENDER);
    }
})