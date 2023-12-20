/* ALL INSTRUCTIONS FOR RECIPE ID = 1 */
SELECT i.description
FROM instruction as i
JOIN recipe AS R ON i.recipe_ID = r.ID
WHERE r.ID = 1;

/* ALL INGREDIENTS FOR RECIPE ID = 1 */
SELECT  ri.quantity, i.name, i.kcal, i.unité
FROM recipe_ingredient AS ri
JOIN recipe as R ON r.ID= ri.recipe_ID
JOIN ingredient AS i ON i.ID=ri.ingredient_ID
WHERE r.ID = 1;

/* ALL INFORMATIONS RELATED TO RECIPE ID = 1 */
SELECT * FROM recipe
WHERE ID = 1;

/* FAVS RELATED TO RECIPE ID = 1 */
SELECT fav.ID FROM fav
JOIN recipe ON fav.recipe_ID = recipe.ID;
WHERE recipe.ID = 1;

/* COMMENTS RELATED TO RECIPE ID = 1 */




