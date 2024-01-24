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
CREATE TABLE material
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(50)
);

CREATE TABLE recipe_material
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    recipe_id INT NOT NULL,
    material_id INT NOT NULL,
    FOREIGN KEY (recipe_id) REFERENCES recipe(id),
    FOREIGN KEY (material_id) REFERENCES material(id)
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

INSERT INTO recipe (name,title, user_ID, prep_time, nb_people, difficulty,tag1, tag2,tag3,is_verified, total_kcal )
VALUES
    ('oeufs au plat', 'simple comme bonjour',1, 15, 1, 'facile', 'végétarien', 'sans gluten',NULL,true,200),
    ('pâtes au beurre','la spécialité des étudiants!', 2, 25, 2, 'facile', 'végétarien', NULL,NULL,true,500),
    ('religieuse au chocolat','pour les experts en pâtisserie', 5, 90, 2, 'difficile', 'dessert', 'gourmand',NULL,true,800),
    ('ramen', 'Comment réussir un vrai ramen maison comme au Japon?', 2, 180, 2, 'difficile', 'japon', 'gourmand', 'soupe',true,400),
    ('cheeseburger', 'Créez votre propre cheeseburger maison!',3,45,2,'facile','burger','gourmand',NULL,true,1200),
    ('Les inimitables crêpes','Rapide et efficace, le tout en quelques étapes!', 5, 20, 4, 'facile', 'rapide', 'gourmand','dessert',true,400)
;

INSERT INTO ingredient (name, unit, kcal)
VALUES
('oeuf', 'pièce(s)', 20),
('beurre', 'grammes', 5),
('chocolat noir', 'grammes', 3),
('farine de blé', 'grammes', 1),
('pâtes', 'grammes', 2),
('nouilles udon', 'grammes',50),
('steak haché', 'pièce(s)',100),
('pain bun','pièce(s)', 40),
('cheddar', 'grammes', 200),
('tomate','pièce(s)',10),
('lait','centilitres',5),
('farine', 'grammes', 0.5)
;

INSERT INTO instruction (description, recipe_id)
VALUES
    ("Préchauffez la poêle",1),
    ("rajoutez le beurre dans la poêle",1),
    ("cassez les oeufs et les versez dans la poêle sans les mélanger",1),
    ("Une fois la texture souhaitée, disposez dans l'assiette", 1),
    ("Faites chauffer l'équivalent de 3 volumes d'eau par volume de pâtes dans une casserole en ajoutant du sel",2),
    ("Une fois que l'eau bout, insérez les pâtes dans l'eau frémissante et respectez le temps de cuisson indiquée sur le sachet",2),
    ("Disposez les pâtes dans l'assiette avec le beurre et mélangez",2),
    ("Savourez!",2),
    ("mélangez les oeufs et le lait",6),
    ("rajoutez la farine",6),
    ("laissez reposer 3 heures au minimum", 6),
    ("Disposez la pâte sur une poêle chaude",6)
;

INSERT INTO material (name)
VALUES
    ("Poêle"),
    ("Casserole"),
    ("Spatule en bois"),
    ("Egouttoir")
;

INSERT INTO recipe_material (recipe_id,material_id)
VALUES
    (1,1),
    (1,3),
    (2,2),
    (2,3),
    (2,4)
;

INSERT INTO tag (name)
VALUES
    ('vegan'),
    ('végétarien'),
    ('sans gluten'),
    ('Japon'),
    ('Soupe'),
    ('Burger'),
    ('dessert')
;


INSERT INTO comment (description, user_id, recipe_id)
VALUES
    ("Belle recette, merci !", 1, 1),
    ("Il manque un peu de beurre à mon goût...", 2, 1),
    ("J'ai pas eu besoin de spatule pour ça!",5,2)
;

INSERT INTO recipe_ingredient (recipe_id, ingredient_id, quantity)
VALUES
    (1,1,2),
    (1,2,10),
    (4,1,2),
    (4,6,200),
    (5,7,2),
    (5, 8,2),
    (5,9,200),
    (5,10,1),
    (6,1,6),
    (6,2,20),
    (6,10,20),
    (6,11,200)
;

