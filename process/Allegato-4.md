
# Allegato 4 - Stima dei costi


Vengono di seguito riportate le stime dei costi per la realizzazione del progetto.

<details>
<summary markdown='span' style="cursor: pointer; text-decoration:underline; color:#008CFF;">
    <strong>Stime attività requisito 1</strong>
</summary>

**Attività 1.1** Creazione struttura repository Git e progetto sbt

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- |-----------------|------------------|-----------|-------|---------|----------------|
| Round 1 | 4               | 5                | 5         | 4,66  | 5       | 5,00           |
| Round 2 | 5               | 5                | 5         | 5,00  | 5,00    | 5,00           |

| Unità di misura   | Unità |
| ----------------- |-------|
| Risorse assegnate | 2     |
| Durata stimata    | 3     |

**Attività 1.2** Inizializzazione directory di lavoro (`src`, `resources`, `test`)

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ |------------------|-----------|-------|---------|---------------|
| Round 1 | 3            | 8                | 3         | 4,67  | 3       | 4,94          |
| Round 2 | 4            | 6                | 4         | 4,67  | 4       | 4,94          |
| Round 3 | 5            | 5                | 5         | 5     | 5       | 5             |

| Unità di misura   | Unità |
| ----------------- |-------|
| Risorse assegnate | 2     |
| Durata stimata    | 3     |

**Attività 1.3** Configurazione del file `build.sbt` con supporto Scala 3

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- |-----------------|------------------|-----------|-------|---------|----------------|
| Round 1 | 2               | 2                | 2         | 2     | 2       | 2              |

| Unità di misura   | Unità |
| ----------------- |-------|
| Risorse assegnate | 1     |
| Durata stimata    | 2     |

**Attività 1.4** Aggiunta delle dipendenze principali (ScalaTest, Iron, Cucumber, ecc.)

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- |-----------------|------------------|-----------|-------|---------|----------------|
| Round 1 | 3               | 4                | 3         | 3,33  | 3       | 3,33           |
| Round 2 | 3               | 3                | 3         | 3     | 3       | 3              |

| Unità di misura   | Unità |
| ----------------- |-------|
| Risorse assegnate | 2     |
| Durata stimata    | 2     |

**Attività 1.5** Integrazione plugin sbt per test, documentazione ed export

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 10           | 8                  | 8              | 8,67  | 8       | 8,78           |
| Round 2 | 9            | 8                  | 8              | 8,33  | 8       | 8,39           |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 6   |

**Attività 1.6.1** Configurazione pipeline GitHub Actions - Build e compilazione

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 8            | 10                 | 8              | 8,67  | 8       | 8,78           |
| Round 2 | 9            | 9                  | 10             | 9,33  | 9       | 9,39           |
| Round 3 | 9            | 9,5                | 9,5            | 9,33  | 9,5     | 9,31           |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 7   |

**Attività 1.6.2** Configurazione pipeline GitHub Actions - Test automatici

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 3            | 0.5                | 2              | 2,50  | 2,5     | 2,50           |
| Round 2 | 1,5          | 1,5                | 1,5            | 1,50  | 1,5     | 1,50           |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 2   |

**Attività 1.6.3** Configurazione pipeline GitHub Actions - Generazione documentazione

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 2            | 2                  | 1,5            | 1,83  | 2       | 1,81           |
| Round 2 | 2            | 2                  | 1,75           | 1,92  | 2       | 1,90           |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 2   |

**Attività 1.6.4** Configurazione pipeline GitHub Actions - Deploy e rilascio versionato

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 3            | 3                  | 2,5            | 2,83  | 3       | 2,81           |
| Round 2 | 2,75         | 3                  | 2,5            | 2,75  | 2,75    | 2,75           |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 2   |

</details>

<details>
<summary markdown='span' style="cursor: pointer; text-decoration:underline; color:#008CFF;">
    <strong>Stime attività requisito 2</strong>
</summary>

