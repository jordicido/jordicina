package edu.up4.automatitzacio;

public class ValidadorContrasenya {
    public boolean esValida(String contrasenya) {
        if (contrasenya == null || contrasenya.length() < 8) {
            return false;
        }
        return contrasenya.chars().anyMatch(Character::isDigit);
    }
}
