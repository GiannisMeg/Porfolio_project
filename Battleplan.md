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
