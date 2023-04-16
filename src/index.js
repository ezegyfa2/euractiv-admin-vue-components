export default {
	install(Vue) {
		require('blue-admin-vue-components').default.install(Vue)

		require('./Templates/templateRegister').default.install()
	}
}