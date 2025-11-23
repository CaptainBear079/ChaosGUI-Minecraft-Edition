export default defineComponent(({ name, schema, template }) => {
    name('chaosgui:sex')
    schema({
        phy_gender: {
            type: "string",
            enum: ["neutral", "male", "female"],
            default: "neutral"
        },
        virgin: {
            type: "boolean",
            default: true
        }
    })

    template(({ phy_gender, virgin }) => ({
        "minecraft:dynamic_property": {
            "chaosgui:phy_gender": phy_gender,
            "chaosgui:virgin": virgin
        }
    }))
})
