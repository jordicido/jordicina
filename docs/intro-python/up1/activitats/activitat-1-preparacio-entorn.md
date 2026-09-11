---
hide:
  - navigation
---
# Activitat 1. Preparació de l’entorn

## Objectiu

Preparar l’ordinador per treballar durant el mòdul d’Introducció a la programació en Python i demostrar que l’entorn pot executar un primer programa des de VS Code i des de la terminal.

## Criteris d’avaluació treballats

| Criteri | Descripció | Pes sobre RA1 |
| --- | --- | ---: |
| **RA1.b** | Crear un projecte de desenvolupament amb una estructura ordenada. | 15 % |
| **RA1.c** | Utilitzar l’entorn integrat i seleccionar l’intèrpret adequat. | 20 % |
|  | **Total de l’activitat** | **35 %** |

## Tasca

### 1. Instal·lar Python

Instal·la Python 3 des de la font oficial indicada pel professorat. Comprova des de la terminal que funciona:

```bash
python --version
```

o, segons el sistema:

```bash
python3 --version
```

Anota la versió observada.

### 2. Instal·lar Visual Studio Code

Obri VS Code i comprova que funciona correctament. Reconeix l’explorador de fitxers, l’editor, la terminal integrada i el gestor d’extensions.

### 3. Instal·lar l’extensió de Python

Busca i instal·la l’extensió oficial de Python. Comprova que permet executar fitxers Python i seleccionar l’intèrpret.

### 4. Seleccionar l’intèrpret

Configura VS Code perquè utilitze la instal·lació de Python correcta. Comprova que coincideix amb la versió que has observat en la terminal.

### 5. Crear la carpeta de treball

Obri o crea aquesta estructura:

```text
python/
└── up1/
```

### 6. Crear `hola.py`

Escriu el fitxer següent dins de `up1`:

```python
print("Hola món!")
print("El meu entorn de Python funciona correctament.")
```

### 7. Executar el programa

Executa’l des de VS Code i des de la terminal:

```bash
python hola.py
```

Si el teu sistema necessita `python3`, utilitza aquesta ordre i anota-ho en el lliurament. El resultat ha de ser el mateix en els dos casos.

## Comprovació final

L’alumne haurà de poder mostrar:

- [ ] Python instal·lat i versió comprovada.
- [ ] VS Code instal·lat i operatiu.
- [ ] Extensió oficial de Python instal·lada.
- [ ] Intèrpret correcte seleccionat.
- [ ] Projecte `python/up1` creat.
- [ ] `hola.py` executat des de VS Code.
- [ ] `hola.py` executat des de la terminal.

La comprovació individual ha de durar aproximadament 1–2 minuts per alumne.

## Lliurament

Entrega el fitxer `hola.py` i un document breu amb la versió de Python, l’estructura creada i una evidència de les dues formes d’execució. Cada captura ha d’anar acompanyada d’una frase que indique què acredita.

No publiques rutes personals, credencials ni dades sensibles.

[Següent: sèrie d’exercicis](activitat-2-exercicis.md) · [Índex de la UP1](../index.md)
