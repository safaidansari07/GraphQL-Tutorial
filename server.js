import {ApolloServer,gql} from 'apollo-server'
// import {ApolloServerPlugin} from '@apollo/server';
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'


import typeDefs  from './schema.js'

import resolvers  from './resolvers.js'






const server = new ApolloServer({
    typeDefs , 
    resolvers, 
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})


server.listen().then(({url})=>{
    console.log(` Server ready a ${url}`);
})