---
hide:
  - navigation
---
# 2. Diccionaris

## Per què necessitem claus?

Una llista és útil per a una sèrie ordenada de valors. Però un equip té diversos camps: nom, RAM, sistema operatiu i estat. Guardar cada camp en una llista diferent obliga a mantenir els mateixos índexs. Un diccionari associa cada clau amb el seu valor i fa explícit el significat de cada dada.

~~~mermaid
flowchart LR
    E["Equip AULA-01"] --> N["nom → AULA-01"]
    E --> R["ram → 8"]
    E --> S["so → Ubuntu"]
    E --> T["estat → operatiu"]
~~~

~~~python
noms = ["AULA-01", "AULA-02"]
rams = [8, 16]
estats = ["operatiu", "revisió"]

equip = {
    "nom": "AULA-01",
    "ram": 8,
    "so": "Ubuntu",
    "estat": "operatiu",
}
print(equip)
~~~

Les claus són úniques i, en Python modern, es conserva l’ordre d’inserció. En aquesta UP utilitzarem sobretot textos com a claus.

## Crear, consultar i modificar

Podem començar amb un diccionari buit i afegir-hi parelles. Assignar a una clau nova afig informació; assignar a una clau existent la modifica.

~~~python
equip = {}
equip["nom"] = "AULA-06"
equip["ram"] = 8
equip["ram"] = 16
print(equip)
~~~

Amb claudàtors accedim a una clau coneguda. Si no existeix, es produeix un error KeyError. get() permet indicar un valor alternatiu.

~~~python
print(equip["ram"])
print(equip.get("so", "No indicat"))

if "so" in equip:
    print("Sistema:", equip["so"])
else:
    print("Falta el sistema operatiu")
~~~

Recorda que in sobre un diccionari comprova les claus, no els valors.

## Afegir i eliminar parelles

Per eliminar podem utilitzar del o pop(). pop() retorna el valor eliminat i accepta un valor per defecte.

~~~python
equip = {"nom": "AULA-01", "ram": 8, "estat": "operatiu"}
equip["so"] = "Ubuntu"
equip.update({"ram": 16, "disc": 256})

del equip["disc"]
ram = equip.pop("ram")
equip.pop("ip", None)
print(equip)
print("RAM retirada:", ram)
~~~

## Recórrer claus, valors i parelles

keys() recorre les claus, values() els valors i items() les parelles.

~~~python
equip = {
    "nom": "AULA-01",
    "ram": 8,
    "so": "Ubuntu",
    "estat": "operatiu",
}

for clau in equip.keys():
    print(clau)

for valor in equip.values():
    print(valor)

for clau, valor in equip.items():
    print(f"{clau}: {valor}")
~~~

Normalment també podem escriure for clau in equip, perquè el recorregut directe visita les claus.

## Llista o diccionari?

| Necessitat | Estructura recomanada | Exemple |
| --- | --- | --- |
| Sèrie ordenada de temperatures | Llista | [41.2, 43.0, 44.1] |
| Camps d’un únic equip | Diccionari | nom, ram, so i estat |
| Molts equips amb els mateixos camps | Llista de diccionaris | diversos registres |
| Buscar per posició | Llista | equips[0] |
| Consultar un camp pel seu nom | Diccionari | equip[ram] |

La tria depèn de l’operació principal. No hi ha una estructura millor per a tots els problemes.

## Llistes de diccionaris

Una llista de diccionaris representa diversos registres amb els mateixos camps. És el pont natural cap a CSV i JSON.

~~~mermaid
flowchart TD
    L["inventari: llista"] --> E1["índex 0: diccionari"]
    L --> E2["índex 1: diccionari"]
    E1 --> F1["nom / ram / so / estat"]
    E2 --> F2["nom / ram / so / estat"]
~~~