**2. Progettazione e implementazione della libreria core**

**2.1 Implementazione dei modelli documentali**

**2.1.1 Metadata**

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | --------------- | ---------------- | --------- | ----- | ------- | -------------- |
| Round 1 | 4               | 6,5              | 5         | 5,17  | 5       | 5,19           |
| Round 2 | 5,5             | 6                | 6         | 5,83  | 6       | 5,81           |

| Unità di misura   | Unità |
| ----------------- | ----- |
| Risorse assegnate | 1     |
| Durata stimata    | 6     |

**2.1.2 Content**

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | --------------- | ---------------- | --------- | ----- | ------- | -------------- |
| Round 1 | 3               | 5                | 20        | 9,33  | 5       | 10,06          |
| Round 2 | 12              | 12               | 14        | 12,67 | 12      | 12,78          |
| Round 3 | 12              | 12               | 13        | 12,33 | 12      | 12,39          |

| Unità di misura   | Unità |
| ----------------- | ----- |
| Risorse assegnate | 1     |
| Durata stimata    | 12    |

**2.1.3 Title**

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | --------------- | ---------------- | --------- | ----- | ------- | -------------- |
| Round 1 | 3               | 5                | 20        | 9,33  | 5       | 10,06          |
| Round 2 | 12              | 12               | 14        | 12,67 | 12      | 12,78          |
| Round 3 | 12              | 12               | 13        | 12,33 | 12      | 12,39          |

| Unità di misura   | Unità |
| ----------------- | ----- |
| Risorse assegnate | 1     |
| Durata stimata    | 12    |

**2.1.4 Text**

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | --------------- | ---------------- | --------- | ----- | ------- | -------------- |
| Round 1 | 3               | 5                | 20        | 9,33  | 5       | 10,06          |
| Round 2 | 12              | 12               | 14        | 12,67 | 12      | 12,78          |
| Round 3 | 12              | 12               | 13        | 12,33 | 12      | 12,39          |

| Unità di misura   | Unità |
| ----------------- | ----- |
| Risorse assegnate | 1     |
| Durata stimata    | 12    |

**2.1.5 Table**

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | --------------- | ---------------- | --------- | ----- | ------- | -------------- |
| Round 1 | 3               | 5                | 20        | 9,33  | 5       | 10,06          |
| Round 2 | 12              | 12               | 14        | 12,67 | 12      | 12,78          |
| Round 3 | 12              | 12               | 13        | 12,33 | 12      | 12,39          |

| Unità di misura   | Unità |
| ----------------- | ----- |
| Risorse assegnate | 1     |
| Durata stimata    | 12    |

**2.1.6 Section**

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | --------------- | ---------------- | --------- | ----- | ------- | -------------- |
| Round 1 | 3               | 5                | 20        | 9,33  | 5       | 10,06          |
| Round 2 | 12              | 12               | 14        | 12,67 | 12      | 12,78          |
| Round 3 | 12              | 12               | 13        | 12,33 | 12      | 12,39          |

| Unità di misura   | Unità |
| ----------------- | ----- |
| Risorse assegnate | 1     |
| Durata stimata    | 12    |

**2.1.7 Subsection**

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | --------------- | ---------------- | --------- | ----- | ------- | -------------- |
| Round 1 | 3               | 5                | 20        | 9,33  | 5       | 10,06          |
| Round 2 | 12              | 12               | 14        | 12,67 | 12      | 12,78          |
| Round 3 | 12              | 12               | 13        | 12,33 | 12      | 12,39          |

| Unità di misura   | Unità |
| ----------------- | ----- |
| Risorse assegnate | 1     |
| Durata stimata    | 12    |

**2.1.8 Listing**

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | --------------- | ---------------- | --------- | ----- | ------- | -------------- |
| Round 1 | 3               | 5                | 20        | 9,33  | 5       | 10,06          |
| Round 2 | 12              | 12               | 14        | 12,67 | 12      | 12,78          |
| Round 3 | 12              | 12               | 13        | 12,33 | 12      | 12,39          |

