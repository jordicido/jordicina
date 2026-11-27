---
hide:
  - navigation
---
# 3. Tractament de documents

## De la memòria al disc

Una llista o un diccionari existeix mentre el programa està en execució. Quan el programa acaba, aquestes dades desapareixen de la memòria. Un fitxer permet conservar-les i recuperar-les més tard.

~~~mermaid
flowchart LR
    A["Fitxer local"] --> B["Llegir"]
    B --> C["Llista o diccionari"]
    C --> D["Processar"]
    D --> E["Exportar"]
    E --> A
~~~

El flux comú és:

1. Llegir el document.
2. Convertir-lo a estructures Python.
3. Processar, filtrar o modificar les dades.
4. Exportar el resultat.

Treballarem amb fitxers locals, rutes relatives i codificació UTF-8. Una ruta relativa parteix del directori de treball des d’on executem Python. Per exemple, recursos/inventari.json busca la carpeta recursos dins del directori actual.

## Fitxers de text

La funció open() obri un fitxer. El gestor de context with el tanca automàticament, fins i tot si es produeix un error.

~~~python
with open("notes.txt", "r", encoding="utf-8") as fitxer:
    contingut = fitxer.read()

print(contingut)
~~~

Els modes bàsics són:

| Mode | Ús | Precaució |
| --- | --- | --- |
| r | Llegir | El fitxer ha d’existir |
| w | Escriure des de zero | Sobreescriu el contingut |
| a | Afegir al final | Conserva el contingut existent |

Per escriure:

~~~python
with open("registre.txt", "w", encoding="utf-8") as fitxer:
    fitxer.write("Inici de la revisió\n")
    fitxer.write("AULA-01: operatiu\n")
~~~

Per afegir:

~~~python
with open("registre.txt", "a", encoding="utf-8") as fitxer:
    fitxer.write("AULA-02: pendent de revisar\n")
~~~

Amb for recorrem línia a línia. rstrip() elimina el salt de línia final sense llevar espais interns.

~~~python
with open("registre.txt", "r", encoding="utf-8") as fitxer:
    for linia in fitxer:
        print(linia.rstrip())
~~~

> **Avís:** el mode w sobreescriu el fitxer. A més, un document JSON o XML no es pot ampliar afegint text arbitrari al final i esperar que continue sent vàlid. Cal llegir-lo, modificar les dades Python i tornar-lo a escriure completament.

## Formats estructurats

Un format estructurat descriu dades amb unes regles que poden llegir persones i programes. Les mateixes cinc màquines es poden representar així:

| Format | Organització natural | Cas d’ús |
| --- | --- | --- |
| CSV | Files i columnes | Inventaris tabulars i exportació a un full de càlcul |
| JSON | Objectes i arrays niats | Intercanvi de dades estructurades |
| XML | Arbre d’elements, text i atributs | Documents jeràrquics i sistemes que requereixen etiquetes |

CSV és senzill i compacte, però els valors es llegeixen com a text i no expressa bé una jerarquia. JSON encaixa directament amb diccionaris i llistes, però no és una taula tan còmoda d’obrir manualment. XML és explícit i jeràrquic, però conté més etiquetes.

Totes les pràctiques d’aquesta UP utilitzen la biblioteca estàndard de Python.

## CSV

CSV significa valors separats per comes. Un fitxer pot tindre una capçalera i una fila per registre:

~~~text
nom,ram,so,estat
AULA-01,8,Ubuntu,operatiu
AULA-02,16,Windows,revisió
~~~

### Llegir amb DictReader

csv.DictReader converteix cada fila en un diccionari on les claus són les capçaleres. Amb newline="" evitem salts de línia addicionals, especialment en alguns sistemes.

~~~python
import csv

inventari = []
with open("inventari.csv", newline="", encoding="utf-8") as fitxer:
    lector = csv.DictReader(fitxer)
    for fila in lector:
        fila["ram"] = int(fila["ram"])
        inventari.append(fila)

print(inventari[0])
~~~

La conversió a int és necessària perquè les dades llegides d’un CSV són textos. Si volem decimals, utilitzarem float().

