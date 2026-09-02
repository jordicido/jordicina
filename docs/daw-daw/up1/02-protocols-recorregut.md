---
hide:
  - navigation
---
# 2. Protocols i recorregut d'una petició

## Des d'una URL fins a una resposta

Quan una persona obri `https://app.exemple.test`, el navegador necessita resoldre el nom, establir una connexió i enviar una petició. En un cas simplificat:

1. El resolutor consulta DNS per obtindre una adreça IP.
2. El client connecta amb el port del servei, habitualment 443 per HTTPS.
3. S'estableix TLS i es valida el certificat del servidor.
4. El navegador envia una petició HTTP amb mètode, ruta, capçaleres i, si cal, cos.
5. El servidor web decideix si serveix un recurs, aplica una regla o deriva la petició.
6. L'aplicació consulta dades o executa lògica i genera una resposta.
7. El client rep un codi d'estat, capçaleres i contingut.

## Protocols i ports

| Protocol | Funció | Port habitual | Observació |
| --- | --- | ---: | --- |
| DNS | Traducció de noms a adreces i altres registres. | 53 | Pot usar UDP o TCP segons la consulta. |
| HTTP | Comunicació web sense xifrat de transport. | 80 | No és adequat per a credencials o dades sensibles. |
| HTTPS | HTTP protegit amb TLS. | 443 | Requereix una configuració de certificat correcta. |
| FTP | Transferència d'arxius. | 21 | La seguretat i els modes actiu/passiu s'han de configurar. |
| SSH/SFTP | Administració i transferència segura. | 22 | SFTP no és el mateix protocol que FTP sobre TLS. |

## Comprovar sense suposar

Les eines de diagnòstic permeten separar les capes del problema:

```bash
getent hosts app.exemple.test
curl -I http://localhost
curl -vk https://localhost
```

En una pràctica local, adapta les ordres al servei autoritzat. El paràmetre `-k` només és útil per diagnosticar un certificat de prova; no és una solució de seguretat per a producció.

!!! tip "Pregunta de control"
    Un navegador mostra un error de DNS, però el servidor web està en execució. En quina capa has de començar el diagnòstic?

[Anterior: Models d'arquitectura](01-models-arquitectura.md) · [Següent: Servidors web i d'aplicacions](03-servidors-web-aplicacions.md) · [Tornar a l'índex](index.md)
