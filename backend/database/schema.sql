#Access to DB

USE eating_nam_nam;

#Create tables for eating nam nam DB
CREATE TABLE user (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(30) UNIQUE NOT NULL,
    firstname VARCHAR(20),
    lastname VARCHAR(20),
    birthdate DATE,
    password VARCHAR(255) NOT NULL,
    description MEDIUMTEXT,
    is_admin BIT,
    avatar VARCHAR(200)
);
CREATE TABLE recipe (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    name VARCHAR(80) NOT NULL,
    title VARCHAR(150) NOT NULL,
    prep_time INT NOT NULL,
    nb_people INT NOT NULL,
    difficulty VARCHAR(30) NOT NULL,
    image VARCHAR(200),
    tag1 VARCHAR(30),
    tag2 VARCHAR(30),
    tag3 VARCHAR(30),
  is_verified BIT DEFAULT 0,
  total_kcal INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES user(id)
);
CREATE TABLE ingredient
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    kcal INT NOT NULL,
    unit VARCHAR(20) NOT NULL
);

CREATE TABLE fav
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    recipe_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (recipe_id) REFERENCES recipe(id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);
CREATE TABLE comment
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    description VARCHAR(500) NOT NULL,
    user_id INT NOT NULL,
    recipe_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (recipe_id) REFERENCES recipe(id)
);
CREATE TABLE instruction
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    description MEDIUMTEXT NOT NULL,
    recipe_id INT NOT NULL,
    FOREIGN KEY (recipe_id) REFERENCES recipe(id)
);

CREATE TABLE recipe_ingredient
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    recipe_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (recipe_id) REFERENCES recipe(id),
    FOREIGN KEY (ingredient_id) REFERENCES ingredient(id)
);

CREATE TABLE tag
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL
);

INSERT INTO user(username, email, firstname, lastname, birthdate, password, is_admin)
VALUES
    ('tristanZ', 'tristan.zvunka@gmail.com','tristan','zvunka','1992-11-26', 'test1',1 ),
    ('flavienG', 'flavien.gaujardd@gmail.com', 'flavien','giraud','1988-04-12', 'test2',1),
    ('elieR', 'elie.rakoto@gmail.com','elie','Rakoto','1990-10-14','test3',0),
    ('christopheC','christophe.bruno@gmail.com','Christophe','Bruno','1990-10-14','test4',1),
    ('hugoD','hugo.durand@gmail.com','Hugo','Durand','1989-02-05','test5',0)
;

-- Ajout de nouvelles recettes
INSERT INTO recipe (name, title, user_ID, prep_time, nb_people, difficulty, tag1, tag2, tag3, is_verified, total_kcal)
VALUES
    ("salade de pâtes méditerranéenne", "Un voyage en Méditerranée", 1, 25, 3, "moyen", "salade", "italien", "repas", true, 450),
    ("tacos au poulet", "Saveurs mexicaines", 2, 40, 4, "moyen", "mexicain", "poulet", "dîner", true, 700),
    ("curry de légumes", "Épices indiennes", 3, 35, 4, "moyen", "végétarien", "indien", "curry", true, 550),
    ("poke bowl au saumon", "Frais et sain", 4, 20, 2, "facile", "poisson", "hawaïen", "déjeuner", true, 400),
    ("risotto aux champignons", "Crémeux et délicieux", 5, 45, 3, "moyen", "italien", "champignon", "repas", true, 600),
    ("wraps végétariens", "Légers et savoureux", 6, 30, 3, "facile", "végétarien", "dîner", "wrap", true, 350),
    ("soupe miso", "Authentique et réconfortante", 1, 15, 2, "facile", "japonais", "soupe", NULL, true, 200),
    ("lasagnes bolognaises", "Classique italien", 2, 60, 6, "difficile", "italien", "viande", "repas", true, 800),
    ("salade de quinoa aux fruits de mer", "Fraîcheur marine", 3, 20, 2, "facile", "salade", "poisson", NULL, true, 350),
    ("poulet rôti aux herbes", "Savoureux et simple", 4, 75, 4, "moyen", "viande", "poulet", "repas", true, 900),
    ("spaghetti carbonara", "L'italie à la maison", 5, 30, 2, "moyen", "italien", "pâtes", "repas", true, 550),
    ("tarte aux pommes", "Douceur sucrée", 6, 50, 8, "facile", "dessert", "fruits", "pâtisserie", true, 600);


