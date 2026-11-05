package edu.up4.repte12;

public class ValidadorReserva {
    public boolean esValid(String codi) {
        if (codi == null || codi.length() != 6) {
            return false;
        }
        return codi.matches("[A-Z]{2}\\d{4}");
    }
}
