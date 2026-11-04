package edu.up4.dobles;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class ServeiAvisosTest {
    @Test
    void dadaValidaRegistraUnEnviament() {
        EnviadorMemoria enviador = new EnviadorMemoria();
        ServeiAvisos servei = new ServeiAvisos(enviador);

        assertTrue(servei.avisar("ana@example.com", "Recordatori"));
        assertEquals(1, enviador.enviades().size());
        assertEquals("ana@example.com",
                enviador.enviades().get(0).destinatari());
    }

    @Test
    void dadaInvalidaNoInvocaLEnviament() {
        EnviadorMemoria enviador = new EnviadorMemoria();
        ServeiAvisos servei = new ServeiAvisos(enviador);

        assertFalse(servei.avisar("", "Recordatori"));
        assertTrue(enviador.enviades().isEmpty());
    }
}
