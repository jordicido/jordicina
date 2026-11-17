package edu.iesmre.up4;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class CalculadoraTest {
    @Test
    void sumarDosEnters() {
        Calculadora calculadora = new Calculadora();
        assertEquals(8, calculadora.sumar(3, 5));
    }

    @Test
    void sumarAmbNegatius() {
        Calculadora calculadora = new Calculadora();
        assertEquals(2, calculadora.sumar(-3, 5));
    }

    @Test
    void restarDosEnters() {
        Calculadora calculadora = new Calculadora();
        assertEquals(4, calculadora.restar(10, 6));
    }

    @Test
    void dividirAdmetDecimals() {
        Calculadora calculadora = new Calculadora();
        assertEquals(3.5, calculadora.dividir(7, 2));
    }

    @Test
    void dividirEntreZeroLlançaExcepcio() {
        Calculadora calculadora = new Calculadora();
        assertThrows(IllegalArgumentException.class,
                () -> calculadora.dividir(7, 0));
    }
}
