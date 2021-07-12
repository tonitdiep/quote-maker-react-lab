import React from 'react';

const QuoteCard = ({quote, removeQuote, upvoteQuote, downvoteQuote}) => {
      //   const handleEdit = (quote) => {
      //     editRecipe(quote.id)
      // }
  console.log("inside quote card", quote)  
  return (
    
  <div>

    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
   
          <p>{quote.content}</p>




          <footer>- author <cite title="Source Title">{quote.author}</cite></footer>
          {/* <footer>- favQuote <cite title="Source Title">{quote.favQuote}</cite></footer> */}

          {quote.favQuote ? <p>Fav Quote Checked </p> : <p>Fav Quote Unchecked </p> }
          {/* <button onClick={() => handleEdit(quote)}>Edit</button>  */}

        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            onClick={() => upvoteQuote(quote.id)}
            className="btn btn-primary"
          >
            Upvote
          </button>




          <button
            type="button"
            onClick={() => downvoteQuote(quote.id)}
            className="btn btn-secondary"
          >
            Downvote
          </button>
          <button
            type="button"
            onClick={() => removeQuote(quote.id)}
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>Votes: {quote.votes}</div>
      </div>
    </div>
  </div>

  )}


export default QuoteCard;




          {/* <input
            type="button"
            onClick={() => favQuote(quote.id)}
            className="btn btn-primary"
          >
            favQuote
          </input> */}