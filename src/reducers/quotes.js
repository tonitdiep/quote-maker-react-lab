export default (state = [], action) => {
let index;
let quote;
  switch(action.type) {
    case 'ADD_QUOTE':
    // console.log('action in reducers', action)
      return state.concat(action.quote)

    case 'REMOVE_QUOTE':
        // console.log('remove in reducers', action)
          return state.filter(quote => quote.id !== action.quoteId);
  
    case 'UPVOTE_QUOTE':
        // console.log('upvote reducers', action)
        index = state.findIndex(quote => quote.id === action.quoteId);
        quote = state[index];

        return [
          ...state.slice(0, index),
          Object.assign({}, quote, { votes: quote.votes += 1 }),
          ...state.slice(index + 1)
        ];
        // console.log('upvote in reducers', action)
          // return state.filter(quote => quote.id !== action.quoteId);
      case 'DOWNVOTE_QUOTE':
            index = state.findIndex(quote => quote.id === action.quoteId);
            quote = state[index];
            if (quote.votes > 0) {
              return [
                ...state.slice(0, index),
                Object.assign({}, quote, { votes: quote.votes -= 1 }),
                ...state.slice(index + 1)
              ];
            }
            return state;
            default: 
              return state;
  
          }

}
