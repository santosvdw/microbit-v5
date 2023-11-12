## Een project van [@santosvdw](https://github.com/santosvdw)

> Open deze pagina op [https://santosvdw.github.io/microbit-v5/](https://santosvdw.github.io/microbit-v5/)
>
> Dit project is geschreven in TypeScript


## Inhoud:
- [Programma van eisen](#pve)
- [Gebruiksaanwijzing](#ga)
- [Programmeerlogica](#pl)
- [Dit project gebruiken](#gae)
- [Dit project bewerken](#dpb)

<section id="pve"></section>

## Programma van eisen

Aan ons project hebben we wat eisen verbonden, om de micro:bit o.a. zo goed mogelijk te kunnen besturen en begrijpen. Dit staat samengevat in ons P.v.E.

1. Het moet eenvoudig zijn om morse code in te voeren
2. Het moet voor de gebruiker duidelijk zijn wat de uitkomst van de vertaalde morsecode is.
3. Als er een error is moet dat duidelijk zijn voor de gebruiker en moet de gebruiker opnieuw kunnen beginnen.

<section id="ga"></section>

## Gebruiksaanwijzing

Het doel van ons programma is voor de gebruiker om morsecode in te voeren, die vertaald wordt naar een letter/cijfer. Het resultaat moet worden weergeven op het scherm. Het resultaat wordt per letter weergeven en de gebruiker kan maar één letter per keer vertalen.

1. De gebruiker moet de knopjes A en B indrukken om morse code te vertalen. De A knop is een klein tikje (.) en de B knop is een groot tikje (-). 
2. Zodra de gebruiker de morse code heeft ingevoerd schudt hij de micro:bit. Daarna verschijnt de vertaalde morsecode op het scherm. Als de code niet bestaat verschijnt er een kruis.

<section id="pl"></section>

## Programmeerlogica

1. Maak een variabele die de knopjes input opslaat.
2. Voeg een waarde toe aan de input variabele elke keer dat een knop wordt ingedrukt. Bijv: knop A = 0, knop B = 1. Als knop A 2x wordt ingedrukt en knop B 1x is de waarde van de variabele 001.
3. Maak een lijst voor elke morse code waarde (A-Z, 0-9).
4. Als er wordt geschud moet een loop over alle morse codes gaan. De codes moeten dan vergeleken worden met de input variabele. 
5. Als de input variabele overeenkomt met een bestaande morse code dan wordt de matchende letter/cijfer weergeven op het scherm. Als dat niet zo is wordt er even een kruis op het scherm weergeven.
6. Zodra de loop is afgelopen (succesvol of niet) zal de input variabele leeg worden gemaakt en start het proces opnieuw.


<section id="gae"></section>

## Gebruiken als extensie

Deze repository kan worden toegevoegd als **extensie** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* klik op **Nieuw project**
* klik op **Extensies** onder het tandwielmenu
* zoeken naar **https://github.com/santosvdw/microbit-v5** en importeren

<section id="dpb"></section>

## Dit project bewerken

Om deze repository te bewerken in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* klik op **Importeren** en klik vervolgens op **Importeer URL**
* plak **https://github.com/santosvdw/microbit-v5** en klik op importeren

#### Metadata (gebruikt voor zoeken, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
