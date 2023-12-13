create table user (
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(80) NOT NULL,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    birthdate DATE NULL,
    password VARCHAR(50) NOT NULL,
    is_admin BIT NOT NULL,
    avatar VARCHAR(200)
);

create table recipe (
  ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_ID INT NOT NULL,
    name VARCHAR(80) NOT NULL,
    prep_time INT NOT NULL,
    nb_people INT NOT NULL,
    difficulty VARCHAR(30) NOT NULL,
    image VARCHAR(200),
FOREIGN KEY (user_ID) REFERENCES user(id)
);

create table ingredient
(
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    kcal INT NOT NULL,
    unité VARCHAR(10) NOT NULL
);

create table recipe_ingredient
(
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    recipe_ID INT NOT NULL,
    ingredient_ID INT NOT NULL,
    quantity INT NOT NULL,
FOREIGN KEY (recipe_ID) REFERENCES recipe(ID),
FOREIGN KEY (ingredient_ID) REFERENCES ingredient(ID)
);

create table tag
(
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL
);

create table recipe_tag
(
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    recipe_ID INT NOT NULL,
    tag_ID INT NOT NULL,
    FOREIGN KEY (recipe_ID) REFERENCES recipe(ID),
    FOREIGN KEY (tag_ID) REFERENCES tag(ID)
);

create table fav
(
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    recipe_ID INT NOT NULL,
    user_ID INT NOT NULL,
    FOREIGN KEY (recipe_ID) REFERENCES recipe(ID),
    FOREIGN KEY (user_ID) REFERENCES user(ID)
);

create table comment
(
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    description VARCHAR(500) NOT NULL,
    user_ID INT NOT NULL,
    recipe_ID INT NOT NULL,
    FOREIGN KEY (user_ID) REFERENCES user(ID),
    FOREIGN KEY (recipe_ID) REFERENCES recipe(ID)
);

create table instruction
(
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    description VARCHAR(500) NOT NULL,
    recipe_ID INT NOT NULL,
    FOREIGN KEY (recipe_ID) REFERENCES recipe(ID)
);

create table material
(
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(50)
);

create table recipe_material
(
    ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    recipe_ID INT NOT NULL,
    material_ID INT NOT NULL,
    FOREIGN KEY (recipe_ID) REFERENCES recipe(ID),
    FOREIGN KEY (material_ID) REFERENCES material(ID)
);


