#include <stdio.h>

#ifdef _WIN32
#include <windows.h>
#else
#include <unistd.h>
#endif

int main(void) {
    int temperatures[] = {18, 21, 24, 19, 27};
    int quantitat = sizeof(temperatures) / sizeof(temperatures[0]);
    int suma = 0;
    int maxima = temperatures[0];

    printf("Temperatures: ");
    for (int i = 0; i < quantitat; i++) {
        printf("%d%s", temperatures[i], i == quantitat - 1 ? "\n" : " ");
        suma += temperatures[i];
        if (temperatures[i] > maxima) {
            maxima = temperatures[i];
        }
    }

    printf("\nMitjana: %.1f ºC\n", (double) suma / quantitat);
    printf("Màxima: %d ºC\n\n", maxima);
    printf("Estat: %s\n", maxima >= 27 ? "temperatura elevada" : "temperatura normal");
    printf("\nEl programa continuarà actiu durant 30 segons...\n");
#ifdef _WIN32
    Sleep(30000);
#else
    sleep(30);
#endif

    return 0;
}
