export const selectAllCocktails = (state) => state.cocktail.cocktails;
export const selectOneCocktail = (id) => (state) =>
	state.cocktail.cocktails[id];
// export const selectCocktailById = (id) => (state) => state.cocktail.cocktails[id];
