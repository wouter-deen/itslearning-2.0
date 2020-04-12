**As I'm a Dutch student, I will initially make the interface in Dutch with the requirements from Dutch schools in mind. Later, I will hopefully make it also support English. Right now, the source code is a mix between English and Dutch. This documentation will be mostly Dutch from now on.**

## Welcome

Hey there! The regular itslearning has become very clunky to use and filled to the brim with features no one uses. Especially when server-side network traffic is at it's peak, pages can be extremely slow to respond to any interaction. When the COVID-19 outbreak began to strike its victims and all of schools portals became extremely slow, I realised I had to do something. While I've never coded anything with React.js in the past, I have a little bit of experience with JS. While fun to make a new online portal for schools (in the Netherlands), this is also a personal project to learn JavaScript development with React.js.
An online portal like itslearning is utterly important for distance-schooling like the type the whole world needs in an international virus outbreak. It has to be fast, responsive and easy to use: from admin and teacher to student and parents. If you use itslearning a lot, you've probably experienced a lot of downtime and just low responsiveness when a lot of users are logged in to the site. And that's why you shouldn't use Bootstrap!
This is ItsLearning 2.0. Keep on learning. ItsLearning.

## React

Dit project wordt gemaakt met React.js. Ik heb voor React gekozen, omdat het goed werkt met single page applications. Ook al is dit project niet geheel single page, streef ik er wel naar om dit zo veel mogelijk in de toekomst voor elkaar te krijgen. React is hoe dan ook beter dan Bootstrap, wat ze nu bij itslearning gebruiken.

## Material UI

Hiervoor heb ik gekozen omdat het een groot framework is binnen React. Het wordt veel gebruikt en de community eromheen is groot. Bovendien is het een vrij licht framework en ziet het er erg netjes en professioneel uit. Alle gewenste functies kunnen gevonden worden in een handomdraai.

## Missende files

De bestanden "DatabaseConfig.js" en "ContentfulClient.js" missen in deze repo. Hierin staat gevoelige informatie over het verbinden met de twee databases die ik gebruik. Contentful wordt gebruikt voor het onderhouden van de vakken waar de leerling aan toegevoegd is. Momenteel is er nog geen systeem om gebruikers in bepaalde clusters toe te voegen. Er staan een paar testvakken op de homepagina, wanneer er ingelogd is. Deze testvakken zijn voor elke gebruiker hetzelfde. In "DatabaseConfig.js" wordt verbonden met Google Firebase. Dit wordt nu gebruikt voor gebruikersmanagement. Alleen ik kan accounts aanmaken en er is geen pagina om een account aan te maken. Dit is bewust gedaan, omdat een leerling een account van school verleend hoort te krijgen.