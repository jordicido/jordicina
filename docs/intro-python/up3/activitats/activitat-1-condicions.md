---
hide:
  - navigation
---
# Activitat 1. Condicions i decisions

## Objectiu

Aprendre a fer que un programa prenga decisions amb `if`, `else` i `elif`. Els sis exercicis comencen amb una condició senzilla i incorporen gradualment més alternatives, intervals i operadors lògics.

No cal utilitzar funcions, llistes, bucles, excepcions ni `match-case`. Cada exercici s'ha de resoldre només amb variables, `input()`, conversions de tipus, operadors i condicionals.

## Criteris d'avaluació treballats

- **RA3.a** — Escriure i provar codi que faça ús d'estructures de selecció.
- **RA3.e** — Crear programes executables utilitzant estructures de control.
- **RA3.g** — Comentar i documentar el codi.

## Abans de començar

Crea aquesta estructura dins de la carpeta de la UP3:

```text
activitat-1-condicions/
├── ex01_espai_disc.py
├── ex02_requisit_ram.py
├── ex03_numero.py
├── ex04_temperatura.py
├── ex05_nota.py
├── ex06_diagnostic_xarxa.py
└── proves.md
```

En cada exercici segueix aquest procés:

1. identifica les dades d'entrada i el seu tipus;
2. escriu les alternatives que ha de distingir el programa;
3. ordena les condicions abans de programar;
4. implementa i executa el programa;
5. prova tots els casos indicats i anota el resultat en `proves.md`.

## Exercici 1. Avís d'espai en disc

### Nivell 1 · Un `if`

Demana els gigabytes lliures d'un disc. Si hi ha menys de 10 GB, mostra:

```text
Avís: queda poc espai en disc.
```

Després de la condició, mostra sempre:

```text
Comprovació finalitzada.
```

Utilitza només un `if`, sense `else`.

| Entrada | Eixida esperada |
| ---: | --- |
| `6` | Avís i missatge de finalització |
| `10` | Només missatge de finalització |
| `25` | Només missatge de finalització |

Abans d'executar, marca quina instrucció pertany al bloc del `if` i quina s'ha d'executar sempre.

## Exercici 2. Requisit de memòria RAM

### Nivell 2 · `if-else`

Un sistema operatiu necessita almenys 8 GB de memòria RAM. Demana quants gigabytes de RAM té l'ordinador i mostra exactament un d'aquests missatges:

- `L'equip compleix el requisit de RAM.` si té 8 GB o més;
- `L'equip no compleix el requisit de RAM.` si en té menys de 8.

Converteix el resultat d'`input()` a `int` abans de comparar-lo.

| Entrada | Eixida esperada |
| ---: | --- |
| `4` | `L'equip no compleix el requisit de RAM.` |
| `8` | `L'equip compleix el requisit de RAM.` |
| `16` | `L'equip compleix el requisit de RAM.` |

Explica en `proves.md` per què el valor `8` és un cas límit important i quina diferència hi ha entre utilitzar `>` i `>=` en aquest exercici.

## Exercici 3. Classificació d'un número

### Nivell 3 · Tres alternatives

Demana un número enter i indica si és:

- positiu;
- negatiu;
- o zero.

Utilitza una estructura `if-elif-else`. Les tres respostes són excloents: en cada execució només se n'ha de mostrar una.

| Entrada | Eixida esperada |
| ---: | --- |
| `8` | `El número és positiu.` |
| `-3` | `El número és negatiu.` |
| `0` | `El número és zero.` |

Escriu primer les dues comparacions necessàries. L'`else` ha de cobrir l'únic cas restant.

## Exercici 4. Temperatura de la CPU

### Nivell 4 · Intervals ordenats

Demana la temperatura actual d'una CPU en graus Celsius i classifica-la així:

| Temperatura | Estat |
| --- | --- |
| Menys de 40 °C | `Temperatura baixa.` |
| De 40 °C a menys de 70 °C | `Temperatura normal.` |
| De 70 °C a menys de 85 °C | `Temperatura elevada.` |
| 85 °C o més | `Temperatura crítica.` |

Utilitza `if`, dos blocs `elif` i `else`. Ordena les comprovacions de menor a major perquè cada temperatura quede classificada una sola vegada.

Prova com a mínim els valors `39`, `40`, `69`, `70`, `84` i `85`.

En `proves.md`, explica a quin interval pertany cada valor límit.

## Exercici 5. Qualificació d'una nota

