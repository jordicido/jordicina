import time


temperatures = [18, 21, 24, 19, 27]
mitjana = sum(temperatures) / len(temperatures)
maxima = max(temperatures)

print("Temperatures:", *temperatures)
print(f"\nMitjana: {mitjana:.1f} ºC")
print(f"Màxima: {maxima} ºC\n")
estat = "temperatura elevada" if maxima >= 27 else "temperatura normal"
print(f"Estat: {estat}")
print("\nEl programa continuarà actiu durant 30 segons...")
time.sleep(30)