~~~python
inventari = [
    {"nom": "AULA-01", "ram": 8, "so": "Ubuntu", "estat": "operatiu"},
    {"nom": "AULA-02", "ram": 16, "so": "Windows", "estat": "revisió"},
    {"nom": "AULA-03", "ram": 8, "so": "Ubuntu", "estat": "operatiu"},
]

print(inventari[0])
print(inventari[0]["ram"])
~~~

La primera consulta dona el registre complet. La segona tria un registre i després un camp.

### Afegir, consultar i buscar

~~~python
inventari.append({
    "nom": "AULA-04",
    "ram": 16,
    "so": "Ubuntu",
    "estat": "operatiu",
})

nom_buscado = "AULA-02"
trobat = None
for equip in inventari:
    print(equip["nom"], "-", equip["estat"])
    if equip["nom"] == nom_buscado:
        trobat = equip
        break

if trobat is not None:
    print("RAM:", trobat["ram"])
~~~

### Modificar i filtrar

Si trobem el diccionari, podem modificar un camp directament. Per filtrar, construïm una llista nova.

~~~python
if trobat is not None:
    trobat["estat"] = "operatiu"

operatius = []
for equip in inventari:
    if equip["estat"] == "operatiu":
        operatius.append(equip)

ubuntu = [equip for equip in inventari if equip["so"] == "Ubuntu"]
print("Operatius:", len(operatius))
print("Ubuntu:", len(ubuntu))
~~~

## Estadístiques i agrupacions

Podem sumar la RAM i comptar els equips operatius amb acumuladors. La llista buida sempre s’ha de tractar abans de dividir.

~~~python
ram_total = 0
equips_operatius = 0

for equip in inventari:
    ram_total += equip["ram"]
    if equip["estat"] == "operatiu":
        equips_operatius += 1

if inventari:
    print("RAM total:", ram_total, "GB")
    print("RAM mitjana:", ram_total / len(inventari), "GB")
print("Equips operatius:", equips_operatius)
~~~

Per agrupar per sistema operatiu utilitzem un diccionari de comptadors.

~~~python
per_so = {}
for equip in inventari:
    sistema = equip["so"]
    per_so[sistema] = per_so.get(sistema, 0) + 1

print(per_so)
~~~

## Exemple guiat

~~~python
inventari = [
    {"nom": "AULA-01", "ram": 8, "so": "Ubuntu", "estat": "operatiu"},
    {"nom": "AULA-02", "ram": 16, "so": "Windows", "estat": "revisió"},
    {"nom": "AULA-03", "ram": 8, "so": "Ubuntu", "estat": "operatiu"},
]

ram_total = 0
operatius = 0
per_so = {}

for equip in inventari:
    ram_total += equip["ram"]
    if equip["estat"] == "operatiu":
        operatius += 1
    so = equip["so"]
    per_so[so] = per_so.get(so, 0) + 1

print("RAM total:", ram_total, "GB")
print("RAM mitjana:", ram_total / len(inventari), "GB")
print("Operatius:", operatius)
print("Per sistema:", per_so)
~~~

## Exercicis de consolidació

1. Crea un diccionari d’un equip amb les claus nom, ram, so i estat.
2. Consulta la RAM amb claudàtors i prova una clau inexistent. Repeteix-ho amb get().
3. Afig disc, modifica estat i elimina una clau amb pop().
4. Recorre el diccionari amb items() i mostra cada parella.
5. Crea quatre equips i mostra només els operatius.
6. Busca un equip pel nom i modifica la seua RAM.
7. Calcula RAM total i mitjana. Comprova també una llista buida.
8. Compta quants equips hi ha de cada sistema operatiu.

## Comprova que ho entens

- Per què és incòmode representar un equip amb quatre llistes paral·leles?
- Quina diferència hi ha entre accedir amb claudàtors i utilitzar get()?
- Quina estructura representa millor molts equips amb els mateixos camps?
- Què significa que les claus d’un diccionari siguen úniques?

[Anterior: llistes](01-llistes.md) · [Següent: tractament de documents](03-documents.md) · [Índex de la UP6](index.md)
