package edu.up4.teoria;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class CalculadoraTest {
    private final Calculadora calculadora = new Calculadora();

    @Test
    void sumarDosEnters() {
        int resultat = calculadora.sumar(3, 5);

        assertEquals(8, resultat);
    }

    @Test
    void restarDosEnters() {
        assertEquals(2, calculadora.restar(5, 3));
    }

    @Test
    void dividirAdmetDecimals() {
        assertEquals(3.5, calculadora.dividir(7, 2));
    }

    @Test
    void dividirEntreZeroLlançaExcepcio() {
        assertThrows(IllegalArgumentException.class,
                () -> calculadora.dividir(7, 0));
    }
}
