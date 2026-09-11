---
hide:
  - navigation
---
# 2. Preparació de l’entorn de desenvolupament

## Python i l’intèrpret

Python és el llenguatge de programació. L’intèrpret de Python és el programa que llegeix i executa el nostre codi.

Comprova des de la terminal que està instal·lat:

```bash
python --version
```

En alguns sistemes l’ordre és:

```bash
python3 --version
```

## Visual Studio Code

Visual Studio Code serà l’editor que utilitzarem durant el curs. Cal reconéixer aquests elements bàsics:

- explorador de fitxers;
- editor de codi;
- terminal integrada;
- gestor d’extensions;
- selector de l’intèrpret;
- opcions d’execució.

## Extensió de Python

Instal·lar l’extensió oficial de Python facilita el ressaltat de sintaxi, l’execució de programes, la detecció d’alguns errors i la selecció de l’intèrpret.

## Primer projecte

Treballarem amb una estructura ordenada:

```text
python/
└── up1/
    ├── hola.py
    ├── variables.py
    └── exercicis/
```

Crea `hola.py` amb aquest contingut:

```python
print("Hola món!")
print("El meu entorn de Python funciona correctament.")
```

Executa’l des de la terminal integrada:

```bash
python hola.py
```

També has de poder executar-lo amb l’opció d’execució de VS Code. El resultat ha de ser el mateix.

!!! warning "Versions i rutes"
    Anota la versió de Python i comprova que VS Code utilitza el mateix intèrpret que la terminal. No treballes amb rutes absolutes que només funcionen en un ordinador.

[Anterior: què és un programa](01-programa.md) · [Següent: `print()`](03-print.md) · [Índex](index.md)
