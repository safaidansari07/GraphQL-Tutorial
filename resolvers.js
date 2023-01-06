import { users  , quotes} from './fakeDB.js'


const resolvers  = {
    
    Query : {
        users : ()=> users , 
        user:(_,{id})=> users.find(user => user.id  == id ),
        quotes: ()=> quotes, 
        iquote:(_,{by})=> quotes.filter(quote=> quote.by == by )         
    }, 
    User : {
        quotes:(user)=>quotes.filter(quote=> quote.by == user.id )
    } 
}

export default resolvers;