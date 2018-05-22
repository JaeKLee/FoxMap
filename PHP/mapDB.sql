DROP DATABASE IF EXISTS mapDB;
CREATE DATABASE mapDB;
USE mapDB;
        
-- Create table for admin
CREATE TABLE IF NOT EXISTS admin (
    userId INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    userName TEXT NOT NULL,
	firstName TEXT NOT NULL,
	lastName TEXT NOT NULL,
	email VARCHAR(40) UNIQUE NOT NULL,
	pass TEXT NOT NULL
);


INSERT INTO admin (userName, firstName, lastName, email, pass)
    VALUES ("test", "Test", "teSt", "tesT@test.tEst", SHA1("DeSktop")),
    VALUES ("admin", "Admin", "aDmin", "admin@test.tEst", SHA1("admin"));


CREATE TABLE IF NOT EXISTS mapContent (
    locID INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    buildingName TEXT NOT NULL,
    tags TEXT
);

INSERT INTO mapContent (buildingName, tags)
    VALUES ("Byrne House", "by, byr, byrn, ho, hou, hous, byrn house, byrn ho, byrn hou, by ho, by hou, by hous"),
           ("Cannavino Library", "coffee, li, lib, libr, libra, librar, ca, can, cann, canna, cannav, cannavi, vannavin"),
           ("Champagnat Hall", "housing, freshmen, freshman, champ, cha, cham, champa, champag, champagn, champagna"),
           ("Chapel", "ch, cha, chap, chape"),
           ("Cornell Boathouse", "boat, corne, co, cor, corn, corne, cornel, bo, boa, boath, boatho, boathou, boathous"),
           ("Donnelly Hall", "Donelly, Donnelley, Donelley, food, grub, coffee, atm, do, don, donn, donne, sci, scie, scien, scienc"),
           ("Dyson Center", "food, grub, coffee, dys, dyso"),
           ("Fern Tor", "Fern Tor, fe, fer"),
           ("Fontaine Hall", "fon, fo, font, fonta, fontai, fontain"),
           ("Foy Townhouses", "housing, fo, to, tow, town, townh, townho, townhou, townhous, townhouse"),
           ("Fulton Street Townhouses (Lower)", "New Fulton, Lower Fulton, housing, lo, low, lowe, fu, ful, fult, fulto, to, tow, town, townh, townho, townhou, townhous, townhouse"),
           ("Fulton Street Townhouses (Upper)", "Upper Fulton, housing, up, upp, uppe, fu, ful, fult, fulto, to, tow, town, townh, townho, townhou, townhous, townhouse"),
           ("Gartland Athletic Field", "Softball, Rugby, North Field"),
           ("Greystone Hall", "gr, gre, grey, greys, greyst, greysto, greyston"),
           ("Hancock Center", "coffee, ha, han, hanc, hanco, hancoc, ce, cen"),
           ("Kieran Gatehouse", "ki, kie, kier, kiera, ga, gat, gate, gateh, gateho, gatehou, gatehous"),
           ("Kirk House", "ki, kir"),
           ("Leo Hall", "housing, freshmen, freshman, le"),
           ("Longview Park", "lo, lon, long, longv, longvi, longvie, pa, par"),
           ("Lowell Thomas Communications Center", "LT, food, grub, coffee, co, com, comm, comms, low, lowe, lowel, th, tho, thom, thoma"),
           ("Lower New Townhouses", "housing, lo, low, lowe, ne, to, tow, town, townh, townho, townhou, townhous, townhouse, lower new, low new, lo ne"),
           ("Marian Hall", "housing, freshmen, freshman, ma, mar, mari, maria"),
           ("Marist Boathouse", "cr, cre, bo, boa, boat, boath, boatho, boathou, boathous"),
           ("The James J. McCann Recreation Center", "atm, mc, mcc, mcca, mccan, sp, spo, spor, sport, sports, at, ath, athl, athle, athlet, athleti"),
           ("McCann Baseball Field", "mc, mcc, mcca, mccan, sp, spo, spor, sport, sports, at, ath, athl, athle, athlet, athleti, ba, bas, base, baseb, baseba, basebal"),
           ("Midrise Hall", "housing, mi, mid, midr, midri, mirdris"),
           ("Murray Student Center/Music Building", "food, grub, coffee, mur, murr, murra st, stu, stud, stude, studen, ce, cen, mu, mus, musi"),
           ("North End Housing Complex", "Building A, Building B, Building C, Building D, Gartland, housing, food, A, B, C, D"),
           ("Rotunda", "atm, tour, ro, rot, rotu, rotun, rotund"),
           ("St. Ann's Hermitage", "an, herm"),
           ("St. Peter's", "up, upw, upwa, upwar, bo, bou, boun"),
           ("Science and Allied Health Building", "sci, scie, scien, scienc, hea, heal, healt, al, all, alli, allie"),
           ("Sheahan Hall", "housing, freshmen, freshman, shea, sheah, sheaha"),
           ("Steel Plant Studios and Gallery", "art, ar, arts, st, ste, stee, pl, pla, plan,"),
           ("Tennis Pavilion", "tenn, tenni, te, ten"),
           ("Upper New Townhouses", "housing, tow, town, townh, townho, townhou, townhous, townhouse, house, up, upp, uppe, ne, new, up new"),
           ("West Cedar Townhouses (Lower)", "lower west, housing, we, wes, ce, ced, ceda, tow, town, townh, townho, townhou, townhous, house, lo, low, lowe"),
           ("West Cedar Townhouses (Upper)", "upper west, housing, Jazzman, Jazzman's, Jasmine, atm, we, wes, ce, ced, ceda, tow, town, townh, townho, townhou, townhous, house, up, upp, uppe")

           
    

-- CREATE TABLE IF NOT EXISTS depts ()
--     deptID INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
--     deptName TEXT NOT NULL
-- );

-- INSERT INTO depts (deptName) 
--     VALUES ("DEPT TEST"),
--           (),