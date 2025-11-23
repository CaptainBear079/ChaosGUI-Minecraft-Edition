export default defineComponent(({ name, schema, template }) => {
	name('chaosgui:creeper_girl_mentality')
	schema({
		default_embarrasment: {
			type: "float",
			default: 0.0
		},
		sex: {
			type: "float",
			default: 95.0
		},
		masturbation: {
			type: "float",
			default: 40.0
		},
		default_stability: {
			type: "float",
			default: 95.0
		},
		painful_sex: {
			type: "float",
			default: 5.0
		},
		mutilation: {
			type: "float",
			default: 15.0
		}
	})

	template(({ default_embarrasment, sex, masturbation, default_stability, painful_sex, mutilation }) => ({
		"minecraft:dynamic_property": {
			"chaosgui:default_embarrasment": default_embarrasment,
			"chaosgui:sex": sex,
			"chaosgui:masturbation": masturbation,
			"chaosgui:default_stability": default_stability,
			"chaosgui:painful_sex": painful_sex,
			"chaosgui:mutilation": mutilation
		}
	}))
})
