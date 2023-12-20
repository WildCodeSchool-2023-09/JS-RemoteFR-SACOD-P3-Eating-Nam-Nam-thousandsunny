#Inject testing data for DB
# CAUTION
# Please make sure you're in the right DB before launching script, if there is any data still existing, some rows could be duplicated.

INSERT INTO user(username, email, firstname, lastname, birthdate, password, is_admin)
VALUES
    ('tristanZ', 'tristan.zvunka@gmail.com','tristan','zvunka','1992-11-26', 'test1',1 ),
    ('flavienG', 'flavien.gaujardd@gmail.com', 'flavien','giraud','1988-04-12', 'test2',1),
    ('elieR', 'elie.rakoto@gmail.com','elie','Rakoto','1990-10-14','test3',0),
    ('christopheC','christophe.bruno@gmail.com','Christophe','Bruno','1990-10-14','test4',1),
    ('hugoD','hugo.durand@gmail.com','Hugo','Durand','1989-02-05','test5',0)
;

INSERT INTO recipe (name, user_ID, prep_time, nb_people, difficulty,image )
VALUES
    ('oeufs au plat',1, 15, 1, 'facile','jetbrains://web-storm/navigate/reference?project=eating-nam-nam&path=backend/public/assets/images/uploads/pexels-iina-luoto-1211887.jpg'),
    ('pâtes au beurre', 2, 25, 2, 'facile', 'C:\Users\trist\projects\eating-nam-nam\backend\public\assets\images\uploads\pexels-jer-chung-2116094.jpg'),
    ('religieuse au chocolat', 5, 90, 2, 'difficile','C:\Users\trist\projects\eating-nam-nam\backend\public\assets\images\uploads\pexels-julie-aagaard-2097090.jpg')
    ;

INSERT INTO ingredient (name, unité, kcal)
VALUES
('oeuf', 'pièce(s)', 20),
('beurre', 'grammes', 5),
('chocolat noir', 'grammes', 3),
('farine de blé', 'grammes', 1),
('pâtes', 'grammes', 2)
;

INSERT INTO recipe_ingredient (recipe_ID, ingredient_ID, quantity)
VALUES
    (1, 1, 2),
    (1, 2, 20),
    (2, 5, 200),
    (2, 2, 50),
    (3,3,300),
    (3,4,200),
    (3,1,6)
;

INSERT INTO instruction (description, recipe_ID)
VALUES
    ('Préchauffez la poêle',1),
    ('rajoutez le beurre dans la poêle',1),
    ('cassez les oeufs et les versez dans la poêle sans les mélanger',1),
    ("Une fois la texture souhaitée, disposez dans l'assiette", 1),
    ("Faites chauffer l'équivalent de 3 volumes d'eau par volume de pâtes dans une casserole en ajoutant du sel",2),
    ("Une fois que l'eau bout, insérez les pâtes dans l'eau frémissante et respectez le temps de cuisson indiquée sur le sachet",2),
    ("Disposez les pâtes dans l'assiette avec le beurre et mélangez",2),
    ("Savourez!",2)
;

INSERT INTO material (name)
VALUES
    ("Poêle"),
    ("Casserole"),
    ("Spatule en bois"),
    ("Egouttoir")
;

INSERT INTO recipe_material (recipe_ID,material_ID)
VALUES
    (1,1),
    (1,3),
    (2,2),
    (2,3),
    (2,4)
;

INSERT INTO tag (name)
VALUES
    ("vegan"),
    ("végétarien"),
    ("sans gluten")
;

INSERT INTO recipe_tag (recipe_ID,tag_ID)
VALUES
    (1,2),
    (1,3),
    (2,2)
;

INSERT INTO comment (description, user_ID, recipe_ID)
VALUES
    ("Belle recette, merci !", 1, 1),
    ("Il manque un peu de beurre à mon goût...", 2, 1),
    ("J'ai pas eu besoin de spatule pour ça!",5,2)
;

