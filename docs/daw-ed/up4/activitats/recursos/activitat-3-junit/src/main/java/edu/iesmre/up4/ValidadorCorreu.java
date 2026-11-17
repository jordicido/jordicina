package edu.iesmre.up4;

public class ValidadorCorreu {
    public boolean esValid(String correu) {
        if (correu == null || correu.isBlank()) { return false; }
        int arrova = correu.indexOf('@');
        return arrova > 0
                && arrova == correu.lastIndexOf('@')
                && arrova < correu.length() - 1
                && correu.indexOf('.', arrova) > arrova + 1;
    }
}
