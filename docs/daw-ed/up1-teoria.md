---
hide:
  - navigation
---
# UP1. Teoria · Del problema al programa en funcionament

!!! info "Com estudiar aquesta teoria"
    Recorre els huit apartats en ordre. En cada bloc intenta respondre la pregunta final abans de continuar. Els exemples són orientatius: una mateixa tecnologia pot combinar diverses formes d’execució.

## 1. El programa informàtic i el sistema

Un **programa informàtic** és un conjunt ordenat d’instruccions que permet a un ordinador realitzar una tasca. Una **aplicació** és un programa, o un conjunt de programes, orientat a una finalitat. Un **procés** és un programa que s’està executant.

### Programari de sistema i d’aplicació

| Tipus | Funció | Exemples |
| --- | --- | --- |
| Programari de sistema | Administra els recursos i ofereix serveis | Sistema operatiu, controladors, utilitats |
| Programari d’aplicació | Resol una necessitat de l’usuari | Navegador, editor, videojoc, aplicació web |

Quan executem un programa, el sistema operatiu el localitza en l’emmagatzematge, el carrega en la memòria RAM, crea un procés i assigna temps de processador. El programa rep dades mitjançant perifèrics o xarxes i genera resultats.

| Component | Paper en l’execució |
| --- | --- |
| Emmagatzematge | Conserva el programa i les dades |
| Memòria RAM | Manté temporalment les instruccions i dades en ús |
| Processador | Executa les instruccions |
| Sistema operatiu | Administra recursos i serveis |
| Perifèrics i xarxa | Permeten entrada, eixida i comunicació |

!!! tip "Pregunta de control"
    Quina diferència hi ha entre un programa emmagatzemat i un procés?

## 2. Llenguatges de programació

Un llenguatge de programació és un sistema formal per descriure dades, instruccions i processos. Té vocabulari, sintaxi i semàntica, a més de tipus de dades i estructures de control.

### Tres formes de classificar-los