### Nivell 5 · Validació i classificació

Demana una nota decimal. Primer comprova si està dins de l'interval de 0 a 10. Si no ho està, mostra `Nota no vàlida.`. Si és vàlida, classifica-la:

| Nota | Qualificació |
| --- | --- |
| De 0 a menys de 5 | `Suspés` |
| De 5 a menys de 7 | `Aprovat` |
| De 7 a menys de 9 | `Notable` |
| De 9 a 10 | `Excel·lent` |

Utilitza la comparació encadenada `0 <= nota <= 10` per validar l'interval. Pots fer la classificació dins del bloc que confirma que la nota és vàlida.

| Entrada | Eixida esperada |
| ---: | --- |
| `-1` | `Nota no vàlida.` |
| `0` | `Suspés` |
| `4.9` | `Suspés` |
| `5` | `Aprovat` |
| `7` | `Notable` |
| `9` | `Excel·lent` |
| `10` | `Excel·lent` |
| `11` | `Nota no vàlida.` |

## Exercici 6. Diagnòstic bàsic de xarxa

### Nivell 6 · Condicions combinades

Un tècnic vol fer un diagnòstic inicial d'un ordinador sense connexió. El programa ha de demanar aquestes tres dades:

- `Cable connectat? (si/no)`
- `Té adreça IP? (si/no)`
- `Respon el servidor? (si/no)`

L'usuari escriurà exactament `si` o `no`. Aplica les regles en aquest ordre:

1. si el cable no està connectat, mostra `Connecta el cable de xarxa.`;
2. si el cable està connectat però l'equip no té adreça IP, mostra `Revisa la configuració IP o el servei DHCP.`;
3. si té cable i adreça IP però el servidor no respon, mostra `Revisa la connexió amb el servidor.`;
4. si les tres respostes són `si`, mostra `La connexió bàsica funciona.`;
5. si alguna resposta no és `si` ni `no`, mostra `Resposta no vàlida.` en lloc de fer el diagnòstic.

Per validar les respostes, combina condicions amb `and` i `or`. Després utilitza un `if-elif-else` per al diagnòstic. No cal repetir preguntes ni tractar excepcions.

| Cable | IP | Servidor | Eixida esperada |
| --- | --- | --- | --- |
| `no` | `no` | `no` | Connectar el cable |
| `si` | `no` | `no` | Revisar IP o DHCP |
| `si` | `si` | `no` | Revisar la connexió amb el servidor |
| `si` | `si` | `si` | La connexió bàsica funciona |
| `potser` | `si` | `si` | Resposta no vàlida |

Dibuixa en `proves.md` un esquema senzill amb les decisions del diagnòstic abans d'escriure el codi.

## Document de proves

Completa en `proves.md` una taula per a cada exercici:

| Entrada | Resultat esperat | Resultat obtingut | Correcte? |
| --- | --- | --- | --- |
|  |  |  |  |

No cal incloure captures de totes les execucions. És més important registrar les dades utilitzades i comprovar si el resultat coincideix amb l'esperat.

## Requisits

- Cada fitxer s'ha de poder executar sense modificar el codi.
- Utilitza noms de variables descriptius i en `snake_case`.
- Indenta cada bloc amb quatre espais.
- No confundisques l'assignació `=` amb la comparació `==`.
- Cada alternativa ha de mostrar un missatge clar.
- Afig al principi de cada fitxer un comentari amb el nom de l'exercici i el seu objectiu.
- No utilitzes continguts posteriors de la unitat per simplificar la solució.

## Lliurament

Entrega la carpeta `activitat-1-condicions` amb els sis programes i `proves.md`.

En la comprovació individual, el professorat podrà demanar que executes un cas, expliques per què entra en una branca concreta o canvies un límit senzill. L'objectiu és comprovar que entens les condicions que has escrit.

## Abans d'entregar

- [ ] Hi ha sis fitxers `.py`, un per exercici.
- [ ] Tots els programes s'executen sense errors de sintaxi.
- [ ] He provat tots els casos indicats.
- [ ] Només s'executa una alternativa quan les opcions són excloents.
- [ ] He comprovat especialment els valors límit.
- [ ] Puc explicar cada condició amb les meues paraules.
- [ ] `proves.md` conté els resultats obtinguts.

[Índex de la UP3](../index.md) · [Teoria: estructures de selecció](../01-estructures-seleccio.md) · [Següent activitat: bucles](activitat-2-bucles.md)
