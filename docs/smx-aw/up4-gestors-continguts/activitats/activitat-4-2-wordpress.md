---
hide:
  - navigation
---

# Activitat 4.2 — Implantació i administració del web ByteAcademy amb WordPress

**Mòdul:** Aplicacions Web · 2n d'SMX  
**Unitat:** UP4. Gestors de continguts web  
**Modalitat:** Individual  
**Criteris d'avaluació:** RA1.a–RA1.j.

## Context professional

L'empresa fictícia **ByteAcademy** ofereix formació en programació, sistemes i ciberseguretat. Necessita un web on els futurs alumnes puguen consultar cursos, llegir novetats i plantejar dubtes en un fòrum. L'equip de ByteAcademy també necessita diferents rols per publicar continguts i protegir el servei.

La teua tasca serà **implantar i administrar el web amb WordPress**. El professor et facilitarà una configuració de Docker Compose preparada; no has de crear el desplegament des de zero.

L'activitat es divideix en **tres fases**, cadascuna amb una validació presencial abans de continuar.

## Recursos de laboratori

Descarrega els fitxers preparats pel professor: [compose.yaml](../recursos/compose.yaml) i [variables-exemple.txt](../recursos/variables-exemple.txt). Copia les variables a un `.env` local, canvia les contrasenyes i no publiques aquest fitxer.

Utilitza també la [fitxa d'evidències de l'A4.2](fitxa-evidencies-a4-2.md) per registrar les proves i les tres validacions.

## Fase 1 — Instal·lació, continguts i personalització

**CA treballats:** RA1.a, RA1.c, RA1.d i part de RA1.f.

### 1. Preparar i instal·lar WordPress

1. Guarda el `compose.yaml` que proporciona el professor a la carpeta de l'activitat.
2. Prepara el fitxer de variables de configuració seguint les indicacions, sense publicar contrasenyes.
3. Identifica en el `compose.yaml` els servicis WordPress i MariaDB, el port web i els volums.
4. Inicia el desplegament i comprova que els servicis arranquen correctament.
5. Completa la instal·lació des del navegador i crea un administrador.
6. Anomena el lloc **ByteAcademy**.

**Respon en la fitxa d'evidències:** Quina funció tenen PHP, MariaDB i els volums en aquesta instal·lació?

### 2. Crear el web de ByteAcademy

Crea com a mínim les pàgines següents:

- **Inici:** presentació de l'acadèmia i enllaç als cursos.
- **Cursos:** tres propostes formatives amb títol i descripció.
- **Sobre nosaltres:** informació fictícia sobre l'organització.
- **Contacte:** informació de contacte fictícia (no utilitzes dades personals reals).

Afig també **dues entrades** de notícies relacionades amb els cursos. Assigna'ls una categoria adequada.

Configura el menú principal amb enllaços funcionals a les pàgines. La portada ha de ser la pàgina «Inici».

### 3. Personalitzar el web amb HTML i CSS

1. Selecciona el tema de blocs indicat pel professor.
2. Personalitza colors, tipografia i espaiat de manera coherent.
3. Incorpora una secció amb **HTML personalitzat o blocs amb classes pròpies**, inspirada en l'A4.1.
4. Escriu almenys **tres regles CSS pròpies** que modifiquen realment la secció. Una ha d'afectar la distribució o disposició i una altra algun aspecte visual.
5. Comprova'n l'efecte en pantalla ampla i estreta.

!!! important "El CSS ha de ser teu i comprensible"
    En la validació hauràs de mostrar una regla CSS i explicar què modifica. No és suficient copiar un fragment que no saps interpretar.

### 4. Proves inicials

Comprova la portada, el menú, una pàgina, una entrada i l'aparença mòbil. Anota **acció, resultat esperat i resultat observat**.

### Validació 1 — Amb el professor

Abans de passar a la fase 2, mostra:

- WordPress funcionant i accés al panell.
- Les quatre pàgines i les dues entrades.
- El menú sense enllaços trencats.
- La secció HTML/CSS pròpia i una explicació del codi.
- Les proves inicials de funcionament.

**Professor:** validat / pendent de correcció. Registra la data i l'observació a la fitxa.

---

## Fase 2 — Usuaris, rols, plugins i fòrum

**CA treballats:** RA1.b, RA1.f i RA1.h.

### 5. Administrar usuaris i rols

Crea aquests comptes ficticis:

| Usuari | Funció | Rol inicial |
|---|---|---|
| Maria | Responsable tècnica | Administradora |
| Anna | Responsable de continguts | Editora |
| Pau | Professor que publica notícies | Autor |
| Marc | Professor que proposa continguts | Col·laborador |

Si el teu administrador inicial és diferent de Maria, pots utilitzar aquell per a l'administració i crear Maria només si el professor ho indica; evita múltiples administradors sense necessitat.

**Comprova realment** almenys dues diferències de permisos: per exemple, Marc pot crear un esborrany però no publicar directament; Pau pot publicar una entrada pròpia però no instal·lar plugins.

### 6. Afegir un fòrum amb bbPress

