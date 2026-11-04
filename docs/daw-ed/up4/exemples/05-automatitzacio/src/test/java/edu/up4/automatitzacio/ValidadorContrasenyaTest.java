package edu.up4.automatitzacio;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ValidadorContrasenyaTest {
    @ParameterizedTest(name = "{0} → {1}")
    @CsvSource({
            "abc12345, true",
            "abcdefgh, false",
            "abc1234, false",
            "12345678, true"
    })
    void comprovaLaPolitica(String entrada, boolean esperat) {
        ValidadorContrasenya validador = new ValidadorContrasenya();

        assertEquals(esperat, validador.esValida(entrada));
    }
}
