# FrontEnd

> > pages

-  Homepage
   / see comments overall experience / carousel of cocktails / button generate cocktails

-  DetailsPage

/details of the random cocktails

-  FindCocktailsPage

/ login required / `search` and `add` ingredients as a `string` to make your own

\*\*\* `expand` - admin page create events special themes and specific cocktails can be added
-EventsPage

> > components

> > store

# BackEnd

> > tables

-  users

-  cocktail

-  ingredient

-  comment

-  review

> > relations

-  users -> (hasMany cocktails - hasMany comments - hasMany reviews),(belongsToMany cocktails through `favorite`)

-  cocktails -> (belongsTo user) - (belongsToMany users through `favorite`)

-  comments -> ( belongsTo user)

-  review -> (belongsTo user)

// when we render multiple functionalities inside the same page it can be that the components of that page dont get rendered on the right way - better keep components separate( carousel from randomCocktail button)

// [TODO]
// ADD FOTO STRING OR UPLOAD FEATURE
// Fix Validation after creation of cocktail (filtered array)
// fix bug after create a user and add comment comment list disappear
//

[questions]
// review .. user or cocktail thunk

> > its up to as and doesnt even matter where

// review .. do i have to take cocktail from params or should i send it with the body?

> > for the backend is better if we take the id from the cocktailId from the params

//
// way to approach it ->
// -> B - first send all the needed data from the back-end to avoid the refresh page errors
// B - icnlude all comments and cocktails id where is the fav~table (login - signup - me)
// B - after we rename join table `as`: `userFavorites` in the (model and route) so its more clear the data that we get from the join table
// F -- when we have to add the favorite to a card we need to get the id from params
// F -- check redux state in console and access favorites
// F --- in the selector we make a condition and we check if the id === cocktailId and we `parseInt` the id , its a string so its gonna return a false value if we dont parse it
// F ---- we add the fav in our cardComponents (DetailsPage) so it takes the value
// F ----- in the cardModal (component) we add an empty border value for the unFavorite case and make the conditional rendering

// remove and add
// we need a singe endpoint to add and remove FAVORITES
// remove from favorite we have to check if the match exists and remove it from the list
