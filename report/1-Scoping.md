# Scoping

## Contesto

Papyrus è un progetto software open source realizzato da un gruppo di quattro studenti del corso di Laurea in Ingegneria e Scienze Informatiche dell’Università di Bologna, con l’obiettivo di sviluppare un Domain Specific Language per la generazione automatica di documenti in formato PDF e HTML. L’idea nasce da un’esigenza emersa internamente al gruppo: nel contesto di sviluppo in Scala mancavano strumenti dichiarativi, leggibili e tipizzati per la produzione di documentazione, mentre le soluzioni esistenti si basano su applicazioni esterne, spesso poco flessibili, come LaTeX o Word. Papyrus si propone quindi di offrire un linguaggio semplice e accessibile, che permetta la definizione di documenti leggibili anche da non esperti, mantenendo al tempo stesso un alto grado di tipizzazione, modularità e personalizzazione, con il supporto a più lingue e la separazione dello stile tramite file CSS.

Trattandosi di un progetto universitario sperimentale, non è presente un committente esterno. L’idea iniziale è stata proposta da Daniel Capannini, che ha assunto il ruolo di Product Owner. Il team, composto da quattro studenti, ha distribuito i ruoli in modo da coprire in modo efficace la gestione e lo sviluppo del progetto: Studente1 ha assunto il ruolo di Project Manager, Luca Cantagallo quello di Scrum Master, mentre Studente2 ha svolto il ruolo di sviluppatore. Tutti i membri hanno collaborato attivamente nella definizione degli obiettivi funzionali e non funzionali, nella progettazione della DSL e nell’identificazione delle funzionalità principali e dei possibili rischi.

## Riunione di definizione del progetto (*scoping meeting*)

**Scopo:** individuazione delle aspettative e dei requisiti del progetto.

**Partecipanti della riunione:**

| Membro             | Ruolo             |
|--------------------|-------------------|
| Daniel Capannini   | Product Owner     |
| Studente1          | Project Manager   |
| Luca Cantagallo    | Scrum Master      |
| Studente2          | Core Team Member  |

**Agenda:**

- introduzione (ad opera del Project Manager);
- scopo della riunione (ad opera del Project Manager);
- descrizione dell’opportunità progettuale;
- discussione delle *conditions of satisfaction*;
- descrizione dei *deliverable* attesi;
- definizione dei requisiti iniziali del sistema;
- scelta del modello PMLC da seguire;
- bozza e approvazione del POS.

**Sintesi svolgimento:**

La riunione iniziale ha coinvolto tutti i membri del team e ha permesso di chiarire la direzione da intraprendere per lo sviluppo. È emersa la volontà comune di creare una libreria che fosse realmente utile allo sviluppo, leggibile, tipizzata e pensata per essere integrata in flussi di lavoro automatici, affrontando criticità come la generazione di PDF e HTML, la gestione dello stile in CSS e la scrittura di tabelle e liste con una sintassi semplice. Sono stati identificati rischi come la complessità nella generazione dell’output PDF, l’eccessiva ambizione funzionale e la possibilità di una sintassi poco espressiva. Parallelamente sono stati fissati i criteri di successo, tra cui la chiarezza della DSL, la correttezza del rendering, e la fruibilità da parte di utenti non esperti. Le decisioni progettuali sono state prese collegialmente mediante votazione, con un peso maggiorato assegnato al Project Manager in caso di parità. È stato scelto un modello di processo adattativo basato su Scrum, con iterazioni brevi e rilascio progressivo delle funzionalità.

Nelle fasi immediatamente successive, il team ha definito un primo vocabolario condiviso, la struttura del linguaggio, una grammatica EBNF iniziale e una gerarchia delle entità principali. Sono stati redatti anche i primi diagrammi UML, che hanno supportato la suddivisione in moduli e la pianificazione del lavoro nei successivi sprint.
