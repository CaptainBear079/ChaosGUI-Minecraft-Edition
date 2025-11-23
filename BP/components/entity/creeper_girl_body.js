export default defineComponent(({ name, schema, template }) => {
    name('chaosgui:creeper_girl_body')

    schema({
        has_egg_cell: {
            type: "boolean",
            default: true
        },
        last_birth_control_pill: {
            type: "number",
            default: -1
        },
        female_condom: {
            type: "boolean",
            default: false
        },
        spiral: {
            type: "boolean",
            default: false
        },
        default_arousal: {
            type: "float",
            default: 35.5
        },
        arousal_addition: {
            type: "float",
            default: 1.0
        },
        breasts: {
            type: "string",
            enum: ["flat", "small", "medium", "big", /* Why? */"giant"],
            default: "flat"
        },
        ass: {
            type: "string",
            enum: ["small", "medium", "big", /* Again, why? */"giant"],
            default: "small"
        },
        mouth_deepth_in_cm: {
            type: "float",
            default: 8.1
        },
        clit_sensitivity: {
            type: "float",
            default: 9.8
        },
        womb_capacity_in_l: {
            type: "float",
            default: 5.7
        },
        ass_capacity_in_l: {
            type: "float",
            default: 7.1
        },
        vagina_width_in_cm: {
            type: "float",
            default: 2.5
        },
        max_children: {
            type: "int",
            default: 4
        },
        period_in_ticks: {
            type: "int",
            default: 744000
        }
    })

    template(({ has_egg_cell, last_birth_control_pill, female_condom,
        spiral, default_arousal, arousal_addition, breasts, ass,
        mouth_deepth_in_cm, clit_sensitivity, womb_capacity_in_l,
        ass_capacity_in_l, vagina_width_in_cm, max_children,
        period_in_ticks }) => ({
            "minecraft:dynamic_property": {
                "chaosgui:has_egg_cell": has_egg_cell,
                "chaosgui:last_birth_controll_pill": last_birth_control_pill,
                "chaosgui:female_condom": female_condom,
                "chaosgui:spiral": spiral,
                "chaosgui:default_arousal": default_arousal,
                "chaosgui:arousal_addition": arousal_addition,
                "chaosgui:breasts": breasts,
                "chaosgui:ass": ass,
                "chaosgui:mouth_deepth_in_cm": mouth_deepth_in_cm,
                "chaosgui:clit_sensitivity": clit_sensitivity,
                "chaosgui:womb_capacity_in_l": womb_capacity_in_l,
                "chaosgui:ass_capacity_in_l": ass_capacity_in_l,
                "chaosgui:vagina_width_in_cm": vagina_width_in_cm,
                "chaosgui:max_children": max_children,
                "chaosgui:period_in_ticks": period_in_ticks
            }
        }))
})