- **Segons l’abstracció:** baix nivell (màquina i assemblador) o alt nivell (Java, Python, JavaScript, PHP, Kotlin o C#).
- **Segons el paradigma:** imperatiu, procedimental, orientat a objectes, funcional o declaratiu. SQL és un exemple de llenguatge declaratiu.
- **Segons l’execució:** compilat, interpretat, de codi intermedi o híbrid.

| Llenguatge | Paradigma habitual | Execució habitual | Ús freqüent |
| --- | --- | --- | --- |
| Java | Orientat a objectes | Bytecode sobre JVM | Aplicacions empresarials |
| Python | Multiparadigma | Intèrpret o màquina virtual | Automatització, dades i web |
| JavaScript | Multiparadigma | Motor del navegador o Node.js | Aplicacions web |
| C | Procedimental | Compilació | Sistemes i programari de base |
| SQL | Declaratiu | SGBD | Bases de dades |

Les classificacions no són excloents: depenen del llenguatge i de la implementació concreta.

!!! tip "Pregunta de control"
    Per què Java i Python no es poden classificar només com a “compilats” o “interpretats” sense més context?

## 3. Tipus de codi

| Tipus | Què és? | Execució directa |
| --- | --- | --- |
| Codi font | Text escrit per la persona programadora | Normalment no |
| Codi objecte | Resultat traduït per un compilador, sovint per fitxer | Normalment no |
| Codi intermedi | Representació entre el font i la màquina | Mitjançant un entorn o màquina virtual |
| Codi executable | Resultat preparat per al sistema operatiu | Sí, si té les dependències necessàries |

El codi font és llegible i modificable. El codi objecte i l’executable depenen més de l’arquitectura, del sistema operatiu i de les biblioteques. El codi intermedi busca conservar part de la portabilitat, com ocorre amb el bytecode de Java o el CIL de .NET.

!!! example "Exemple"
    `programa.c → programa.o` mostra una traducció a codi objecte. Encara caldrà completar el programa abans d’executar-lo.

!!! tip "Pregunta de control"
    Quin tipus de codi és el més adequat per modificar directament: el font o l’executable? Per què?

## 4. Del codi font al programa en execució

El camí concret depén de la tecnologia, però sol incloure traducció, preparació i execució.

```text
Codi font → traductor → codi objecte o intermedi → entorn d’execució → programa
```

- **Compilació:** tradueix el codi abans d’executar-lo i pot detectar errors de sintaxi o de tipus.
- **Interpretació:** un entorn llig i gestiona el codi durant l’execució.
- **Assemblatge:** tradueix assemblador a codi màquina o objecte.
- **Enllaçat:** combina fitxers objecte i biblioteques per generar un executable.
- **Màquina virtual:** ofereix un entorn independent de la màquina física concreta.

| Tecnologia | Esquema simplificat |
| --- | --- |
| C | Font → compilador → objecte → enllaçador → executable |
| Java | Font → `javac` → bytecode → JVM → execució |
| Python | Font → entorn Python → execució |
| JavaScript | Font → motor del navegador o Node.js → execució |

!!! tip "Pregunta de control"
    Quina funció té l’enllaçador i per què són necessàries les biblioteques?

## 5. Ferramentes del desenvolupament

Cada ferramenta resol una part del procés. En aquesta unitat les identificarem; la configuració detallada dels IDE i de les proves es treballarà en unitats posteriors.

| Ferramenta | Funció principal |
| --- | --- |
| Editor de codi | Crear i modificar codi font |
| IDE | Integrar editor, construcció, depuració, proves i extensions |
| SDK | Incloure compiladors, biblioteques, documentació i exemples d’una plataforma |
| Compilador o intèrpret | Traduir o gestionar l’execució del codi |
| Depurador | Examinar l’execució amb punts de ruptura i pas a pas |
| Construcció | Automatitzar neteja, compilació, proves i empaquetatge |
| Gestor de dependències | Declarar, descarregar i actualitzar biblioteques |
| Git i repositori remot | Registrar canvis i col·laborar |
| Proves i seguiment | Verificar comportament i registrar incidències |

Una ferramenta és adequada quan respon a la necessitat, s’integra amb el projecte, és mantenible i deixa evidències comprensibles.

!!! tip "Pregunta de control"
    Quina diferència hi ha entre un IDE i un SDK? Poden utilitzar-se junts?

## 6. Fases del desenvolupament de programari

Les fases ajuden a ordenar el treball, però no sempre formen una línia rígida: les proves poden obligar a tornar al disseny i el manteniment pot generar nous requisits.

1. **Necessitats:** quin problema es vol resoldre, per a qui i amb quines limitacions.
2. **Anàlisi:** què ha de fer el sistema; requisits, regles i casos d’ús.
3. **Disseny:** com es construirà; arquitectura, components, dades i interfícies.
4. **Codificació:** transformació del disseny en codi font.
5. **Proves:** verificació del comportament i detecció de regressions.
6. **Documentació:** informació per a usuaris, tècnics i mantenidors.
7. **Desplegament:** preparació en un servidor, ordinador, núvol, dispositiu o contenidor.
8. **Manteniment:** evolució correctiva, adaptativa, perfectiva o preventiva.

!!! note "Idea clau"
    Un projecte no acaba quan “funciona”: també cal poder provar-lo, documentar-lo, desplegar-lo i mantenir-lo.

## 7. Equips de desenvolupament

Els projectes professionals necessiten coneixements diversos, coordinació, repartiment de responsabilitats i revisió del treball.

| Perfil | Responsabilitat habitual |
| --- | --- |
| Client o responsable del producte | Defineix necessitats i prioritats |
| Analista | Concreta requisits |
| Arquitecte | Defineix l’estructura tècnica |
| Desenvolupador | Implementa funcionalitats |
| UX/UI | Dissenya experiència i interfície |
| QA o tester | Verifica la qualitat |
| DevOps o sistemes | Automatitza construcció i desplegament |
| Responsable de projecte | Coordina persones, terminis i recursos |

En equips xicotets, una persona pot assumir diversos rols. La coordinació necessita tasques clares, canals de comunicació, documentació, control de versions, revisió de codi i registre de decisions.

!!! tip "Pregunta de control"
    Per què és útil separar la responsabilitat de definir requisits de la d’implementar-los?

## 8. Metodologies de desenvolupament

Una metodologia orienta la planificació, el repartiment del treball, les decisions, la validació i la gestió dels canvis.

| Enfocament | Característiques | Quan pot encaixar |
| --- | --- | --- |
| Predictiu | Planificació detallada i canvis controlats | Requisits estables o regulació estricta |
| Iteratiu | Repeticions que revisen i milloren el producte | Quan cal aprendre durant el projecte |
| Incremental | Afegir funcionalitats progressivament | Quan es vol lliurar valor per parts |
| Àgil | Col·laboració, lliuraments freqüents i adaptació | Requisits canviants i retroalimentació contínua |

### Scrum i Kanban

- **Scrum:** treballa amb product backlog, esprints, planificació, revisió i retrospectiva.
- **Kanban:** visualitza el flux amb columnes com `Pendent`, `En procés`, `En revisió` i `Finalitzat`, i limita el treball en curs.

Les metodologies àgils no eliminen la planificació ni la documentació: les adapten perquè siguen útils i revisables.

!!! tip "Pregunta de control"
    Si els requisits canvien cada setmana, quin enfocament facilitaria més la retroalimentació: un pla tancat o un procés iteratiu i incremental?

## Resum en una pàgina

```text
Necessitat → anàlisi → disseny → codi font → traducció → proves
                                      ↓
                         eines + equip + metodologia
                                      ↓
                         desplegament i manteniment
```

Abans de passar a la pràctica, comprova que pots explicar: què és un procés, quina diferència hi ha entre els tipus de codi, per a què serveix un IDE, quines fases té un projecte i quan és útil una metodologia àgil.