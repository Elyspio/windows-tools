const Action = {
	CHANGE_COMPONENT: {
		TYPE: "CHANGE_COMPONENT",
		PAYLOAD: {
			FUN: {
				RENAME: "CHANGE_COMPONENT_ANIME_RENAME",
				FUEL_WORKER: "FUEL_WORKER"
			},
			DEV: {
				START_SERVERS: "CHANGE_COMPONENT_WEB_START_SERVER"
			},
			NONE: "CHANGE_COMPONENT_NONE"
		}
	},

	FUEL_FINDER : {
		CHANGE_FUEL : {TYPE : "FUEL_FINDER_CHANGE_FUEL"},
		CHANGE_FORMAT : {TYPE: "FUEL_FINDER_CHANGE_FORMAT"},
		CHANGE_CP : {TYPE: "FUEL_FINDER_CHANGE_CP"},
		REORDER : {TYPE : "FUEL_FINDER_REORDER"},
		CHANGE_SORTER : {TYPE : "FUEL_FINDER_CHANGE_SORTER"}


	}
};


export {
	Action
}
