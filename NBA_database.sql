CREATE TABLE "nba_data" (
    "Rank" int NOT NULL,
    "Player" varchar(50) NOT NULL,
    "Years_Played" int   NOT NULL,
    "Start_Year" int   NOT NULL,
    "End_Year" int  NOT NULL,
    "Points" int   NOT NULL,
    "BirthDate" Date,
    "City" varchar (30),
    "Region" varchar(50) NOT NULL,
	"lat" decimal,
	"lng" decimal
);

Select * from nba_data;
