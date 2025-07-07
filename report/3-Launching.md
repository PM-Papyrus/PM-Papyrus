
# Launching

Una volta definita la struttura, i requisiti e le attività necessarie per soddisfarli, il team è pronto a passare alla fase di launching del progetto.

## Kick-off meeting

Nel kick-off meeting è stata condivisa con l’intero team di sviluppo una roadmap chiara: sono stati illustrati obiettivi, scadenze e aspettative del cliente, introducendo lo sponsor e presentando il team, quindi il committente ha descritto il progetto, il project manager ha dettagliato la pianificazione operativa, sono state definite le regole di lavoro e l’incontro si è concluso con una sessione di Q&A.

## Matrice di assegnazione delle responsabilità

| Attività                                                   | Project Manager | Daniel Capannini | Luca Cantagallo | Developer |
|------------------------------------------------------------|------------------|------------------|------------------|-----------|
| Avvio del progetto                                         | R                | A                | I                | I         |
| Configurazione workspace e CI/CD                           | A                | R                | R                | S         |
| Creazione struttura progetto (repo, sbt, dipendenze)       | A                | R                | R                | S         |
| Progettazione libreria core                                | C                | R                | R                | S         |
| Gestione stili e template                                  | A                | S                | R                | R         |
| Rendering documento multi-formato                          | C                | R                | R                | R         |
| Builder e DSL documentali                                  | C                | R                | R                | S         |
| Validazione statica e gestione errori                      | C                | R                | R                | S         |
| Testing unità, integrazione e comportamento                | A                | R                | R                | R         |
| API pubbliche e DSL                                        | C                | R                | R                | S         |
| Deploy finale e rilascio versionato                        | A                | R                | R                | C         |
| Consegna progetto                                          | R                | A                | C                | I         |


### Legenda

- **R) Responsible:** Persona responsabile dell’attività e del suo completamento consuccesso.
- **A) Accountable:** Persona Incaricato dell’approvazione del risultato dell’attività.
- **S) Supporting:** Risorsa assegnata per supportare il responsabile.
- **C) Consulted:** Persona disponibile per assistere il responsible.
- **I) Informed:** Persona membro che deve essere tenuto informato sullo stato di avanzamento.


## Regole operative per il team

### Tools

**Task management**: Le attività del progetto sono orchestrate attraverso YouTrack, utilizzato per modellare la WBS e generare il Gantt diagram, mentre l’assegnazione operativa dei task e la loro redistribuzione avvengono in Microsoft Teams, che funge da hub di collaborazione istantanea e garantisce comunicazioni rapide e visibilità condivisa sul carico di lavoro.

**Version control**: Il progetto adotta Git con un workflow Git Flow ben definito: feature, release e hotfix branch consentono al team di lavorare in parallelo, mentre le pull request su GitHub centralizzano le revisioni del codice e la fusione controllata nelle branch principali. Ogni commit viene tracciato, offrendo uno storico completo e la possibilità di ripristinare versioni precedenti se necessario; in più, le pipeline di Continuous Integration avviano automaticamente i test su ogni push, garantendo che la qualità del codice resti costante a ogni iterazione.

**Comunicazione**: Tutto il coordinamento interno avviene su Microsoft Teams, che centralizza videoconferenze, chat e condivisione di file. Le riunioni settimanali e i daily update vengono svolti direttamente sulla piattaforma, tenendo il gruppo costantemente sincronizzato. Chat tematiche e canali dedicati a specifiche aree di lavoro agevolano il flusso d’informazioni, migliorano la collaborazione e riducono i tempi di risposta, assicurando un allineamento puntuale fra tutti i membri del team.

### Meetings

Per mantenere un ritmo di lavoro costante, il team segue le cerimonie previste dal framework Scrum. Ogni meeting è disciplinato da linee guida che assicurano comunicazione chiara e collaborazione continua fra i membri. Le principali riunioni programmate sono:

**Daily Stand-up**: Riunione lampo di 15 minuti ogni giorno feriale: ciascun membro aggiorna il team su (1) attività completate il giorno prima, (2) attività pianificate per la giornata e (3) eventuali impedimenti. Se il gruppo non può incontrarsi dal vivo, la stand-up si svolge in call su Microsoft Teams o, in ultima istanza, con uno scambio di e-mail che mantiene traccia dei punti chiave.

**Sprint Planning**: All’avvio di ogni sprint, il Product Owner presenta obiettivi e priorità. Il team analizza le user stories, le suddivide in task granulari e stima l’effort in funzione della propria capacità. L’esito è un backlog di sprint chiaro, condiviso e realistico, che fissa l’impegno delle due settimane a venire.

**Sprint Review**: A fine sprint il team dimostra le funzionalità completate a Product Owner e stakeholder mediante una demo live. Si raccolgono feedback, si verifica la corrispondenza con i requisiti e si decide se rilasciare o rifinire le user stories. L’incontro garantisce trasparenza sul progresso e fornisce input preziosi per gli sprint successivi.

## Problem solving

Il team affronta i problemi con un metodo collaborativo strutturato secondo la “regola dei 5 punti” di Daniel Couger:

1. **Definizione del problema**: Il problema viene formalizzato insieme al suo “proprietario”, chiarendone contesto, confini e impatto.
2. **Analisi del problema**: Il gruppo indaga a fondo le cause originarie, esaminando tutte le variabili che possono aver contribuito alla situazione.
3. **Generazione di idee**: Si promuove un brainstorming aperto: ogni proposta è registrata e discussa, senza filtri o giudizi preliminari.
4. **Valutazione e priorità delle soluzioni**: Le alternative raccolte sono confrontate alla luce di criteri condivisi (efficacia, fattibilità, costo, tempo), quindi ordinate per rilevanza.
5. **Piano d’azione**: Viene stilato un programma dettagliato per l’implementazione della soluzione selezionata, completo di attività, risorse assegnate e scadenze.

## Gestione cambiamenti scope

Quando emerge la necessità di modificare lo scope, il team segue un processo strutturato e trasparente articolato in quattro fasi:

1. **Richiesta formale**: Il cambiamento viene inoltrato mediante una richiesta scritta che descrive in modo chiaro la natura della variazione e gli obiettivi desiderati.

2. **Analisi preliminare**: Il Project Manager esamina la proposta, stimandone l’impatto su costi, tempi e risorse; sulla base di questa valutazione decide se accogliere o respingere la modifica.

3. **Decision‐Making Meeting**: Se la richiesta è approvata, il team si riunisce per discutere le conseguenze operative, definire un piano di attuazione, assegnare i nuovi task e fissare le scadenze aggiornate.

4. **Aggiornamento del piano**: Il Project Manager integra le variazioni nel project plan e informa tutti i membri del team, assicurando che la documentazione e il backlog riflettano il nuovo scope.
