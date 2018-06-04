/*
var tipuesearch = {"pages": [
     
     
     //{"title": "", "text": "", "tags": "", "url": "popup.js"}
     
]};

*/
//add rotunda and softball
var tipuesearch_build = {"building": [
     {"title": "Byrne House", "text": "", "tags": "b, by, byr, byrn, h, ho, hou, hous, byrn house, byrn ho, byrn hou, by ho, by hou, by hous", "url": "javascript:showtooltip('#byrne');"},
      
     {"title": "Cannavino Library", "text": "", "tags": "c, co, cof, coff, coffe, coffee, l, li, lib, libr, libra, librar, c, ca, can, cann, canna, cannav, cannavi, vannavin", "url": "javascript:showtooltip('#library');"},
     
     {"title": "Champagnat Hall", "text": "", "tags": "h, ho, hou, hous, house, housing, f, fr, fre, fres,fresh,freshm, freshmen, freshman, c, ch, cha, cham, champ, champa, champag, champagn, champagna", "url": "javascript:showtooltip('#ch');"},
     
     {"title": "Chapel", "text": "", "tags": "c, ch, cha, chap, chape", "url": "javascript:showtooltip('#chapel');"},
     
     {"title": "Cornell Boathouse", "text": "", "tags": "c, co, cor, corn, corne, cornel, b, bo, boa, boat, boath, boatho, boathou, boathous", "url": "javascript:showtooltip('#corn');"},
     
     {"title": "Donnelly Hall", "text": "", "tags": "Donelly, Donnelley, Donelley, f, fo, foo, food, g, gr, gru, grub, c, co, cof, coff, coffe, coffee, a, at, atm, d, do, don, donn, donnel, donel, donne", "url": "javascript:showtooltip('#dn');"},  
     
     {"title": "Dyson Center", "text": "", "tags": "f, fo, foo, food, g, gr, gru, grub, c, co, cof, coff, coffe, coffee, d, dy, dys, dyso, c, ce, cen,cent,cente", "url": "javascript:showtooltip('#dy');"},

     {"title": "Fern Tor", "text": "", "tags": "f, fe, fer, t, to", "url": "javascript:showtooltip('#fern');"},
     
     {"title": "Fontaine Hall", "text": "", "tags": "f, fo, fon, font, fonta, fontai, fontain, h, ha, hal", "url": "javascript:showtooltip('#fn');"},
     
     {"title": "Foy Townhouses", "text": "", "tags": "h, ho, hou, hous, house, housing, f, fo, t, to, tow, town, townh, townho, townhou, townhous, townhouse", "url": "javascript:showtooltip('#foy');"},
     {"title": "Fulton Street Townhouses (Lower)", "text": "", "tags": "New Fulton, Lower Fulton, h, ho, hou, hous, house, housing, l, lo, low, lowe, f, fu, ful, fult, fulto, t, to, tow, town, townh, townho, townhou, townhous, townhouse", "url": "javascript:showtooltip('#lf');"},
     {"title": "Fulton Street Townhouses (Upper)", "text": "", "tags": "Upper Fulton, h, ho, hou, hous, house, housing, u, up, upp, uppe, f, fu, ful, fult, fulto, t, to, tow, town, townh, townho, townhou, townhous, townhouse", "url": "javascript:showtooltip('#uf');"},
     
     {"title": "Gartland Athletic Field", "text": "", "tags": "g, ga, gar, gart, gartl, gartla, gartlan, a, at, ath, athl, athle, athlet, athleti, athletics, f, fi, fie, fiel, North Field", "url": "javascript:showtooltip('#sball');"},
     
     {"title": "Greystone Hall", "text": "", "tags": "g, gr, gre, grey, greys, greyst, greysto, greyston", "url": "javascript:showtooltip('#gs');"},

     {"title": "Hancock Center", "text": "", "tags": "c, co, cof, coff, coffe, coffee, h, ha, han, hanc, hanco, hancoc, c, ce, cen, cente", "url": "javascript:showtooltip('#hc');"},
     
     {"title": "Kieran Gatehouse", "text": "", "tags": "k, ki, kie, kier, kiera, g, ga, gat, gate, gateh, gateho, gatehou, gatehous", "url": "javascript:showtooltip('#kieran');"},
     {"title": "Kirk House", "text": "", "tags": "k, ki, kir", "url": "javascript:showtooltip('#kirk');"},
     
     {"title": "Leo Hall", "text": "", "tags": "h, ho, hou, hous, house, housing, f, fr, fre, fres,fresh,freshm, freshmen, freshman, l, le, h, ha, hal", "url": "javascript:showtooltip('#leo');"},
     
     {"title": "Longview Park", "text": "", "tags": "l, lo, lon, long, longv, longvi, longvie, p, pa, par", "url": "javascript:showtooltip('#longview');"},
     
     {"title": "Lowell Thomas Communications Center", "text": "", "tags": "LT, f, fo, foo, food, g, gr, gru, grub, c, co, cof, coff, coffe, coffee, c, co, com, comm, comms, l, lo low, lowe, lowel, t, th, tho, thom, thoma", "url": "javascript:showtooltip('#lt');"},
     
     {"title": "Lower New Townhouses", "text": "", "tags": "h, ho, hou, hous, house, housing, lo, low, lowe, ne, to, tow, town, townh, townho, townhou, townhous, townhouse, lower new, low new, lo ne", "url": "javascript:showtooltip('#ln');"},
     {"title": "Marian Hall", "text": "", "tags": "h, ho, hou, hous, house, housing, f, fr, fre, fres,fresh,freshm, freshmen, freshman, m, ma, mar, mari, maria", "url": "javascript:showtooltip('#marian');"},
     
     {"title": "Marist Boathouse", "text": "", "tags": "c, cr, cre, b, bo, boa, boat, boath, boatho, boathou, boathous", "url": "javascript:showtooltip('#boat');"},
     
     {"title": "The James J. McCann Recreation Center", "text": "", "tags": "a, at, atm, m, mc, mcc, mcca, mccan, s, sp, spo, spor, sport, sports, a, at, ath, athl, athle, athlet, athleti", "url": "javascript:showtooltip('#mccann');"},
     
     {"title": "McCann Baseball Field", "text": "", "tags": "m, mc, mcc, mcca, mccan, s, sp, spo, spor, sport, sports, a, at, ath, athl, athle, athlet, athleti, athletic, athletics, b, ba, bas, base, baseb, baseba, basebal", "url": "javascript:showtooltip('#bball');"},
     
     {"title": "Midrise Hall", "text": "", "tags": "h, ho, hou, hous, house, housing, m mi, mid, midr, midri, mirdris, s, su, sui, suit, suite", "url": "javascript:showtooltip('#mr');"},
     
     {"title": "Murray Student Center/Music Building", "text": "", "tags": "f, fo, foo, food, g, gr, gru, grub, c, co, cof, coff, coffe, coffee, m, mu, mur, murr, murra, s, st, stu, stud, stude, studen, c, ce, cen, m, mu, mus, musi", "url": "javascript:showtooltip('#sc');"},
     
     {"title": "Tom & Mary Ward Hall", "text": "", "tags": "h, ho, hou, hous, house, housing, b, bu, bui, buil, build, buildi, buildin, A, bui, buil, build, buildi, buildin, t, to, m, ma, mar, w, wa, war, h, ha, hal", "url": "javascript:showtooltip('#tmw');"},
     {"title": "Building B", "text": "", "tags": "h, ho, hou, hous, house, housing, b, bu, bui, buil, build, buildi, buildin, B", "url": "javascript:showtooltip('#ngb');"},
     {"title": "Building C", "text": "", "tags": "h, ho, hou, hous, house, housing, b, bu, bui, buil, build, buildi, buildin, C", "url": "javascript:showtooltip('#ngc');"},
     {"title": "Building D", "text": "", "tags": "h, ho, hou, hous, house, housing, b, bu, bui, buil, build, buildi, buildin, D, f, fo, foo, food, g, gr, gru, grub, gym", "url": "javascript:showtooltip('#ngd');"},


     {"title": "Rotunda", "text": "", "tags": "a, at, atm, tour, r, ro, rot, rotu, rotun, rotund", "url": "javascript:showtooltip('#rt');"},
     
     {"title": "St. Ann's Hermitage", "text": "", "tags": "a, an, s, h, he, her, herm", "url": "javascript:showtooltip('#ann');"},
     
     {"title": "St. Peter's", "text": "", "tags": "u, up, upw, upwa, upwar, b, bo, bou, boun, s, p, pe, pet, pete, peter", "url": "javascript:showtooltip('#peter');"},
     
     {"title": "Science and Allied Health Building", "text": "", "tags": "s, sc, sci, scie, scien, scienc, h, he, hea, heal, healt, a, al, all, alli, allie", "url": "javascript:showtooltip('#ah');"},
     
     {"title": "Sheahan Hall", "text": "", "tags": "h, ho, hou, hous, house, housing, f, fr, fre, fres,fresh,freshm, freshmen, freshman,s, sh, she, shea, sheah, sheaha, h, ha, hal", "url": "javascript:showtooltip('#sh');"},
     
     {"title": "Steel Plant Studios and Gallery", "text": "", "tags": "a, ar, art, arts, s, st, ste, stee, pl, pla, plan, stu, stud, studi, studio, g, ga, gal, gall, galle, galler", "url": "javascript:showtooltip('#sp');"},
     {"title": "Tennis Pavilion", "text": "", "tags": "t, te, ten, tenn, tenni, p, pa, pav, pavi, pavil, pavili, pavilio", "url": "javascript:showtooltip('#tennis');"},
     {"title": "Upper New Townhouses", "text": "", "tags": "h, ho, hou, hous, house, housing, t, to, tow, town, townh, townho, townhou, townhous, townhouse, house, u, up, upp, uppe, n, ne, new, up new", "url": "javascript:showtooltip('#un');"},
     {"title": "West Cedar Townhouses (Lower)", "text": "", "tags": "lower west, h, ho, hou, hous, house, housing, w, we, wes, ce, ced, ceda, tow, town, townh, townho, townhou, townhous, l, lo, low, lowe", "url": "javascript:showtooltip('#lwc');"},
     {"title": "West Cedar Townhouses (Upper)", "text": "", "tags": "upper west, h, ho, hou, hous, house, housing, j, ja, jaz, jazz, jazzm, jazzma, Jazzman, Jazzman's, jas, jasm, jasmi, jasmin, Jasmine, a, at, atm, w, we, wes, c, ce, ced, ceda, t, to, tow, town, townh, townho, townhou, townhous, house, u, up, upp, uppe", "url": "javascript:showtooltip('#uwc');"},
]};     
     //DEPARTMENTS BELOW
