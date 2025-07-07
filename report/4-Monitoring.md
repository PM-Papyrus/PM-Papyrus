
# Monitoring

## Sistema di reporting

Il progetto segue il framework Scrum con sprint settimanali: al termine di ogni settimana si verifica l’avanzamento e si pianifica il ciclo successivo, favorendo iterazioni rapide e feedback continui.

Per la gestione operativa dei task è stato adottato Microsoft Planning, sfruttando i canali dedicati e le bacheche integrate. Ogni attività viene registrata come scheda, assegnata ai membri del team e corredata da una data di scadenza precisa, così da mantenere chiari priorità e carico di lavoro.

Le riunioni di sincronizzazione si tengono con cadenza fissa ogni lunedì, momento in cui il team rivede quanto completato nello sprint appena concluso, aggiorna lo stato dei task e definisce gli obiettivi del nuovo sprint.


##  Issues Logging

Appena affiora un’anomalia, viene segnalata istantaneamente nel Daily Meeting della stessa giornata: tolleranza zero per ritardi o “problemi sotto il tappeto”. Il Project Manager la registra nell’Issue Log e assegna subito un owner preciso. Il referente crea istantaneamente un branch dedicato, `fix-{nome-problema}` isolando la correzione dal flusso principale di sviluppo. Terminato l’intervento, apre una pull request verso il branch d’origine: ne scaturiscono revisione paritaria, test automatici e tracciabilità completa fino al merge. Così l’intero ciclo, dalla scoperta alla chiusura, resta trasparente, versionato e ancorato al registro delle issue, trasformando ogni imprevisto in un passo misurabile verso la qualità.