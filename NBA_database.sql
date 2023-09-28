-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "nba_data" (
    "Rank" int NOT NULL,
    "Player" varchar(50) NOT NULL,
    "Years_Played" int   NOT NULL,
    "Start_Year" int   NOT NULL,
    "End_Year" int  NOT NULL,
    "Points" int   NOT NULL,
    "BirthDate" Date,
    "City" varchar (30),
    "Region" varchar(50)   NOT NULL
);

select * from nba_data


--Create flask server module with sqlalcahmey
--connect to the database
--connect successful, return the table 
--should see your data in the console