1. Instal·la i activa **bbPress** (o la versió/alternativa compatible que indique el professor).
2. Crea el fòrum **Dubtes dels cursos**.
3. Incorpora un enllaç al fòrum en el menú.
4. Configura la visibilitat i els rols de participació/moderació segons les instruccions.
5. Publica almenys **dos temes de prova** i una resposta des d'un compte diferent.
6. Prova una acció pròpia d'un participant i una reservada a moderació.

!!! warning "Les regles d'accés s'han de provar"
    No dones per bo un fòrum perquè aparega al menú. Demostra amb usuaris diferents que les accions autoritzades funcionen i que les accions prohibides es deneguen.

### Validació 2 — Amb el professor

Mostra:

- La llista de comptes i els rols assignats.
- Una acció autoritzada i una altra denegada amb comptes diferents.
- El fòrum, els temes i les respostes.
- Una comprovació real de moderació o d'accés restringit.

**Professor:** validat / pendent de correcció. Registra la data i l'observació a la fitxa.

---

## Fase 3 — Manteniment, seguretat, còpia i proves finals

**CA treballats:** RA1.e, RA1.g, RA1.i i RA1.j.

### 7. Revisar actualitzacions

1. Identifica la versió de WordPress i els avisos d'actualització.
2. Revisa el tema i els plugins instal·lats.
3. Explica quins elements necessiten actualitzar-se i per què.
4. Amb autorització del professor, realitza una actualització **compatible i disponible**, després de fer la còpia de seguretat adequada. Si no hi ha cap actualització pendent, documenta-ho; no instal·les deliberadament versions vulnerables.
5. Comprova que la portada i el fòrum continuen funcionant.

### 8. Configurar i comprovar seguretat

- Revisa que els administradors siguen els estrictament necessaris.
- Comprova si el registre públic de nous usuaris està habilitat i configura'l segons la política de ByteAcademy.
- Revisa la moderació de comentaris si està activada.
- Elimina o desactiva extensions que no s'utilitzen, quan siga segur fer-ho.
- Comprova de nou que un compte ordinari no pot instal·lar plugins ni canviar opcions globals.

**Respon:** Quines dues mesures de seguretat consideres més importants en aquest web? Justifica-les.

### 9. Fer una còpia de seguretat

Utilitza el procediment o plugin indicat pel professor per generar una còpia que permeta recuperar els **continguts i recursos necessaris** del WordPress de ByteAcademy. Comprova que la còpia inclou les dades adequades (base de dades i fitxers del lloc, segons el procediment).

**Respon:** Per què exportar només les entrades de WordPress no equival a tindre una còpia completa de la instal·lació?

No entregues credencials ni còpies amb dades sensibles en un espai públic. Si hi ha una instància de restauració preparada, comprova que la còpia es pot recuperar sense afectar el web original.

### 10. Realitzar proves funcionals finals

Elabora una taula amb **almenys sis proves**. Han d'incloure obligatòriament:

- càrrega de la portada i navegació;
- visualització i funcionalitat d'una pàgina o entrada;
- personalització HTML/CSS en ordinador i mòbil;
- permís autoritzat o denegat d'un usuari;
- participació al fòrum;
- manteniment del funcionament després dels canvis.

Per a cada prova indica: acció, resultat esperat, resultat observat i si s'ha superat.

### Validació 3 — Amb el professor

Mostra:

- Revisió de versions i actualitzacions.
- Mecanismes de seguretat configurats.
- Còpia de seguretat i explicació de què conté.
- Taula de proves funcionals, amb almenys una prova reproduïda en directe.

**Professor:** validat / pendent de correcció. Registra la data i l'observació a la fitxa.

---

## Lliurament final

Entrega en Aules una **fitxa d'evidències en PDF** que incloga:

1. Requisits i identificació dels components.
2. Captura del web i explicació de la personalització HTML/CSS.
3. Evidències de rols i dues comprovacions de permisos.
4. Evidència del fòrum i de les regles d'accés.
5. Revisió de versions i configuració de seguretat.
6. Explicació de la còpia de seguretat i comprovació dels arxius generats.
7. Taula de proves funcionals.
8. Registre de les tres validacions del professor.

**No cal fer captures de cada clic.** És preferible una evidència ben explicada que moltes captures sense context.

## Criteris d'avaluació associats

| Criteri | Evidència principal |
|---|---|
| RA1.a | Identificació de requisits i components |
| RA1.b | Usuaris, rols i proves de permisos |
| RA1.c | Personalització del tema i HTML/CSS propi |
| RA1.d | Proves inicials del web |
| RA1.e | Revisió i actualització controlada |
| RA1.f | Menús i plugin instal·lat/configurat |
| RA1.g | Mecanismes de seguretat configurats i comprovats |
| RA1.h | Fòrum funcional i regles d'accés provades |
| RA1.i | Bateria final de proves |
| RA1.j | Còpia de seguretat verificable |

!!! info "Ús d'ajuda i comprensió"
    Pots consultar la documentació i utilitzar ferramentes d'ajuda d'acord amb les indicacions del professor. Has de poder explicar el funcionament del que entregues. Les proves i validacions es faran sobre el teu propi treball.
