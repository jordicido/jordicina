package edu.up4.dobles;

public class ServeiAvisos {
    private final EnviadorNotificacions enviador;

    public ServeiAvisos(EnviadorNotificacions enviador) {
        this.enviador = enviador;
    }

    public boolean avisar(String destinatari, String missatge) {
        if (destinatari == null || destinatari.isBlank()
                || missatge == null || missatge.isBlank()) {
            return false;
        }
        enviador.enviar(destinatari, missatge);
        return true;
    }
}
