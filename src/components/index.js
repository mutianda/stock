import CoolModal from './cool-modal'
const components = {CoolModal}
const install = function(Vue) {
	Object.keys(components).forEach(key => {
		Vue.component(key, components[key])
	})
	
}
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export default {
	version: '1.0.0',
	install,
	CoolModal,
}