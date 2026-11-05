package edu.up4.repte12;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

class ValidadorReservaTest {
    @Test
    void acceptaUnCodiComplet() {
        assertTrue(new ValidadorReserva().esValid("AB1234"));
    }
}
