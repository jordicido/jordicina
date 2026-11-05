package edu.up4.activitats;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class CalculadoraEnviamentTest {
    private final CalculadoraEnviament calculadora = new CalculadoraEnviament();

    @Test
    void senseCupoTornaCincEuros() {
        assertEquals(5.0, calculadora.preuEnviament(20.0, false));
    }
}
