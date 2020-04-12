**As I'm a Dutch student, I will initially make the interface in Dutch with the requirements from Dutch schools in mind. Later, I will hopefully make it also support English. Right now, the source code is a mix between English and Dutch. This documentation will be mostly Dutch from now on.**

## React

Dit project wordt gemaakt met React.js en Material UI. Ik heb voor React gekozen, omdat het goed werkt met single page applications. Ook al is dit project niet geheel single page, streef ik er wel naar om dit zo veel mogelijk in de toekomst voor elkaar te krijgen. React is hoe dan ook beter dan Bootstrap, wat ze nu bij itslearning gebruiken.

## Material UI

Hiervoor heb ik gekozen omdat het een groot framework is binnen React. Het wordt veel gebruikt en de community eromheen is groot. Bovendien is het een vrij licht framework en ziet het er erg netjes en professioneel uit. Alle gewenste functies kunnen gevonden worden in een handomdraai.

## Missende files

De bestanden "DatabaseConfig.js" en "ContentfulClient.js" missen in deze repo. Hierin staat gevoelige informatie over het verbinden met de twee databases die ik gebruik. Contentful wordt gebruikt voor het onderhouden van de vakken waar de leerling aan toegevoegd is. Momenteel is er nog geen systeem om gebruikers in bepaalde clusters toe te voegen. Er staan een paar testvakken op de homepagina, wanneer er ingelogd is. Deze testvakken zijn voor elke gebruiker hetzelfde. In "DatabaseConfig.js" wordt verbonden met Google Firebase. Dit wordt nu gebruikt voor gebruikersmanagement. Alleen ik kan accounts aanmaken en er is geen pagina om een account aan te maken. Dit is bewust gedaan, omdat een leerling een account van school verleend hoort te krijgen.