-- Ajout de nouveaux ingrédients
INSERT INTO ingredient (name, unit, kcal)
VALUES
    ('pâtes', 'grammes', 200),
    ('tomate', 'pièce(s)', 2),
    ('olives noires', 'grammes', 30),
    ('feta', 'grammes', 100),
    ('tortillas', 'pièce(s)', 6),
    ('filet de poulet', 'grammes', 300),
    ('taco seasoning', 'cuillère(s) à soupe', 2),
    ('riz basmati', 'grammes', 150),
    ('saumon frais', 'grammes', 250),
    ('edamame', 'grammes', 50),
    ('champignons', 'grammes', 100),
    ('wrap', 'pièce(s)', 4),
    ('tofu', 'grammes', 200),
    ('curry powder', 'cuillère(s) à café', 1),
    ('algues', 'grammes', 20),
    ('parmesan', 'grammes', 50),
    ('fruits de mer assortis', 'grammes', 200),
    ('herbes de Provence', 'cuillère(s) à café', 1),
    ('pommes', 'pièce(s)', 4),
    ('pâte feuilletée', 'grammes', 200),
    ('Sel', 'Cuillère à café (cc)', 0),
    ('Poivre', 'Cuillère à café (cc)', 0),
    ("Huile d'olive", 'Cuillère à soupe (cs)', 15),
    ('Ail', 'pièce(s)', 4),
    ('Oignons', 'pièce(s)', 12),
    ('Riz', 'grammes', 1),
    ('Sucre', 'grammes', 10),
    ('Bouillon de poulet', 'centilitres', 5),
    ('Sauce soja', 'Cuillère à soupe (cs)', 8),
    ('Vinaigre', 'Cuillère à soupe (cs)', 3),
    ('Levure chimique', 'Cuillère à café (cc)', 2),
    ('Bicarbonate de soude', 'Cuillère à café (cc)', 0),
    ('Cannelle', 'Cuillère à café (cc)', 6),
    ('Noix de muscade', 'Cuillère à café (cc)', 12),
    ('Paprika', 'Cuillère à café (cc)', 6),
    ('Cumin', 'Cuillère à café (cc)', 8),
    ('Flocons de piment', 'Cuillère à café (cc)', 6),
    ('Moutarde', 'Cuillère à café (cc)', 3),
    ('Ketchup', 'Cuillère à soupe (cs)', 15),
    ('Mayonnaise', 'Cuillère à soupe (cs)', 94),
    ('Miel', 'Cuillère à soupe (cs)', 64),
    ('Citron', 'Entier', 17) ('Lime', 'Entier', 20),
    ('Basilic', 'Cuillère à café (cc)', 1),
    ('Coriandre', 'Cuillère à café (cc)', 0),
    ('Gingembre', 'Cuillère à café (cc)', 2),
    ('Curcuma', 'Cuillère à café (cc)', 9),
    ('Thon en conserve', 'grammes', 8),
    ('Carotte', 'pièce(s)', 25),
    ('Courgette', 'pièce(s)', 25),
    ('Champignon', 'grammes', 2),
    ('Brocoli', 'pièce(s)', 55),
    ('Poivron', 'pièce(s)', 24),
    ('Aubergine', 'pièce(s)', 35),
    ('Pomme de terre', 'grammes', 20),
    ('Chou-fleur', 'pièce(s)', 146),
    ('Haricot vert', 'grammes', 31),
    ('Laitue', 'pièce(s)', 20),
    ('Épinard', 'grammes', 7),
    ('Poireau', 'pièce(s)', 20),
    ('Radis', 'grammes', 1),
    ('Concombre', 'pièce(s)', 16),
    ('Céleri', 'pièce(s)', 6),
    ('Courge butternut', 'pièce(s)', 63),
    ('Panais', 'pièce(s)', 75),
    ('Navet', 'grammes', 36);

-- Ajout de nouvelles instructions
INSERT INTO instruction (description, recipe_id)
VALUES
    ("Cuisez les pâtes selon les instructions sur l'emballage", 10),
    ("Coupez les tomates, les olives et émiettez la feta", 10),
    ("Mélangez les pâtes cuites avec les légumes et la feta", 10),
    ("Faites griller les tortillas et remplissez-les avec le mélange", 11),
    ("Cuisez le poulet et assaisonnez avec le mélange d'épices pour tacos", 11),
    ("Préparez le riz basmati selon les indications sur l'emballage", 12),
    ("Cuisez le saumon et coupez-le en morceaux", 12),
    ("Disposez le riz dans un bol, ajoutez le saumon, les edamames et les algues", 12),
    ("Préparez le rizotto en cuisant le riz avec les champignons", 13),
    ("Préparez les wraps en remplissant les tortillas de tofu et de légumes", 13),
    ("Faites chauffer le bouillon et ajoutez-le progressivement au riz, en remuant constamment", 14),
    ("Disposez les wraps dans un plat de cuisson et versez la sauce tomate par-dessus", 14),
    ("Cuisez au four préchauffé à 180°C pendant 30 minutes", 14),
    ("Mélangez les fruits de mer cuits avec la salade de quinoa", 15),
    ("Assaisonnez avec une vinaigrette légère à base d'huile d'olive", 15),
    ("Assaisonnez le poulet avec des herbes de Provence et faites-le rôtir au four", 16),
    ("Préparez une sauce carbonara en mélangeant des œufs, du parmesan et du poivre", 17),
    ("Faites cuire les spaghetti et mélangez-les avec la sauce carbonara", 17),
    ("Préparez une pâte feuilletée et garnissez-la avec des tranches de pommes", 18),
    ("Cuisez au four préchauffé à 200°C pendant 40 minutes", 18);

-- Ajout de nouveaux liens entre recettes et ingrédients
INSERT INTO recipe_ingredient (recipe_id, ingredient_id, quantity)
VALUES
    (10, 1, 200),
    (10, 2, 4),
    (10, 3, 30),
    (10, 4, 100),
    (11, 5, 6),
    (11, 6, 300),
    (11, 7, 2),
    (12, 8, 150),
    (12, 9, 250),
    (12, 10, 50),
    (13, 11, 100),
    (13, 12, 4),
    (13, 13, 200),
    (14, 8, 200),
    (14, 14, 6),
    (14, 15, 2),
    (15, 16, 200),
    (15, 17, 50),
    (16, 6, 400),
    (16, 18, 4),
    (17, 1, 300),
    (17, 19, 50),
    (18, 20, 4),
    (18, 21, 200);