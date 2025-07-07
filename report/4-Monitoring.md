
# Monitoring

## Sistema di reporting

Il progetto segue il framework Scrum con sprint settimanali: al termine di ogni settimana si verifica l’avanzamento e si pianifica il ciclo successivo, favorendo iterazioni rapide e feedback continui.

Per la gestione operativa dei task è stato adottato Microsoft Planning, sfruttando i canali dedicati e le bacheche integrate. Ogni attività viene registrata come scheda, assegnata ai membri del team e corredata da una data di scadenza precisa, così da mantenere chiari priorità e carico di lavoro.

Le riunioni di sincronizzazione si tengono con cadenza fissa ogni lunedì, momento in cui il team rivede quanto completato nello sprint appena concluso, aggiorna lo stato dei task e definisce gli obiettivi del nuovo sprint.


##  Issues Logging
Appena affiora un’anomalia, viene segnalata istantaneamente nel Daily Meeting della stessa giornata: tolleranza zero per ritardi o “problemi sotto il tappeto”. Il Project Manager la registra nell’Issue Log e assegna subito un owner preciso. Il referente crea istantaneamente un branch dedicato, `fix-{nome-problema}` isolando la correzione dal flusso principale di sviluppo. Terminato l’intervento, apre una pull request verso il branch d’origine: ne scaturiscono revisione paritaria, test automatici e tracciabilità completa fino al merge. Così l’intero ciclo, dalla scoperta alla chiusura, resta trasparente, versionato e ancorato al registro delle issue, trasformando ogni imprevisto in un passo misurabile verso la qualità.

### Registro Issues

| **ID** | **Data**   | **Descrizione**                                                                 | **Impatto sul progetto**                                                                                         | **Owner**        | **Azione correttiva prevista**                                                        | **Stato** | **Esito finale**                                           |
|--------|------------|----------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|------------------|----------------------------------------------------------------------------------------|-----------|------------------------------------------------------------|
| 01     | 22/05/2025 | Ambiguità nella sintassi DSL per definire tabelle con header                     | Formattazione incoerente tra PDF e HTML                                                                          | Daniel Capannini | Revisione sintassi + test mirati su documenti multi-tabella                        | Risolto   | Introdotto parametro `withHeader()`                        |
| 02     | 28/05/2025 | Comportamento inatteso nelle **liste annidate**                                  | HTML corretto, ma PDF non indentava in modo coerente                                                              | Luca Cantagallo  | Modifica del motore di rendering PDF + unit test dedicato                           | Risolto   | Risolto nello sprint 5                                     |
| 03     | 12/06/2025 | **Cambio template** rompeva layout precedenti                                    | Regressione stilistica tra versioni                                                                               | Luca Cantagallo  | Refactoring del sistema template + fallback su default                              | Risolto   | Rilascio previsto con milestone 20/06                      |
| 04     | 06/06/2025 | **Gestione contesti** troppo permissiva (es. `Subsection` fuori da `Section`)    | Possibilità di definire documenti sintatticamente validi ma semanticamente errati                                | Tutto il team    | Validazione a compile-time ➜ DSL bloccante se fuori contesto                        | Risolto   | Deploy fix il 07/06                                        |
| 05     | 10/06/2025 | Alcuni **test Gherkin** fallivano per output non deterministico                  | Rendering delle date e stili variabile secondo configurazione locale                                              | Daniel Capannini | Normalizzazione output + step Gherkin più robusti                                   | Risolto   | Risolto il 11/06                                           |
| 06     | 19/06/2025 | Confusione tra CSS personalizzati e template di default                          | L’utente sovrascriveva involontariamente margini e font senza volerlo                                             | Developer        | Introduzione flag `overrideStyles = true` + warning a compile-time                 | Risolto   | Delivery previsto entro sprint finale                      |
| 07     | 20/06/2025 | Render ricorsivo su sezioni molto annidate rallenta generazione PDF              | Performance degradata su documenti con >20 sezioni/subsection                                                     | Developer        | Inserimento cache intermedia sul grafo DSL                                          | Aperto    | -                                                          |
