# Allegato 6 - Risk Analysis

## Identuificazione dei rischi

- TECNICO
  - Il team non ha esperienza sufficiente con Scala 3.
  -  il progetto richiede l’utilizzo di tecnologie e strumenti sconosciuti ai membri del team di svliuppo;
  - Il team ha limitata esperienza riguardo l’utilizzo di tecnologie e strumenti per il continuous deployment in ambienti di produzione.
- ORGANIZZAZIONALE
  - rischio di forate il budjet (monte ore di lavoro).
  - visto che il team segue anche altri progetti si potrebbero verificare ritardi nella consegna del progetto.
- ESTERNO
  - La libreria potrebbe essere trovata poco interessante da parte degli utenti finali.

## Assessment

I livelli di impatto e priorità sono categorizzati in 4 livelli:

- **B**: basso.
- **M**: medio.
- **A**: alto.
- **C**: critico.

| Categoria di rischio | Scope   | Evento # | Evento                                                                                              | Probabilità | Impatto | Priorità |
|----------------------|---------|----------|-----------------------------------------------------------------------------------------------------|-------------|---------|----------|
| TECNICO              | Qualità | TC1      | Mancata qualità dovuta all’inesperienza del team di sviluppo                                        | 0.7         | C       | A        |
| TECNICO              | Qualità | TC2      | Le tecnologie CI/CD ritardano il rilascio in produzione                                             | 0.2         | A       | A        |
| TECNICO              | Qualità | TC3      | Il mal utilizzo delle tecnologie adottate provocato da un uso improprio, causa di poca flessibilita | 0.8         | C       | C        |
| ORGANIZZATIVO        | Budget  | OR1      | Sforamento del budget                                                                               | 0.6         | M       | B        |
| ORGANIZZATIVO        | Budget  | OR2      | Ritardi nella consegna                                                                              | 0.5         | M       | B        |
| ESTERNO              | Mercato | ES1      | Il sistema finale ha meno appeal rispetto a quanto preventivato                                     | 0.8         | B       | B        |


![Matrice dei rischi](../diagram/matrice_rischi.png)

## Gestione dei rischi

| Evento # | Gestione | Descrizione                                                     |
|----------|----------|-----------------------------------------------------------------|
| TC1      | Mitigate | Formazione del team su Scala 3                                  |
| TC2      | Mitigate | Formazione del team sulle tecnologie CI/CD                      |
| TC3      | Mitigate | Formazione del team sulle struttere avanzate di Scala e dei DSL |
| OR1      | Mitigate | Monitoraggio costanta della tabella di marcia                   |
| OR2      | Accept   |                                                                 |
| ES1      | Accept   |                                                                 |
