// TODO: Create action creators as defined in test

export const addQuote = quote => {
    return {
      type: 'ADD_QUOTE',
      quote: Object.assign({}, quote, { votes: 0 })
    }
  }

  export const removeQuote = quoteId => {
      console.log('removeQuote', removeQuote)
    return {
      type: 'REMOVE_QUOTE',
      quoteId
    //   quote: Object.assign({}, quote, { votes: 0 })
    }
  }

  export const upvoteQuote = quoteId => {
    console.log('upvoteQuote', quoteId)
  return {
    type: 'UPVOTE_QUOTE',
    quoteId
  //   quote: Object.assign({}, quote, { votes: 0 })
  }
}

// export const favQuote = quoteId => {
//   console.log('favQuote', quoteId)
// return {
//   type: 'FAV_QUOTE',
//   quoteId
// //   quote: Object.assign({}, quote, { votes: 0 })
// }
// }
export const downvoteQuote = quoteId => {
    return {
      type: 'DOWNVOTE_QUOTE',
      quoteId
    }
  }