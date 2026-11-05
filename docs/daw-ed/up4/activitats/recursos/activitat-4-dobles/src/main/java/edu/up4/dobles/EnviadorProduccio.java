package edu.up4.dobles;

public class EnviadorProduccio implements EnviadorNotificacions {
    @Override
    public void enviar(String destinatari, String missatge) {
        System.out.println("Enviament conceptual a " + destinatari);
    }
}
