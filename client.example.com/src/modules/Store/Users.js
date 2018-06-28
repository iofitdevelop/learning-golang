export default {
	namespaced:true,
	state:{
		items:[],
		version:'1'
	},
	actions:{
		index({ dispatch,commit,getters,state,rootGetters,rootState },data) {
			return new Promise(async (resolve,reject) => {

				let res = await rootState.$root.$server.request(`/v${ state.version }/users`)
				
				commit('setItems',res || [])

				return resolve()
			})
		},
		create({ dispatch,commit,getters,state,rootGetters,rootState },new_user) {
			return new Promise(async (resolve,reject) => {
				
				let res = await rootState.$root.$server.request(`/v${ state.version }/users`,new_user,'POST')

				return resolve(res)
			})
		}
	},
	mutations:{
		setItems(state,items) {
			state.items = items || []
		}
	}

}