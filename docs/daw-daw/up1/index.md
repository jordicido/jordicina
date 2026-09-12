---
hide:
  - navigation
title: "UP1. Arquitectures web i servidors"
description: "Material autosuficient per al treball semipresencial del RA1: arquitectures web, protocols, recursos, desplegament, Apache i Tomcat."
---

# UP1. Arquitectures web i servidors

Aquesta unitat és la porta d'entrada al mòdul de **Desplegament d'Aplicacions Web**. L'objectiu és entendre què ocorre entre el moment en què una persona escriu una adreça al navegador i el moment en què veu una aplicació funcionant.

Treballarem les peces principals d'una arquitectura web —**client, servidor web, servidor d'aplicacions, base de dades, DNS, HTTP/HTTPS i recursos d'infraestructura**— i acabarem instal·lant i configurant de manera bàsica **Apache HTTP Server** i **Apache Tomcat**.

![Esquema general d'una arquitectura web](../../assets/up1/arquitectura-web.svg)

!!! info "Com està pensat aquest material"
    El mòdul és **semipresencial** i disposem de poc temps de classe. Per això, aquests apunts estan redactats perquè pugues estudiar-los de manera autònoma: trobaràs explicacions, exemples, esquemes, ordres comentades, errors habituals i preguntes d'autoavaluació.

    La sessió presencial s'utilitzarà sobretot per a **resoldre dubtes, fer demostracions, revisar configuracions i avançar en les pràctiques**.

## Resultat d'aprenentatge

**RA1. Implanta arquitectures web analitzant i aplicant criteris de funcionalitat.**

En aquesta UP es treballen especialment els criteris següents:

| Criteri | Què has de saber fer |
|---|---|
| **RA1.a** | Analitzar aspectes generals de les arquitectures web, característiques, avantatges i inconvenients. |
| **RA1.b** | Descriure els fonaments i protocols en què es basa el funcionament d'un servidor web. |
| **RA1.g** | Analitzar l'estructura i els recursos que componen una aplicació web. |
| **RA1.h** | Descriure els requeriments del procés d'implantació d'una aplicació web. |
| **RA1.c** | Realitzar la instal·lació i configuració bàsica de servidors web. |
| **RA1.d** | Realitzar la instal·lació i configuració bàsica de servidors d'aplicacions. |

## Itinerari de la unitat

1. [Aspectes generals de les arquitectures web](01-arquitectures-web.md)
2. [Fonaments i protocols dels servidors web](02-fonaments-protocols.md)
3. [Estructura i recursos de les aplicacions web](03-estructura-recursos.md)
4. [Requisits del procés de desplegament](04-requisits-desplegament.md)
5. [Instal·lació i configuració d'Apache](05-servidor-web-apache.md)
6. [Servidors d'aplicacions i Apache Tomcat](06-servidor-aplicacions-tomcat.md)

## El cas conductor: DAWShop

Al llarg de la unitat utilitzarem una aplicació fictícia, **DAWShop**, per relacionar els conceptes.

DAWShop és una botiga web amb:

- una interfície que veu l'usuari;
- una API o backend que processa les operacions;
- una base de dades amb usuaris, productes i comandes;
- un servidor web que rep les peticions;
- un servidor d'aplicacions per executar la lògica Java;
- registres i sistemes de monitoratge per comprovar que tot funciona.

Una possible arquitectura seria:

```text
                         Internet
                            │
                            ▼
                    ┌────────────────┐
                    │      DNS       │
                    └────────────────┘
                            │
                            ▼
Usuari ── HTTPS ──> ┌────────────────┐
                    │ Apache HTTP    │
                    │ Server         │
                    └────────────────┘
                            │
                            ▼
                    ┌────────────────┐
                    │ Apache Tomcat  │
                    │ Aplicació Java │
                    └────────────────┘
                            │
                            ▼
                    ┌────────────────┐
                    │ PostgreSQL     │
                    └────────────────┘
```

Al principi pot semblar que hi ha moltes peces. L'objectiu de la UP és que, en acabar, sigues capaç d'explicar **què fa cadascuna i per què existeix**.

## Quatre preguntes que has de fer-te sempre

Davant qualsevol aplicació web, intenta respondre:

1. **Què s'executa al client?**
2. **Què s'executa al servidor?**
3. **On s'emmagatzemen les dades?**
4. **Com viatgen les peticions i les respostes?**

Si tens clares aquestes quatre preguntes, la resta de l'arquitectura és molt més fàcil d'analitzar.

## Com estudiar cada apartat

Et proposem aquest procés:

1. **Llig l'explicació completa** sense intentar memoritzar-la.
2. **Interpreta els esquemes**: intenta explicar-los amb les teues paraules.
3. **Reprodueix els exemples** quan hi haja ordres o configuracions.
4. Revisa el bloc **Idea clau** de cada apartat.
5. Contesta les **preguntes d'autoavaluació** sense mirar els apunts.
6. Si una resposta no la pots justificar, torna al punt corresponent.

!!! tip "No memoritzes ordres sense entendre-les"
    En desplegament és més important saber **què vols aconseguir, quin component has de configurar i on buscar l'error** que recordar de memòria totes les ordres.

## Mapa mental de la UP

| Pregunta | Peça que la resol |
|---|---|
| Qui mostra la interfície? | **Frontend / navegador** |
| Qui rep les peticions HTTP? | **Servidor web** |
| Qui executa la lògica de negoci? | **Backend / servidor d'aplicacions** |
| On es guarden les dades? | **Base de dades** |
| Com passem d'un nom a una IP? | **DNS** |
| Com demanem i rebem recursos? | **HTTP/HTTPS** |
| Com passem del codi a un sistema usable? | **Procés de desplegament** |
| Com comprovem que continua funcionant? | **Logs, monitoratge i manteniment** |

## Abans de començar

Per seguir les parts pràctiques necessitaràs, segons indique el professor:

- una màquina virtual o servidor amb **Ubuntu Server 24.04** o entorn equivalent;
- permisos d'administració (`sudo`);
- connexió de xarxa entre el teu equip i el servidor;
- editor de text en terminal;
- coneixements bàsics de Linux: directoris, permisos, processos i serveis.

No és necessari dominar Apache o Tomcat abans de començar: els configurarem des de zero.

---

!!! success "Objectiu final de la UP"
    En acabar hauries de poder mirar una arquitectura com **navegador → Apache → Tomcat → base de dades**, explicar el recorregut d'una petició, instal·lar els serveis i localitzar els fitxers de configuració i els logs bàsics quan alguna cosa falla.

[Presentació de la UP1](../up1-implantacio-arquitectures.md) · [Començar la teoria](01-arquitectures-web.md)