| Unità di misura   | Unità |
| ----------------- | ----- |
| Risorse assegnate | 1     |
| Durata stimata    | 12    |

**2.1.9 Image**

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | --------------- | ---------------- | --------- | ----- | ------- | -------------- |
| Round 1 | 3               | 5                | 20        | 9,33  | 5       | 10,06          |
| Round 2 | 12              | 12               | 14        | 12,67 | 12      | 12,78          |
| Round 3 | 12              | 12               | 13        | 12,33 | 12      | 12,39          |

| Unità di misura   | Unità |
| ----------------- | ----- |
| Risorse assegnate | 1     |
| Durata stimata    | 12    |

---

**2.2 Modellazione e struttura interna**

**2.2.1 Definizione dei builder per ciascun componente**

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | --------------- | ---------------- | --------- | ----- | ------- | -------------- |
| Round 1 | 3               | 5                | 20        | 9,33  | 5       | 10,06          |
| Round 2 | 12              | 12               | 14        | 12,67 | 12      | 12,78          |
| Round 3 | 12              | 12               | 13        | 12,33 | 12      | 12,39          |

| Unità di misura   | Unità |
| ----------------- | ----- |
| Risorse assegnate | 1     |
| Durata stimata    | 12    |

**2.2.2 Costruzione del grafo documentale ricorsivo tramite builder**

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | --------------- | ---------------- | --------- | ----- | ------- | -------------- |
| Round 1 | 3               | 5                | 20        | 9,33  | 5       | 10,06          |
| Round 2 | 12              | 12               | 14        | 12,67 | 12      | 12,78          |
| Round 3 | 12              | 12               | 13        | 12,33 | 12      | 12,39          |

| Unità di misura   | Unità |
| ----------------- | ----- |
| Risorse assegnate | 1     |
| Durata stimata    | 12    |

---

**2.3 Gestione degli stili e template**

**2.3.1 Definizione del modello Style con attributi (font, colore, margini, ecc.)**

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | --------------- | ---------------- | --------- | ----- | ------- | -------------- |
| Round 1 | 20              | 25               | 35        | 26,67 | 25      | 26,94          |
| Round 2 | 26              | 30               | 33        | 29,67 | 30      | 29,61          |
| Round 3 | 30              | 30               | 32        | 30,67 | 30      | 30,78          |

| Unità di misura   | Unità |
| ----------------- | ----- |
| Risorse assegnate | 1     |
| Durata stimata    | 30    |

**2.3.2 Applicazione dei valori di default da template**

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | --------------- | ---------------- | --------- | ----- | ------- | -------------- |
| Round 1 | 6               | 13               | 12        | 10,33 | 12      | 10,06          |
| Round 2 | 12              | 13,5             | 13        | 12,83 | 13      | 12,81          |
| Round 3 | 12,5            | 13,5             | 13        | 13,00 | 13      | 13,00          |

| Unità di misura   | Unità |
| ----------------- | ----- |
| Risorse assegnate | 1     |
| Durata stimata    | 13    |

**2.3.3 Override locale o globale tramite DSL**

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | --------------- | ---------------- | --------- | ----- | ------- | -------------- |
| Round 1 | 10              | 11               | 16        | 12,33 | 11      | 12,56          |
| Round 2 | 13              | 18               | 19        | 16,67 | 18      | 16,44          |
| Round 3 | 17              | 19               | 19        | 18,33 | 19      | 18,22          |

| Unità di misura   | Unità |
| ----------------- | ----- |
| Risorse assegnate | 1     |
| Durata stimata    | 19    |

---

**2.4 Rendering del documento**

**2.4.1 Fase 1: generazione CSS (`renderStyle`)**

