INSERT INTO stuff (blahblah, type)
VALUES ('Hej, jag heter Magnus och läser webbprogrammering 120 poäng på distans på BTH. Annars jobbar jag med sjukvård och journalsystem, håller på att göra iordning ett gammalt hus som kräver en hel del tid. med mera. Jag har också en stor katt.', 'description_text');

INSERT INTO stuff (blahblah, type, kmom)
VALUES ('Här är en [länk till kursrepot på GitHub](https://github.com/MagnusLj/jsramverk)\nHär nedanför kommer lite text om var jag fick inspiration till registreringsformulär och datepicker.\nJag använde tips från den rekommenderade artikeln från Nielsen Norman Group. Då bland annat tipset med att  ha labels strax ovanför och inte för långt ifrån fältet de beskriver. Jag har också enligt tips från artikeln
            hållit fälten i en kolumn förutom där det var vettigare att ha dem i en rad med datepickern. Jag har också enligt
            artikelns tips låtit bli att använda placeholder-text och istället satt smålabels under vissa rutor för att
            instruera användaren.
            \nFör deras checklista för mobila registrerings- och loginformulär på mobiltelefoner föll många av tipsen
            på att det i instruktionerna för uppgiften står att man ska använda rätt HTML5-input i alla fält medan de i artikeln
            inte tycker om dold inmatning för lösenord. Tipset jag har följt från den artikeln är att jag instruerar om kravet på lösenord, under inmatningsrutan.<br><br>
            Jag fick inspiration för datepicker från "Designing the Perfect Date and Time Picker" (och då indirekt från Gmail och Yahoo)
            och gjorde enligt rekommendationerna en sådan där man skriver in datum och år manuellt och väljer månaden i en dropdown.
            \nValideringen kollar om det är något inmatat för namn, om det är en mailadress som ser vettig ut,
            om födelsedatumet är ifyllt och datumet är max 31 (jag lät i den här uppgiften bli att kolla för varje månads antal dagar och skottår),
            att året inte är i framtiden och
            att lösenorden är minst 8 tecken långa och matchar.', 'report_text', 2);

INSERT INTO stuff (blahblah, type, kmom)
VALUES ('Här är en [länk till kursrepot på GitHub](https://github.com/MagnusLj/jsramverk)

Här nedan kommer texten från README.md

```

# me-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference]
(https://cli.vuejs.org/config/).

```
'
, 'report_text', 1);
