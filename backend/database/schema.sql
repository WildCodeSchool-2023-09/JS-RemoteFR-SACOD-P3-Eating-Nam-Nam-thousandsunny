#Access to DB
USE eating_nam_nam;

#Create tables for eating nam nam DB
CREATE TABLE user (
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(80) NOT NULL,
    firstname VARCHAR(30) NULL,
    lastname VARCHAR(50) NULL,
    birthdate DATE NULL,
    password VARCHAR(50) NOT NULL,
    description MEDIUMTEXT NULL,
    is_admin BIT NULL,
    avatar VARCHAR(200) NULL
);
CREATE TABLE recipe (
  ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_ID INT NOT NULL,
    name VARCHAR(80) NOT NULL,
    prep_time INT NOT NULL,
    nb_people INT NOT NULL,
    difficulty VARCHAR(30) NOT NULL,
    image VARCHAR(200),
FOREIGN KEY (user_ID) REFERENCES user(id)
);
CREATE TABLE ingredient
(
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    kcal INT NOT NULL,
    unité VARCHAR(10) NOT NULL
);
CREATE TABLE recipe_ingredient
(
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    recipe_ID INT NOT NULL,
    ingredient_ID INT NOT NULL,
    quantity INT NOT NULL,
FOREIGN KEY (recipe_ID) REFERENCES recipe(ID),
FOREIGN KEY (ingredient_ID) REFERENCES ingredient(ID)
);
CREATE TABLE tag
(
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL
);
CREATE TABLE recipe_tag
(
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    recipe_ID INT NOT NULL,
    tag_ID INT NOT NULL,
    FOREIGN KEY (recipe_ID) REFERENCES recipe(ID),
    FOREIGN KEY (tag_ID) REFERENCES tag(ID)
);
CREATE TABLE fav
(
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    recipe_ID INT NOT NULL,
    user_ID INT NOT NULL,
    FOREIGN KEY (recipe_ID) REFERENCES recipe(ID),
    FOREIGN KEY (user_ID) REFERENCES user(ID)
);
CREATE TABLE comment
(
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    description VARCHAR(500) NOT NULL,
    user_ID INT NOT NULL,
    recipe_ID INT NOT NULL,
    FOREIGN KEY (user_ID) REFERENCES user(ID),
    FOREIGN KEY (recipe_ID) REFERENCES recipe(ID)
);
CREATE TABLE instruction
(
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    description MEDIUMTEXT NOT NULL,
    recipe_ID INT NOT NULL,
    FOREIGN KEY (recipe_ID) REFERENCES recipe(ID)
);
CREATE TABLE material
(
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(50)
);

CREATE TABLE recipe_material
(
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    recipe_ID INT NOT NULL,
    material_ID INT NOT NULL,
    FOREIGN KEY (recipe_ID) REFERENCES recipe(ID),
    FOREIGN KEY (material_ID) REFERENCES material(ID)
);


