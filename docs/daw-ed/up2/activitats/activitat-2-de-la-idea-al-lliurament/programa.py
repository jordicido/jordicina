"""Monitor senzill de temperatures per a l'activitat 2 de la UP2."""

import os
import time


TEMPERATURES_INICIALS = [18, 21, 24, 19, 27]
LLINDAR_ALERTA = 30
TEMPERATURA_MINIMA_VALIDA = -100
TEMPERATURA_MAXIMA_VALIDA = 60


def validar_temperatures(temperatures):
    """Comprova que hi haja lectures i que siguen plausibles."""
    if not temperatures:
        raise ValueError("Cal proporcionar almenys una temperatura")

    invalides = [
        temperatura
        for temperatura in temperatures
        if not TEMPERATURA_MINIMA_VALIDA <= temperatura <= TEMPERATURA_MAXIMA_VALIDA
    ]
    if invalides:
        raise ValueError(f"Temperatures fora de rang: {invalides}")


def calcular_resum(temperatures):
    """Calcula les dades que necessita la pantalla del monitor."""
    validar_temperatures(temperatures)
    suma = sum(temperatures)
    maxima = max(temperatures)
    return {
        "temperatures": list(temperatures),
        "mitjana": suma / len(temperatures),
        "maxima": maxima,
        "minima": min(temperatures),
        # La incidència era usar >=: arribar exactament al llindar no és una alerta.
        "estat": "temperatura elevada" if maxima > LLINDAR_ALERTA else "temperatura normal",
    }


def imprimir_resum(resum):
    """Mostra el resum en un format llegible per a la persona usuària."""
    print("Temperatures:", *resum["temperatures"])
    print(f"\nMitjana: {resum['mitjana']:.1f} ºC")
    print(f"Mínima: {resum['minima']} ºC")
    print(f"Màxima: {resum['maxima']} ºC\n")
    print(f"Estat: {resum['estat']}")


def main():
    resum = calcular_resum(TEMPERATURES_INICIALS)
    imprimir_resum(resum)

    # En producció es conserven 30 s per poder observar el procés; les proves
    # poden posar MONITOR_ESPERA_SEGONS=0 i acabar immediatament.
    espera = int(os.getenv("MONITOR_ESPERA_SEGONS", "30"))
    if espera > 0:
        print(f"\nEl programa continuarà actiu durant {espera} segons...")
        time.sleep(espera)


if __name__ == "__main__":
    main()