var tipuesearch = {"dept": [     
     {"title": "Campus Ministry", "text": "Byrne House", "tags": "c, ca, cam, camp, campu, m, mi, min, mini, minis, minis, minist, ministr", "url": "javascript:showtooltip('#byrne');"},
      
     {"title": "Academic Learning Center", "text": "Cannavino Library", "tags": "a, ac, aca, acad, acade, academ, academi, l, le, lea, lear, learn, learni, learnin, c, ce, cen, cent, cente", "url": "javascript:showtooltip('#library');"},
     {"title": "Academic Technology", "text": "Cannavino Library", "tags": "a, ac, aca, acad, acade, academ, academi, t, te, tec, tech, techn, techno, technol, technolo, technolog", "url": "javascript:showtooltip('#library');"},
     {"title": "Center for Career Services", "text": "Cannavino Library", "tags": "c, ce, cen, cent, cente, f, fo, ca, car, care, caree, s, se, ser, serv, servi, servic, service", "url": "javascript:showtooltip('#library');"},     
     {"title": "Center for Multicultural Affairs/HEOP", "text": "Cannavino Library", "tags": "c, ce, cen, cent, cente, f, fo, h, he, heo, heop, m, mu, mul, mult, multi, multic, multicu, multicul, c, cu, cul, cult, cultu, cultur, cultura, cultural, culture, a, af, aff, affa, affai, affair", "url": "javascript:showtooltip('#library');"},
     {"title": "Library Brew", "text": "Cannavino Library", "tags": "f, fo, foo, food, g, gr, gru, grub, c, co, cof, coff, coffe, coffee, l, li, lib, libr, libra, librar, b, br, bre, lib bre, lib brew, li br, li bre", "url": "javascript:showtooltip('#library');"},
     {"title": "Weiss Language Center", "text": "Cannavino Library", "tags": "w, we, wei, weis, l, la, lan, lang, langu, langua, languag, c, ce, cen, cent, cente", "url": "javascript:showtooltip('#library');"},
     
     
     //{"title": "Freshman Residence", "text": "Champagnat Hall", "tags": "", "url": ""},
     
     //{"title": "Interfaith Prayer Room", "text": "Chapel", "tags": "", "url": ""},
     
     //{"title": "Historic Boathouse", "text": "Cornell Boathouse", "tags": "", "url": ""},
     
     {"title": "Advising and Academic Services", "text": "Donnelly Hall", "tags": "a, ad, adv, advi, advis, advisi, advise, advisin, ac, aca, acad, acade, academ, academi, s, se, ser, serv, servi, servic, service", "url": "javascript:showtooltip('#dn');"},     
     {"title": "Business and Financial Affairs", "text": "Donnelly Hall", "tags": "b, bu, bus, busi, busin, busine, busines, f, fi, fin, fina, finan, financ, financi, financia, a, af, aff, affa, affai, affair", "url": "javascript:showtooltip('#dn');"},
     {"title": "Donnelly Cafe", "text": "Donnelly Hall", "tags": "f, fo, foo, food, g, gr, gru, grub, c, co, cof, coff, coffe, coffee, dn caf, dn cafe, c, ca, caf, d, do, don, donn, donnel, donel, donne", "url": "javascript:showtooltip('#dn');"},
     {"title": "Help Desk", "text": "Donnelly Hall", "tags": "i, in, inf, info, infor, inform, informa, informat, informati, informatio, t, te, tec, tech, techn, techno, technol, technolo, technolog, h, he hel, d, de, des", "url": "javascript:showtooltip('#dn');"},
     {"title": "Information Technology", "text": "Donnelly Hall", "tags": "IT, i, in, inf, info, infor, inform, informa, informat, informati, informatio, t, te, tec, tech, techn, techno, technol, technolo, technolog", "url": "javascript:showtooltip('#dn');"},
     {"title": "Registrar", "text": "Donnelly Hall", "tags": "r, re, reg, regi, regis, regist, registr, registra", "url": "javascript:showtooltip('#dn');"},
     {"title": "ResNet (Client Technologies)", "text": "Donnelly Hall", "tags": "c, cl, cli, clie, clien, t, te, tec, tech, techn, techno, technol, r, re, res, resn, resne, i, in, inf, info, infor, inform, informa, informat, informati, informatio, t, te, tec, tech, techn, techno, technol, technolo, technolog", "url": "javascript:showtooltip('#dn');"},
     {"title": "Safety and Security", "text": "Donnelly Hall", "tags": "s, sa, saf, safe, safet, se, sec, secu, secur, securi, securit", "url": "javascript:showtooltip('#dn');"},
     {"title": "Special Services", "text": "Donnelly Hall", "tags": "s, sp, spe, spec, spec, speci, specia, se, ser, serv, servi, servic, service", "url": "javascript:showtooltip('#dn');"},
     {"title": "Student Financial Services", "text": "Donnelly Hall", "tags": "f, fi, fin, fina, finan, financ, financi, financia, s, se, ser, serv, servi, servic, service, fin ser, financial services, financial service, st, stu, st, stud, stude, studen", "url": "javascript:showtooltip('#dn');"},
     {"title": "School of Science", "text": "Donnelly Hall", "tags": "s, sc, sci, scie, scien, scienc, sch, scho, schoo", "url": "javascript:showtooltip('#dn');"},
     
     {"title": "Dyson Cafe", "text": "Dyson Center", "tags": "f, fo, foo, food, g, gr, gru, grub, c, co, cof, coff, coffe, coffee, dyson cafe, dy cafe, dy ca, d, dy, dys, dyso", "url": "javascript:showtooltip('#dy');"},
     {"title": "School of Management", "text": "Dyson Center", "tags": "s, sc, sch, scho, schoo, m, ma, man, mana, manag, manage, managem, manageme, managemen", "url": "javascript:showtooltip('#dy');"},
     {"title": "School of Social & Behavioral Sciences", "text": "Dyson Center", "tags": "s, sc, sch, scho, schoo, so, soc, soci, socia, b, be, beh, beha, behav, behavi, behavio, behavior, behaviora, sc, sci, scie, scien, science, soc beh, so be", "url": "javascript:showtooltip('#dy');"},
     {"title": "Teacher Education Program", "text": "Dyson Center", "tags": "t, te, tea, teac, teach, teache, e, ed, edu, educ, educa, educat, educati, educatio, p, pr, pro, prog, progr, progra", "url": "javascript:showtooltip('#dy');"},
     
     {"title": "Arboretum and Nature Trails", "text": "Fern Tor", "tags": "f, fe, fer, fe to, fern t, fern to, fern tor, a, ar, arb, arbo, arbor, arbore, arboret, arboretu, n, na, nat, natu, natur, t, tr, tra, trai, trail", "url": "javascript:showtooltip('#fern');"},
     
     {"title": "Alumni Relations", "text": "Fontaine Hall", "tags": "f, fo, fon, font, fonta, fontai, fontain, a, al, alu, alum, alumn, r, re, rela, relat, relati, relatio", "url": "javascript:showtooltip('#fn');"},
     {"title": "Center for Civic Engagement and Leadership", "text": "Fontaine Hall", "tags": "f, fo, fon, font, fonta, fontai, fontain, c, ci, civ, civi, e, en, eng, enga, engag, egage, l ,le, lea, lead, leade, leader, leaders, leadersh, leadershi", "url": "javascript:showtooltip('#fn');"},
     {"title": "Hudson River Valley Institute", "text": "Fontaine Hall", "tags": "f, fo, fon, font, fonta, fontai, fontain, h, hu, hud, huds, hudso, r, ri, riv, rive, v, va, val, vall, valle, i, in, ins, inst, insti, instit, institu, institut", "url": "javascript:showtooltip('#fn');"},
     {"title": "Office of College Advancement", "text": "Fontaine Hall", "tags": "f, fo, fon, font, fonta, fontai, fontain, o, of, off, offi, offic, a, ad, adv, adva, advan, advanc, advance, advancem, c, co, col, coll", "url": "javascript:showtooltip('#fn');"},
     {"title": "Public Affairs", "text": "", "tags": "Fontaine Hall, f, fo, fon, font, fonta, fontai, fontain, pu, pub, publ, publi, af, aff, affa, affai, affair", "url": "javascript:showtooltip('#fn');"},
     {"title": "School of Liberal Arts", "text": "Fontaine Hall", "tags": "s, sc, sch, scho, schoo, l, li, lib, libe, liber, libera, a, ar, art, arts, f, fo, fon, font, fonta, fontai, fontain", "url": "javascript:showtooltip('#fn');"},
     
     
    // {"title": "Upperclass Residence", "text": "Foy Townhouses", "tags": "", "url": ""},
    // {"title": "Upperclass Residence", "text": "Fulton Street Townhouses (Lower)", "tags": "", "url": ""},
    // {"title": "Upperclass Residence", "text": "Fulton Street Townhouses (Upper)", "tags": "", "url": ""},
     
     {"title": "Office of the President", "text": "Greystone Hall", "tags": "o, of, off, offi, offic, g, gr, gre, grey, greys, greyst, greysto, greyston, p, pr, pre, pres, presi, presid, preside, presiden, president's office", "url": "javascript:showtooltip('#gs');"},
     {"title": "Office of the Executive Vice-President", "text": "Greystone Hall", "tags": "g, gr, gre, grey, greys, greyst, greysto, greyston, e, ex, exe, exec, execu, execut, executi, executiv, v, vi, vic, vice, p, pr, pre, pres, presi, presid, preside, presiden, president's office", "url": "javascript:showtooltip('#gs');"},
     
     {"title": "Center for Teaching Excellence", "text": "Hancock Center", "tags": "c, ce, cen, cent, cente, t, te, tea, teac, teach, teache, teacher, teachi, teachin, e, ex, exc, excel, execell, execelle, execellen, execellenc", "url": "javascript:showtooltip('#hc');"},
     {"title": "Hancock Brew", "text": "Hancock Center", "tags": "f, fo, foo, food, g, gr, gru, grub, c, co, cof, coff, coffe, coffee, h, ha, han, hanc, hanco, hancoc, b, br, bre", "url": "javascript:showtooltip('#hc');"},
     {"title": "Investment Center and Trading Room", "text": "Hancock Center", "tags": "i, in, inv, inve, inves, invest, investm, investme, investmen, t, tr, trad, trade, tradi, tradin, r, ro, roo", "url": "javascript:showtooltip('#hc');"},
     {"title": "Marist Institute for Public Opinion (MIPO)", "text": "Hancock Center", "tags": "m, mi, mip, p, pu, pub, publ, publi, o, op, opi, opin", "url": "javascript:showtooltip('#hc');"},
     {"title": "School of Computer Science and Mathematics", "text": "Hancock Center", "tags": "s, sc, sch, scho, schoo, c, co, com, comp, compu, comput, compute, comp sci, com sc, m, ma, mat, math", "url": "javascript:showtooltip('#hc');"},
     {"title": "Study Abroad/Marist-Italy Offices", "text": "Hancock Center", "tags": "s, st, stud, a, ab, abr, abro, abroa, i, it, ita, ital", "url": "javascript:showtooltip('#hc');"},
     
     //{"title": "Kieran Gatehouse", "text": "Kieran Gatehouse", "tags": "", "url": ""},
     {"title": "College Chaplain", "text": "Kirk House", "tags": "ki, kir, c, co, col, coll, colle, colleg, ch, cha, chap, chapl, chapla, chaplai", "url": "javascript:showtooltip('#kirk');"},
     
     //{"title": "Freshman Residence", "text": "Leo Hall", "tags": "", "url": ""},
     
     //{"title": "Riverfront Recreational Area", "text": "Longview Park", "tags": "", "url": ""},
     
     {"title": "School of Communication and the Arts", "text": "Lowell Thomas Communications Center", "tags": "s, sc, sch, scho, schoo, c, co, com, comm, comms, commu, commun, commui, a, ar, art", "url": "javascript:showtooltip('#lt');"},
     {"title": "School of Professional Programs", "text": "Lowell Thomas Communications Center", "tags": "s, sc, sch, scho, schoo, p, pr, pro, prof, profe, profes, profess, professi, professio, profession, professiona", "url": "javascript:showtooltip('#lt');"},
     {"title": "Media Center", "text": "Lowell Thomas Communications Center", "tags": "m, me, med, medi, c, ce, cen, cent, cente", "url": "javascript:showtooltip('#lt');"},
     {"title": "Center for Sports Communication", "text": "Lowell Thomas Communications Center", "tags": "c, ce, cen, cent, cente, s, sp, spo, spor, sport, c, co, com, comm, comms, commu, commun, commui", "url": "javascript:showtooltip('#lt');"},
     
     //{"title": "Upperclass Residence", "text": "Lower New Townhouses", "tags": "", "url": ""},
     //{"title": "Freshman Residence", "text": "Marian Hall", "tags": "", "url": ""},
     
     {"title": "Marist Crew", "text": "Marist Boathouse", "tags": "c, cr, cre, b, bo, boa, boat, boath, boatho, boathou, boathous", "url": "javascript:showtooltip('#boat');"},
     
     {"title": "Athletic Department", "text": "The James J. McCann Recreation Center", "tags": "a, at, ath, athe, athl, athle, athlet, athleti, d, de, dep, dept, depa, depar, depart, departm, departme, departmen", "url": "javascript:showtooltip('#mccann');"},
     {"title": "Aerobic Center", "text": "The James J. McCann Recreation Center", "tags": "a, ae, aer, aero, aerob, aerobi, c, ce, cen, cent, cente", "url": "javascript:showtooltip('#mccann');"},
     {"title": "Center for Sports Medicine", "text": "The James J. McCann Recreation Center", "tags": "c, ce, cen, cent, cente, s, sp, spo, spor, sport, m, me, med, medi, medic, medici, medicin", "url": "javascript:showtooltip('#mccann');"},
     {"title": "McCann Arena", "text": "The James J. McCann Recreation Center", "tags": "m, mc, mcc, mcca, mccan", "url": "javascript:showtooltip('#mccann');"},
     {"title": "Fitness Center", "text": "The James J. McCann Recreation Center", "tags": "gy, gym, f, fi, fit, fitn, fitne, fitnes, c, ce, cen, cent, cente", "url": "javascript:showtooltip('#mccann');"},
     {"title": "Grey Gym", "text": "The James J. McCann Recreation Center", "tags": "g, gr, gre, gy", "url": "javascript:showtooltip('#mccann');"},
     {"title": "Hall of Fame Multimedia Room", "text": "The James J. McCann Recreation Center", "tags": "h, ha, hal, f, fa, fam, m, mu, mul, mult, multi, multim, multime, multimed, multimedi, r, ro, roo", "url": "javascript:showtooltip('#mccann');"},
     {"title": "Natatorium", "text": "The James J. McCann Recreation Center", "tags": "p, po, poo, Pool, s, sw, swi Swim, Swimming,  n, na, nat, nata, natat, natato, natator", "url": "javascript:showtooltip('#mccann');"},
     {"title": "Varsity Coaches Center", "text": "The James J. McCann Recreation Center", "tags": "v, va, var, vars, varsi, varsit, c, co, coa, coac, coach, coache, c, ce, cen, cent, cente", "url": "javascript:showtooltip('#mccann');"},
     
     //{"title": "Baseball Field", "text": "McCann Baseball Field", "tags": "", "url": ""},
     
     //{"title": "Upperclass Residence", "text": "Midrise Hall", "tags": "", "url": ""},
     
     {"title": "Admissions Visitor Center", "text": "Rotunda", "tags": "tour, a, ad, adm, admi, admis, admiss, admissi, admissio, v, vi, vis, visi, visit, c, ce, cen, cent, cente", "url": "javascript:showtooltip('#rt');"},
     {"title": "Campus Bookstore/Computer Store", "text": "Rotunda", "tags": "c, ca, cam, camp, campu, b, bo, boo, book, books, bookst, booksto, bookstor, c, co, com, comp, compu, comput, compute, s, st, sto, stor, sotr, comp stor", "url": "javascript:showtooltip('#rt');"},
     {"title": "Housing and Residential Life", "text": "Rotunda", "tags": "h, ho, hou, hous, house, housing, r, re, res, resi, resid, residen, resident, residenti, residentia, l, li, lif", "url": "javascript:showtooltip('#rt');"},

     {"title": "Cabaret", "text": "Murray Student Center/Music Building", "tags": "f, fo, foo, food, g, gr, gru, grub, c, co, cof, coff, coffe, coffee, c, ca, cab, caba, cabar, cabare", "url": "javascript:showtooltip('#sc');"},
     {"title": "Dining Hall", "text": "Murray Student Center/Music Building", "tags": "f, fo, foo, food, g, gr, gru, grub, c, co, cof, coff, coffe, coffee, d, di, din, dini, dinin, h, ha, hal", "url": "javascript:showtooltip('#sc');"},
     {"title": "Health and Wellness Center", "text": "Murray Student Center/Music Building", "tags": "h, he, hea, heal, healt, w, we, wel, well, welln, wellne, wellnes, c, ce, cen, cent, cente", "url": "javascript:showtooltip('#sc');"},
     {"title": "Music Department", "text": "Murray Student Center/Music Building", "tags": "m, mu, mus, musi, d, de, dep, dept, depa, depar, depart, departm, departme, departmen", "url": "javascript:showtooltip('#sc');"},
     {"title": "Nelly Goletti Theatre", "text": "Murray Student Center/Music Building", "tags": "n, ne, nel, nell, g, go, gol, gole, golet, golett, t, th, the, thea, theat, theatr", "url": "javascript:showtooltip('#sc');"},
     {"title": "Post Office", "text": "Murray Student Center/Music Building", "tags": "p, po, pos, o, of, off, offi, offic", "url": "javascript:showtooltip('#sc');"},
     {"title": "Student Activities", "text": "Murray Student Center/Music Building", "tags": "s, st, stu, st, stud, stude, studen, a, ac, act, acti, activ, activi, activit, activiti, activitie, activity", "url": "javascript:showtooltip('#sc');"},
     {"title": "Student Affairs", "text": "Murray Student Center/Music Building", "tags": "s, st, stu, st, stud, stude, studen, a, af, aff, affa, affai, affair", "url": "javascript:showtooltip('#sc');"},
     {"title": "Student Government Association", "text": "Murray Student Center/Music Building", "tags": "SGA, sg, s, st, stu, st, stud, stude, studen, g, go, gov, gove, gover, govern, governm, governme, governmen, a, as, ass, asso, assoc, associ, associa, associa, associat, associati, associatio", "url": "javascript:showtooltip('#sc');"},
     
     //{"title": "Upperclass Residence", "text": "North End Housing Complex", "tags": "", "url": "javascript:showtooltip('#rt');"},
     
     {"title": "ROTC", "text": "St. Ann's Hermitage", "tags": "r, ro, rot", "url": "javascript:showtooltip('#ann');"},
     
     {"title": "Upward Bound", "text": "St. Peter's", "tags": "u, up, upw, upwa, upwar, b, bo, bou, boun", "url": "javascript:showtooltip('#peter');"},
     
     //{"title": "Cognitive Computing Lab", "text": "Science and Allied Health Building", "tags": "", "url": "javascript:showtooltip('#ah');"},
     {"title": "Cognitive Computing Lab", "text": "Science and Allied Health Building", "tags": "c, co, cog, cogn, cogni, cognit, cogniti, cognitiv, c, co, com, comp, compu, comput, compute, computi, computin, l, la", "url": "javascript:showtooltip('#ah');"},
     {"title": "Doctorate of Physical Therapy", "text": "Science and Allied Health Building", "tags": "d, do, doc, doct, docto, doctor, doctora, doctorat, p, ph, phy, phys, physi, physic, physica, t, th, the, ther, thera, therap", "url": "javascript:showtooltip('#ah');"},
     {"title": "Gross Anatomy Lab", "text": "Science and Allied Health Building", "tags": "g, gr, gro, gros, a, an, ana, anat, anato, anatom, l, la", "url": "javascript:showtooltip('#ah');"},
     {"title": "Master's in Physician Assistant Studies", "text": "Science and Allied Health Building", "tags": "m, ma, mas, mast, maste, master, masters, p, ph, phy, phys, physi, physic, physica, a, as, ass, assi, assis, assist, assista, assistan, s, st, stu, stud, studi, studie", "url": "javascript:showtooltip('#ah');"},
     {"title": "School of Science", "text": "Science and Allied Health Building", "tags": "s, sc, sch, scho, schoo, s, sc, sci, scie, scien, scienc, sciences", "url": "javascript:showtooltip('#ah');"},
     
     /*{"title": "Freshman Residence", "text": "Sheahan Hall", "tags": "", "url": ""},*/
     
     {"title": "Art Gallery", "text": "Steel Plant Studios and Gallery", "tags": "a, ar, art, arts, g, ga, gal, gall, galle, galler", "url": "javascript:showtooltip('#st');"},
     {"title": "Digital Media", "text": "Steel Plant Studios and Gallery", "tags": "d, di, dig, digi, digit, digita, m, me, med, medi", "url": "javascript:showtooltip('#st');"},
     {"title": "Fashion Program", "text": "Steel Plant Studios and Gallery", "tags": "f, fa, fas, fash, fashi, fashio, p, pr, pro, prog, progr, progra", "url": "javascript:showtooltip('#st');"},
     {"title": "Fine Arts Program", "text": "Steel Plant Studios and Gallery", "tags": "f, fi, fin, a, ar, art, p, pr, pro, prog, progr, progra", "url": "javascript:showtooltip('#st');"},
     
     //{"title": "Multipurpose Athletic Stadium", "text": "Tenney Stadium at Leonidoff Field", "tags": "", "url": ""},
     
     {"title": "Tennis Courts", "text": "Tennis Pavilion", "tags": "tenn, tenni, t, te, ten, c, co, cou, cour, court", "url": "javascript:showtooltip('#tennis');"},
     /*{"title": "Upperclass Residence", "text": "Upper New Townhouses", "tags": "", "url": ""},
     {"title": "Upperclass Residence", "text": "West Cedar Townhouses (Lower)", "tags": "", "url": ""},
     {"title": "Upperclass Residence", "text": "West Cedar Townhouses (Upper)", "tags": "", "url": ""},*/
     {"title": "Marketplace", "text": "West Cedar Townhouses (Upper)", "tags": "f, fo, foo, food, g, gr, gru, grub, c, co, cof, coff, coffe, c, co, cof, coff, coffe, coffee, a, at, atm, m, ma, mar, mark, marke, market, marketp, marketpl, marketpla, marketplac", "url": "javascript:showtooltip('#uwc');"},
     {"title": "Building D", "text": "Building D", "tags": "Building D, f, fo, foo, f, fo, foo, food, g, gr, gru, grub, g, gy", "url": "javascript:showtooltip('#ng');"}

     //{"title": "", "text": "", "tags": "", "url": ""}
     
]};