(vai in dettaglio margini, allineamento, colUnità)

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | --------------- | ---------------- | --------- | ----- | ------- | -------------- |
| Margini | 12,5            | 13,5             | 13        | 13,00 | 13      | 13,00          |
| Allineamento | 17         | 19               | 19        | 18,33 | 19      | 18,22          |
| ColUnità | 9               | 10               | 10-12     | 9,67  | 10      | 9,61           |

| Unità di misura   | Unità |
| ----------------- | ----- |
| Risorse assegnate | 1     |
| Durata stimata    | 19    |

**2.4.2 Fase 2: generazione HTML (`render`)**

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | --------------- | ---------------- | --------- | ----- | ------- | -------------- |
| Round 1 | X               | X                | X         | X     | X       | X              |

| Unità di misura   | Unità |
| ----------------- | ----- |
| Risorse assegnate | 1     |
| Durata stimata    | X     |

---

**2.5 Esportazione nei formati richiesti**

**2.5.1 Conversione da HTML a PDF, DOCX, Markdown (tramite librerie esterne)**

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | --------------- | ---------------- | --------- | ----- | ------- | -------------- |
| Round 1 | X               | X                | X         | X     | X       | X              |

| Unità di misura   | Unità |
| ----------------- | ----- |
| Risorse assegnate | 1     |
| Durata stimata    | X     |

**2.5.2 Supporto a generazione incrementale (solo i formati richiesti)**

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | --------------- | ---------------- | --------- | ----- | ------- | -------------- |
| Round 1 | X               | X                | X         | X     | X       | X              |

| Unità di misura   | Unità |
| ----------------- | ----- |
| Risorse assegnate | 1     |
| Durata stimata    | X     |

**2.5.3 Salvataggio opzionale, apertura automatica del file generato**

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | --------------- | ---------------- | --------- | ----- | ------- | -------------- |
| Round 1 | X               | X                | X         | X     | X       | X              |

| Unità di misura   | Unità |
| ----------------- | ----- |
| Risorse assegnate | 1     |
| Durata stimata    | X     |


</details>


<details>
<summary markdown='span' style="cursor: pointer; text-decoration:underline; color:#008CFF;">
    <strong>Stime attività requisito 3</strong>
</summary>

**3. Interfaccia e sintassi DSL**

**3.1 Definizione delle funzioni pubbliche (section, text, listing, ecc.)**

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | --------------- | ---------------- | --------- | ----- | ------- | -------------- |
| Round 1 | X               | X                | X         | X     | X       | X              |

| Unità di misura   | Unità |
| ----------------- | ----- |
| Risorse assegnate | 2     |
| Durata stimata    | X     |

---

**3.2 Gestione gerarchica dei contesti (es. subsection solo in section)**

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | --------------- | ---------------- | --------- | ----- | ------- | -------------- |
| Round 1 | X               | X                | X         | X     | X       | X              |

| Unità di misura   | Unità |
| ----------------- | ----- |
| Risorse assegnate | 1     |
| Durata stimata    | X     |

---

**3.3 Validazione statica tramite refinement types**

**3.3.1 Controllo su valori ammessi (es. font validi)**

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | --------------- | ---------------- | --------- | ----- | ------- | -------------- |
| Round 1 | X               | X                | X         | X     | X       | X              |

| Unità di misura   | Unità |
| ----------------- | ----- |
| Risorse assegnate | 1     |
| Durata stimata    | X     |

**3.3.2 Controllo sulla posizione e struttura degli elementi**

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | --------------- | ---------------- | --------- | ----- | ------- | -------------- |
| Round 1 | X               | X                | X         | X     | X       | X              |

| Unità di misura   | Unità |
| ----------------- | ----- |
| Risorse assegnate | 1     |
| Durata stimata    | X     |

---

**3.4 Gestione degli errori**

**3.4.1 Messaggi a compile-time chiari e bloccanti**

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | --------------- | ---------------- | --------- | ----- | ------- | -------------- |
| Round 1 | X               | X                | X         | X     | X       | X              |

| Unità di misura   | Unità |
| ----------------- | ----- |
| Risorse assegnate | 1     |
| Durata stimata    | X     |

