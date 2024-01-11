#Access to DB
USE eating_nam_nam;

#Create tables for eating nam nam DB
CREATE TABLE user (
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
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
  ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_ID INT NOT NULL,
    name VARCHAR(80) NOT NULL,
    title VARCHAR(100) NOT NULL,
    prep_time INT NOT NULL,
    nb_people INT NOT NULL,
    difficulty VARCHAR(30) NOT NULL,
    image VARCHAR(200),
    tag1 VARCHAR(30),
    tag2 VARCHAR(30),
    tag3 VARCHAR(30),
FOREIGN KEY (user_ID) REFERENCES user(id)
);
CREATE TABLE ingredient
(
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    kcal INT NOT NULL,
    unit VARCHAR(10) NOT NULL
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
    tag_name VARCHAR(30) NOT NULL
)

