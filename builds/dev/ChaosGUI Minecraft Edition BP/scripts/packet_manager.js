const packetCache = [];

export function sendPacket(type, fromID, toID, data = {}) {
    const overworld = world.getDimension("overworld");

    // spawn a packet somewhere safe (void or buried)
    const packet = overworld.spawnEntity("utility:data_packet", { x: 0, y: 350, z: 0 });

    // save event name and data
    packet.setDynamicProperty("type", type);
    packet.setDynamicProperty("data", JSON.stringify(data));
    packet.setDynamicProperty("to", toID ?? "");
    packet.setDynamicProperty("from", fromID ?? "");

    return packet;
}

function updatePacketCache() {
    packetCache.length = 0;
    try {
        const dim = world.getDimension("overworld");
        const packets = dim.getEntities({ type: "chaosgui:data_packet" });
        for (const p of packets) packetCache.push(p);
    } catch (e) {
        // Ignore
    }
}

export function getPacketsForTarget(targetID) {
    if (!targetID) return [];
    const out = [];
    for (const p of packetCache) {
        const to = p.getDynamicProperty("to") ?? "";
        if (to === targetID) out.push(p);
    }
    return out;
}

export function getBroadcastPackets() {
    return packetCache.filter(p => (p.getDynamicProperty("to") ?? "") === "");
}

export function removePacket(packetEntity) {
    try { packetEntity.remove(); } catch (e) { /* ignore */ }
}

system.runInterval(() => {
    updatePacketCache();
}, 1);