**3.4.2 Fallback su valori di default se semanticamente coerenti**

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | --------------- | ---------------- | --------- | ----- | ------- | -------------- |
| Round 1 | X               | X                | X         | X     | X       | X              |

| Unità di misura   | Unità |
| ----------------- | ----- |
| Risorse assegnate | 1     |
| Durata stimata    | X     |

</details>

<details>
<summary markdown='span' style="cursor: pointer; text-decoration:underline; color:#008CFF;">
    <strong>Stime attività requisito 4</strong>
</summary>

**Attività 4.1.1** Progettazione di uno o più template predefiniti - Definizione HTML + CSS coerente (palette, font, margini, ...)

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 6            | 6                  | 7              | 6,33  | 6       | 6,39           |
| Round 2 | 6            | 6,5                | 7              | 6,50  | 6,5     | 6,50           |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 6,5 |

**Attività 4.2** Selezione del template nei metadati del documento

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 17           | 20                 | 24             | 20,33 | 20      | 20,39          |
| Round 2 | 20           | 21                 | 22             | 21,00 | 21      | 21,00          |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 21  |

**Attività 4.3.1** Possibilità di personalizzazione - A livello globale per l’intero documento nei metadati

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 6            | 6                  | 5              | 5,67  | 6       | 5,61           |
| Round 2 | 5,5          | 6                  | 5,5            | 5,67  | 5,5     | 5,69           |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 5,5 |

**Attività 4.3.2** Possibilità di personalizzazione - A livello locale per singoli elementi

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 18           | 22                 | 24             | 21,33 | 22      | 21,22          |
| Round 2 | 20           | 23                 | 24             | 22,33 | 23      | 22,22          |
| Round 3 | 22           | 24                 | 23             | 23,00 | 23      | 23,00          |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 23  |

**Attività 4.4** Predisposizione all’estensibilità con template definiti dall’utente - Interfaccia pubblica per override e registrazione

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 20           | 28                 | 30             | 26,00 | 28      | 25,67          |
| Round 2 | 28           | 28                 | 30             | 28,67 | 28      | 28,78          |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 29  |

</details>

<details>
<summary markdown='span' style="cursor: pointer; text-decoration:underline; color:#008CFF;">
    <strong>Stime attività requisito 5</strong>
</summary>

**Attività 5.1** Trasformazione DSL → builder → elementi → HTML + CSS

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 6            | 7                  | 5              | 6,00  | 6       | 6,00           |
| Round 2 | 6            | 6                  | 5              | 5,67  | 6       | 5,61           |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 6   |

**Attività 5.2** Gestione del flusso completo di generazione

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 32           | 26                 | 30             | 29,33 | 30      | 29,22          |
| Round 2 | 31           | 30                 | 30             | 30,33 | 30      | 30,39          |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 30  |

**Attività 5.2.1** Validazione iniziale (compile-time)

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 20           | 24                 | 27             | 23,67 | 24      | 23,61          |
| Round 2 | 21           | 24                 | 26             | 22,50 | 22,5    | 22,50          |
| Round 3 | 23           | 24                 | 25             | 24,00 | 24      | 24,00          |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 24  |

**Attività 5.2.2** Generazione CSS (`renderStyle`)

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 8            | 4                  | 5              | 5,67  | 5       | 5,78           |
| Round 2 | 7,5          | 7                  | 8              | 7,50  | 7,5     | 7,50           |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 8   |

**Attività 5.2.3** Generazione HTML (`render`)

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 5            | 5                  | 6              | 5,33  | 5       | 5,39           |
| Round 2 | 5,5          | 5                  | 6              | 5,50  | 5,5     | 5,50           |
| Round 3 | 5,5          | 5,5                | 6              | 5,67  | 5,5     | 5,69           |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 6   |