### Escriure amb DictWriter

DictWriter rep les capçaleres, escriu la capçalera amb writeheader() i escriu registres amb writerow() o writerows().

~~~python
import csv

inventari = [
    {"nom": "AULA-01", "ram": 8, "so": "Ubuntu", "estat": "operatiu"},
    {"nom": "AULA-02", "ram": 16, "so": "Windows", "estat": "revisió"},
]
columnes = ["nom", "ram", "so", "estat"]

with open("inventari-copia.csv", "w", newline="", encoding="utf-8") as fitxer:
    escriptor = csv.DictWriter(fitxer, fieldnames=columnes)
    escriptor.writeheader()
    escriptor.writerows(inventari)
~~~

Podem filtrar o modificar abans d’escriure:

~~~python
operatius = []
for equip in inventari:
    if equip["estat"] == "operatiu":
        copia = equip.copy()
        copia["estat"] = "revisat"
        operatius.append(copia)
~~~

## JSON

JSON representa objectes amb claus i valors, i arrays amb llistes. La correspondència bàsica és:

| JSON | Python |
| --- | --- |
| object | diccionari |
| array | llista |
| string | str |
| number | int o float |
| true / false | True / False |
| null | None |

~~~json
{
  "nom": "AULA-01",
  "ram": 8,
  "operatiu": true,
  "ip_reserva": null
}
~~~

### Llegir i escriure fitxers JSON

json.load() llig des d’un fitxer i construeix les estructures Python. json.dump() escriu estructures Python en un fitxer.

~~~python
import json

with open("inventari.json", "r", encoding="utf-8") as fitxer:
    inventari = json.load(fitxer)

inventari[0]["estat"] = "operatiu"

with open("inventari-actualitzat.json", "w", encoding="utf-8") as fitxer:
    json.dump(inventari, fitxer, indent=2, ensure_ascii=False)
~~~

indent=2 fa el document llegible. ensure_ascii=False conserva caràcters com la ç i els accents.

json.loads() i json.dumps() fan operacions semblants, però treballen amb cadenes de text en memòria, no directament amb fitxers. En la pràctica d’aquesta UP prioritzarem load() i dump().

El mòdul json també defineix JSONDecoder i JSONEncoder. Són les classes que participen en la conversió entre text JSON i objectes Python. Per als primers programes no cal crear-ne instàncies: load() i dump() ja ens ofereixen la interfície adequada.

~~~python
import json

print(json.JSONDecoder)
print(json.JSONEncoder)
~~~

## XML

XML descriu un arbre. Té un element arrel, elements fills, text i, si cal, atributs.

~~~xml
<inventari>
  <equip nom="AULA-01">
    <ram>8</ram>
    <so>Ubuntu</so>
    <estat>operatiu</estat>
  </equip>
</inventari>
~~~

En aquest arbre, inventari és l’arrel, equip és un element fill, nom és un atribut i ram conté text.

### Classes i mòdul

Utilitzarem xml.etree.ElementTree. Element representa un node de l’arbre i ElementTree representa el document complet.

### Llegir XML

~~~python
import xml.etree.ElementTree as ET

arbre = ET.parse("inventari.xml")
arrel = arbre.getroot()

for element_equip in arrel.findall("equip"):
    nom = element_equip.get("nom")
    ram = int(element_equip.find("ram").text)
    estat = element_equip.find("estat").text
    print(nom, ram, estat)
~~~

parse() llig el fitxer, getroot() obté l’arrel, find() busca el primer element que coincideix i findall() busca tots els fills que coincideixen. get() llig un atribut i text llig el contingut textual d’un element.

Si només esperem un equip concret, find() és suficient. Si volem recórrer l’inventari, utilitzem findall().

### Modificar XML

~~~python
for element_equip in arrel.findall("equip"):
    if element_equip.get("nom") == "AULA-02":
        element_equip.find("estat").text = "operatiu"

arbre.write("inventari-modificat.xml", encoding="utf-8", xml_declaration=True)
~~~

### Crear XML

Element() crea un element i SubElement() crea un fill. ElementTree() empaqueta l’arrel en un document que es pot guardar.

