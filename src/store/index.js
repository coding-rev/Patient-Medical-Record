import { createStore } from 'vuex'
import { gql } from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { watchEffect, computed } from 'vue';


export default createStore({
  state: {
    xrayList: [],
    ultrasoundList: []
  },
  mutations: {
    update_xrayList: (state, newData) => state.xrayList = newData,
    update_ultrasoundList: (state, newData) => state.ultrasoundList = newData,
  },
  actions: {
    async retrieve_data({ commit }){
      const ALL_INVESTIGATION_QUERY = gql`
        query {
          investigations{
              id,
              title,
              type{title}
          }
        }
        `;
      const { result } = useQuery(ALL_INVESTIGATION_QUERY);
      const investigations = await computed(() => result.value?.investigations ?? [])
      watchEffect(() =>{
        commit('update_xrayList', investigations.value.filter((record)=> record.type.title === "X-Ray"))
        commit('update_ultrasoundList', investigations.value.filter((record)=> record.type.title === "Ultrasound Scan"))
      })
    }
  },
  modules: {
  }
})

