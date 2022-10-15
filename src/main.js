import { createApp, provide, h } from 'vue'
import App from './App.vue'
import store from './store'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloLink, concat } from "apollo-link";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://testdrive.kompletecare.com/graphql',
})

// Authorization
const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
//   const token = localStorage.getItem('token');
    const token = "2027|n96IFfFIi0p9zCDTgbOMNQ34I3MFPoObJJWuikks"
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
    return forward(operation);
  });


// Create the apollo client
const apolloClient = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache()
})

const app = createApp({
    setup(){
        provide(DefaultApolloClient, apolloClient); 
    },
    render: ()=> h(App)
})
app.use(store).mount("#app");

// createApp(App).use(store).mount('#app')