~~~python
import xml.etree.ElementTree as ET

arrel = ET.Element("inventari")
equip = ET.SubElement(arrel, "equip", {"nom": "AULA-06"})
ET.SubElement(equip, "ram").text = "16"
ET.SubElement(equip, "so").text = "Ubuntu"
ET.SubElement(equip, "estat").text = "operatiu"

arbre = ET.ElementTree(arrel)
arbre.write("nou-inventari.xml", encoding="utf-8", xml_declaration=True)
~~~

En aquesta UP no aprofundirem en XPath, esquemes ni namespaces. Treballarem amb documents locals de confiança i arbres senzills.

## Convertir CSV a JSON

El pas important no és copiar text directament entre formats: és convertir el document a estructures Python, processar-les i exportar-les.

~~~mermaid
flowchart LR
    C["CSV"] --> R["csv.DictReader"]
    R --> P["Llista de diccionaris"]
    P --> M["Filtrar o modificar"]
    M --> J["json.dump"]
    J --> O["JSON"]
~~~

~~~python
import csv
import json

inventari = []
with open("inventari.csv", newline="", encoding="utf-8") as fitxer:
    for fila in csv.DictReader(fitxer):
        fila["ram"] = int(fila["ram"])
        inventari.append(fila)

inventari = [
    equip for equip in inventari
    if equip["estat"] == "operatiu"
]

with open("inventari-operatiu.json", "w", encoding="utf-8") as fitxer:
    json.dump(inventari, fitxer, indent=2, ensure_ascii=False)
~~~

## Errors habituals i tractament guiat

No cal capturar tots els errors des del primer dia. Comença identificant quin problema pot passar i tracta’l amb l’excepció concreta.

~~~python
import json

try:
    with open("inventari.json", "r", encoding="utf-8") as fitxer:
        inventari = json.load(fitxer)
except FileNotFoundError:
    print("No s’ha trobat el fitxer")
except json.JSONDecodeError:
    print("El document JSON no té un format vàlid")
~~~

Errors que cal reconéixer:

| Excepció | Situació |
| --- | --- |
| FileNotFoundError | La ruta no existeix o el nom és incorrecte |
| json.JSONDecodeError | El JSON està mal format |
| ET.ParseError | L’XML no es pot analitzar |
| ValueError | Un text no es pot convertir a int o float |

Exemple de conversió segura:

~~~python
try:
    ram = int(fila["ram"])
except ValueError:
    print("La RAM no és un número:", fila["ram"])
~~~

Per XML:

~~~python
import xml.etree.ElementTree as ET

try:
    arbre = ET.parse("inventari.xml")
except FileNotFoundError:
    print("Falta el document XML")
except ET.ParseError:
    print("El document XML està mal format")
~~~

## Exercicis de consolidació

1. Escriu i llig un fitxer de text amb tres línies de registre.
2. Llig inventari.csv amb DictReader i converteix ram a enter.
3. Exporta només els equips operatius amb DictWriter.
4. Llig inventari.json, modifica l’estat d’un equip i guarda una còpia llegible.
5. Mostra la diferència entre json.load() i json.loads() amb una cadena curta.
6. Llig inventari.xml amb parse(), getroot(), find() i findall().
7. Modifica l’estat d’un equip XML i guarda el document.
8. Crea un XML amb Element i SubElement a partir d’una llista de diccionaris.
9. Provoca de manera controlada FileNotFoundError, ValueError i un error de format JSON; escriu quin missatge mostraries.
10. Completa el flux CSV → llista de diccionaris → filtratge → JSON.

## Comprova que ho entens

- Quina diferència hi ha entre dades en memòria i dades persistents?
- Per què CSV necessita conversió de ram a int?
- Quina correspondència hi ha entre objectes JSON i diccionaris Python?
- Què representen Element i ElementTree?
- Per què no és bona idea afegir una línia arbitrària al final d’un JSON?

[Anterior: diccionaris](02-diccionaris.md) · [Recursos de dades](recursos/index.md) · [Índex de la UP6](../up6-estructures-avancades.md)
