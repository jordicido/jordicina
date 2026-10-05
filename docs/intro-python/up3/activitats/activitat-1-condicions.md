---
hide:
  - navigation
---
# Activitat 1. Condicions i decisions

!!! info "Criteris d'avaluació"
    - **RA3.a** — Escriure i provar codi amb estructures de selecció.
    - **RA3.e** — Crear programes executables amb estructures de control.

## Producte

Una carpeta `activitat-1-condicions` amb un fitxer per exercici i un document breu amb els casos de prova utilitzats.

## Abans de començar

Per a cada exercici:

1. identifica les entrades;
2. escriu en paper les condicions i l'ordre en què s'han de comprovar;
3. prepara almenys un cas normal, un cas límit i un cas incorrecte;
4. implementa el programa;
5. executa els casos i anota qualsevol correcció.

## 1. Prediu el resultat

Sense executar el codi, indica què mostra cada expressió i justifica-ho.

```python
print(bool(0))
print(bool("0"))
print(bool(""))
print(3 < 5 < 8)
print("admin" in ["admin", "editor"])
print(None is None)
```

Comprova després les respostes amb Python.

## 2. Corregeix les condicions

El programa següent conté errors de sintaxi i de lògica:

```python
nota = float(input("Nota: "))

if nota = 5:
    print("Aprovat")
elif nota >= 9:
    print("Excel·lent")
elif nota >= 7:
    print("Notable")
else:
    print("Suspés")
```

Corregeix-lo perquè:

- rebutge notes fora de l'interval de 0 a 10;
- classifique correctament totes les notes;
- utilitze una comparació encadenada almenys una vegada.

## 3. Franja horària

| Element | Descripció |
| --- | --- |
| Entrada | Una hora entera entre 0 i 23. |
| Procés | Validar l'interval i classificar-la com matí, vesprada o nit. |
| Eixida | Missatge de salutació o indicació d'entrada no vàlida. |
| Casos mínims | `0`, `5`, `6`, `12`, `13`, `20`, `21`, `23`, `24`. |

Defineix els intervals abans d'escriure el programa. No deixes hores sense classificar ni intervals solapats.

## 4. Preu d'una reserva

Un espai ofereix aquestes tarifes:

- normal: 12 € per plaça;
- reduïda: 8 € per plaça;
- gratuïta: 0 €;
- qualsevol altre tipus s'ha de rebutjar.

Demana el tipus i el nombre de places. Utilitza `match-case` per seleccionar la tarifa i una guarda per comprovar que el nombre de places és positiu.

| Entrada | Procés | Eixida |
| --- | --- | --- |
| Tipus i places | Validar el tipus, validar les places i calcular el total | Tarifa, places i import total |

Prova com a mínim `normal/2`, `reduïda/1`, `gratuïta/4`, `normal/0` i un tipus desconegut.

## 5. Accés a una activitat

Una persona pot accedir si:

- té una reserva activa;
- no està bloquejada;
- i és major d'edat o està acompanyada.

Separa la condició en variables booleanes amb noms significatius. Després prepara una taula que cobrisca totes les combinacions rellevants.

## 6. Repte: prioritat de reserva

Classifica una reserva segons aquestes regles, en aquest ordre:

1. si està cancel·lada, no es processa;
2. si és d'emergència, té prioritat alta;
3. si és de grup i supera 10 places, té prioritat mitjana;
4. la resta té prioritat normal.

Justifica per què l'ordre de les condicions modifica el resultat.

## Evidències

- [ ] Els programes s'executen sense errors de sintaxi.
- [ ] Les condicions cobreixen tots els intervals.
- [ ] Hi ha casos de prova normals, límit i incorrectes.
- [ ] S'han utilitzat noms descriptius.
- [ ] Pots explicar per què s'executa cada branca.

[Índex de la UP3](../index.md) · [Teoria: estructures de selecció](../01-estructures-seleccio.md) · [Següent activitat: bucles](activitat-2-bucles.md)