**Attività 5.2.4** Conversione in formato di output richiesto

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 16           | 12                 | 18             | 15,33 | 16      | 15,22          |
| Round 2 | 14           | 14                 | 15             | 14,33 | 14      | 14,39          |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 14  |

**Attività 5.3** Configurazione output nei metadati

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 16           | 12                 | 18             | 15,33 | 16      | 15,22          |
| Round 2 | 14           | 14                 | 15             | 14,33 | 14      | 14,39          |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 14  |

**Attività 5.4** Logging e gestione errori di generazione

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 16           | 12                 | 18             | 15,33 | 16      | 15,22          |
| Round 2 | 14           | 14                 | 15             | 14,33 | 14      | 14,39          |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 14  |

**Attività 5.4.1** Errori bloccanti a compile-time

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 16           | 12                 | 18             | 15,33 | 16      | 15,22          |
| Round 2 | 14           | 14                 | 15             | 14,33 | 14      | 14,39          |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 14  |

</details>

<details>
<summary markdown='span' style="cursor: pointer; text-decoration:underline; color:#008CFF;">
    <strong>Stime attività requisito 6</strong>
</summary>

**Attività 6.1** Esportazione di API Scala pubbliche (solo DSL e configurazione; meccanismi interni nascosti)

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 6            | 14                 | 10             | 10,00 | 10      | 10,00          |
| Round 2 | 11           | 12                 | 12             | 11,67 | 12      | 11,61          |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 3   |
| Durata stimata    | 5   |

**Attività 6.2** Fornire un plugin sbt con comandi semplici (comandi: `generateDoc`, `openDoc`, ecc...)

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 4            | 5                  | 8              | 5,67  | 5       | 5,78           |
| Round 2 | 5            | 5,5                | 7              | 5,83  | 5,5     | 5,89           |
| Round 3 | 6            | 6                  | 6              | 6,00  | 6       | 6,00           |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 6   |

**Attività 6.3** Compatibilità con pipeline CI/CD

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 4            | 5                  | 6              | 5,00  | 5       | 5,00           |
| Round 2 | 4,5          | 5,5                | 6              | 5,33  | 5,5     | 5,31           |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 6   |

**Attività 6.4.1** Documentazione tecnica - Scaladoc

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 15           | 20                 | 14             | 16,33 | 15      | 16,56          |
| Round 2 | 16           | 20                 | 18             | 18,00 | 18      | 18,00          |
| Round 3 | 17           | 20                 | 18             | 18,33 | 18      | 18,39          |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 18  |

**Attività 6.4.2** Documentazione tecnica - Esempi d’uso in formato `readme.md`

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 22           | 19                 | 24             | 21,67 | 22      | 21,61          |
| Round 2 | 21           | 20                 | 23             | 20,50 | 20,5    | 20,50          |
| Round 3 | 21           | 20                 | 22             | 21,00 | 21      | 21,00          |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 21  |

**Attività 6.5.1** Testing completo - Test unitari con ScalaTest

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 3            | 4                  | 5              | 4,00  | 4       | 4,00           |
| Round 2 | 5            | 5                  | 5              | 5,00  | 5       | 5,00           |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 5   |

**Attività 6.5.2** Testing completo - Test comportamentali con Gherkin + Cucumber

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 4            | 6                  | 6              | 5,33  | 6       | 5,22           |
| Round 2 | 5            | 6                  | 6              | 5,50  | 5,5     | 5,50           |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 6   |

**Attività 6.5.3** Testing completo - Test di integrazione su generazione ed export

| Stime   | Luca Cantagallo | Daniel Capannini | Developer | Media | Mediana | 3 point method |
| ------- | ------------ | ------------------ | -------------- | ----- | ------- | -------------- |
| Round 1 | 7            | 8                  | 6              | 7,00  | 7       | 7,00           |
| Round 2 | 7            | 7                  | 7              | 7,00  | 7       | 7,00           |

| Unità di misura   | Unità |
| ----------------- | --- |
| Risorse assegnate | 1   |
| Durata stimata    | 7   |


</details>
