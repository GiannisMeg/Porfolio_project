svg icons navigate to svgIcons - material icons > search for the pref icons and import to your page /

-  `startIcon={<SettingsIcon />}`

-  create file `theme`

-  we can create a `provider` ans wrap out `app` inside there by adding a custom `theme`

//fetch cocktails in array format

let mycocktails = [];
useEffect(() => {
const url = "https://thecocktaildb.com/api/json/v1/1/search.php?s=m";

    	const drinks = fetch(url)
    		.then((res) => res.json())
    		.then((data) => {
    			// console.log(data);

    			data.drinks.forEach(function (item) {
    				// console.log(item);
    				mycocktails.push({
    					name: item.strDrink,
    					category: item.strCategory,
    					alcoholic: item.strAlcoholic,
    					glass: item.strGlass,
    					instructions: item.strInstructions,
    					imageUrl: item.strDrinkThumb,
    					ingredients: [
    						item.strIngredient1 + item.strMeasure1,

    						item.strIngredient2,
    						item.strMeasure2,

    						item.strIngredient3 + item.strMeasure3,

    						item.strIngredient4 + item.strMeasure4,

    						item.strIngredient5 + item.strMeasure5,

    						item.strIngredient6 + item.strMeasure6,
    					].join(","),
    				});
    			});
    		});
    }, []);

    setTimeout(() => console.log("start", JSON.stringify(mycocktails)), 2000);
