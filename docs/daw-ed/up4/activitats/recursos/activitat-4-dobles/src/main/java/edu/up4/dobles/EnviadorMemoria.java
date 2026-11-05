package edu.up4.dobles;

import java.util.ArrayList;
import java.util.List;

public class EnviadorMemoria implements EnviadorNotificacions {
    public record Notificacio(String destinatari, String missatge) {}

    private final List<Notificacio> enviades = new ArrayList<>();

    @Override
    public void enviar(String destinatari, String missatge) {
        enviades.add(new Notificacio(destinatari, missatge));
    }

    public List<Notificacio> enviades() {
        return List.copyOf(enviades);
    }
}
