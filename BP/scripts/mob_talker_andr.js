import { system, world } from "@minecraft/server"
import * as PM from "./../../packet_manager.js"
// chaosgui:sex
const PHY_GENDER = "chaosgui:phy_gender";
const VIRGIN = "chaosgui:virgin";

// chaosgui:endergirl_mentality
const DEFAULT_EMBARRASMENT = "chaosgui:default_embarrasment";
const SEX = "chaosgui:sex";
const MASTURBATE = "chaosgui:masturbate";

// chaosgui:endergirl_body
const DEFAULT_AROUSAL = "chaosgui:default_arousal";
const AROUSAL_ADDITION = "chaosgui:arousal_addition";
const CLIT_SENSITIVITY = "chaosgui:clit_sensitivity";

system.runInterval(() => {
    for (const entity of world.getAllEntities()) {
        if (entity.typeId !== "chaosgui:mob_talker_andr") continue;

        // Logic
        const phy_gender = entity.getDynamicProperty(PHY_GENDER);
        if (entity.hasTag("chaosgui:event.sex_start")) {
            const embarrasment = entity.getDynamicProperty(DEFAULT_EMBARRASMENT);
            const sex = entity.getDynamicProperty(SEX);
            let new_embarrasment = (float)(embarrasment + sex);
            entity.setDynamicProperty(DEFAULT_EMBARRASMENT, new_embarrasment);
            if (entity.hasTag("chaosgui:event.sex.vaginal")) {
                entity.setDynamicProperty(VIRGIN, false);
            }
            if (entity.hasTag("chaosgui:event.masturbate.vaginal")) {
                const arousal = entity.getDynamicProperty(DEFAULT_AROUSAL);
                const arousal_addition = entity.getDynamicProperty(AROUSAL_ADDITION);
                const arousal_change = (arousal_addition + entity.getDynamicProperty(CLIT_SENSITIVITY));
                let new_arousal = (float)(arousal + arousal_change);
                entity.setDynamicProperty(DEFAULT_AROUSAL, new_arousal);
            }
            else {
                const arousal = entity.getDynamicProperty(DEFAULT_AROUSAL);
                const arousal_addition = entity.getDynamicProperty(AROUSAL_ADDITION);
                let new_arousal = (float)(arousal + (arousal_addition / 2));
                entity.setDynamicProperty(DEFAULT_AROUSAL, new_arousal);
            }
            entity.removeTag("chaosgui:event.sex_start");
            entity.addTag("chaosgui:event.sex");
        }
        else if (entity.hasTag("chaosgui:event.sex")) {
            if (entity.hasTag("chaosgui:event.masturbate.vaginal")) {
                const arousal = entity.getDynamicProperty(DEFAULT_AROUSAL);
                const arousal_addition = entity.getDynamicProperty(AROUSAL_ADDITION);
                const arousal_change = (arousal_addition + entity.getDynamicProperty(CLIT_SENSITIVITY));
                let new_arousal = (float)(arousal + arousal_change);
                entity.setDynamicProperty(DEFAULT_AROUSAL, new_arousal);
            }
            else {
                const arousal = entity.getDynamicProperty(DEFAULT_AROUSAL);
                const arousal_addition = entity.getDynamicProperty(AROUSAL_ADDITION);
                let new_arousal = (float)(arousal + (arousal_addition / 2));
                entity.setDynamicProperty(DEFAULT_AROUSAL, new_arousal);
            }
        }
        else if (entity.hasTag("chaosgui:event.sex_end")) {
            const embarrasment = entity.getDynamicProperty(DEFAULT_EMBARRASMENT);
            const sex = entity.getDynamicProperty(SEX);
            let new_embarrasment = (float)(embarrasment - sex);
            entity.setDynamicProperty(DEFAULT_EMBARRASMENT, new_embarrasment);
            if (entity.hasTag("chaosgui:event.sex.vaginal" || entity.hasTag("chaosgui:event.sex.oral") || entity.hasTag("chaosgui:event.sex.anal"))) {
                entity.removeTag("chaosgui:event.sex.vaginal");
                entity.removeTag("chaosgui:event.sex.oral");
                entity.removeTag("chaosgui:event.sex.anal");
            }
            entity.removeTag("chaosgui:event.sex_end");
        }
        if (entity.hasTag("chaosgui:event.masturbate_start")) {
            const embarrasment = entity.getDynamicProperty(DEFAULT_EMBARRASMENT);
            const masturbate = getDynamicProperty(MASTURBATE);
            let new_embarrasment = (float)(embarrasment + masturbate);
            entity.setDynamicProperty(DEFAULT_EMBARRASMENT, new_embarrasment);
            if (entity.hasTag("chaosgui:event.masturbate.vaginal")) {
                const arousal = entity.getDynamicProperty(DEFAULT_AROUSAL);
                const arousal_addition = entity.getDynamicProperty(AROUSAL_ADDITION);
                const arousal_change = (arousal_addition + entity.getDynamicProperty(CLIT_SENSITIVITY));
                let new_arousal = (float)(arousal + arousal_change);
                entity.setDynamicProperty(DEFAULT_AROUSAL, new_arousal);
            }
            else {
                const arousal = entity.getDynamicProperty(DEFAULT_AROUSAL);
                const arousal_addition = entity.getDynamicProperty(AROUSAL_ADDITION);
                let new_arousal = (float)(arousal + (arousal_addition / 2));
                entity.setDynamicProperty(DEFAULT_AROUSAL, new_arousal);
            }
            entity.removeTag("chaosgui:event.masturbate_start");
            entity.addTag("chaosgui:event.masturbate");
        }
        else if (entity.hasTag("chaosgui:event.masturbate")) {
            if (entity.hasTag("chaosgui:event.masturbate.vaginal")) {
                const arousal = entity.getDynamicProperty(DEFAULT_AROUSAL);
                const arousal_addition = entity.getDynamicProperty(AROUSAL_ADDITION);
                const arousal_change = (arousal_addition + entity.getDynamicProperty(CLIT_SENSITIVITY));
                let new_arousal = (float)(arousal + arousal_change);
                entity.setDynamicProperty(DEFAULT_AROUSAL, new_arousal);
            }
            else {
                const arousal = entity.getDynamicProperty(DEFAULT_AROUSAL);
                const arousal_addition = entity.getDynamicProperty(AROUSAL_ADDITION);
                let new_arousal = (float)(arousal + (arousal_addition / 2));
                entity.setDynamicProperty(DEFAULT_AROUSAL, new_arousal);
            }
        }
        else if (entity.hasTag("chaosgui:event.masturbate_start")) {
            const embarrasment = entity.getDynamicProperty(DEFAULT_EMBARRASMENT);
            const masturbate = getDynamicProperty(MASTURBATE);
            let new_embarrasment = (float)(embarrasment - masturbate);
            entity.setDynamicProperty(DEFAULT_EMBARRASMENT, new_embarrasment);
        }
    }
})