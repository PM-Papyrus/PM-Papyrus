# Scoping

# Contesto

Papyrus è un progetto software open source realizzato da un gruppo di quattro studenti del corso di Laurea in Ingegneria e Scienze Informatiche dell’Università di Bologna, con l’obiettivo di sviluppare un Domain Specific Language per la generazione automatica di documenti in formato PDF e HTML. L’idea nasce da un’esigenza emersa internamente al gruppo: nel contesto di sviluppo in Scala mancavano strumenti dichiarativi, leggibili e tipizzati per la produzione di documentazione, mentre le soluzioni esistenti si basano su applicazioni esterne, spesso poco flessibili, come LaTeX o Word. Papyrus si propone quindi di offrire un linguaggio semplice e accessibile, che permetta la definizione di documenti leggibili anche da non esperti, mantenendo al tempo stesso un alto grado di tipizzazione, modularità e personalizzazione, con il supporto a più lingue e la separazione dello stile tramite file CSS.

Trattandosi di un progetto universitario sperimentale, non è presente un committente esterno. L’idea iniziale è stata proposta da Daniel Capannini, che ha assunto il ruolo di Product Owner. Il team, composto da quattro studenti, ha distribuito i ruoli in modo da coprire in maniera efficace sia la gestione che lo sviluppo del progetto: Studente1 ha assunto il ruolo di Project Manager, Luca Cantagallo quello di Scrum Master, mentre Studente2 ha collaborato come sviluppatore. Tutti i membri hanno contribuito attivamente nella definizione degli obiettivi funzionali e non funzionali, nella progettazione della DSL e nell’identificazione dei requisiti principali, dei vincoli e dei rischi.

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

Durante la riunione di scoping è emersa la volontà comune di creare una libreria realmente utile allo sviluppo di contenuti documentali, che unisse semplicità, chiarezza e personalizzazione. Le *conditions of satisfaction* sono state definite in maniera condivisa e includevano: la capacità di generare correttamente documenti PDF e HTML, la leggibilità della DSL anche per utenti meno esperti, la semplicità nella definizione di tabelle e sezioni, il supporto multilingua, la separazione dello stile tramite CSS, e il completamento dell'intero progetto entro il termine massimo di due mesi. In fase iniziale ci si è anche posti l'obiettivo di curare in parallelo sia l’esperienza utente che la copertura test, garantendo stabilità e affidabilità nel tempo.

> Allegato Pos presente in [allegato 1](../process/Allegato-1.md)

Al fine di estrarre le principali funzionalità dell’applicativo nel modo più rapido ed efficace possibile, è stato utilizzato Event Storming, una tecnica di modellazione collaborativa e visuale particolarmente utilizzata e apprezzata nel contesto di sviluppo agile e Domain-Driven. La sua potenza deriva da un gruppo eterogeneo e multidisciplinare di esperti, dagli architetti ai product owner, passando per i designer dell’UI/UX ai tester, che, insieme, collaborano per estrarre le principali funzionalità e i processi che le guidano, condividendo questa conoscenza per far sì che sia condivisa al di là dei compartimenti stagni di ciascun team. Inoltre, questo approccio consente di uniformare il linguaggio utilizzato (quello che in DDD è detto ubiquitous language) e di sollevare e poi risolvere eventuali ambiguità o incomprensioni che possono emergere sin dalle prime fasi del progetto.

Dopo aver introdotto brevemente quali sono i vantaggi nell’utilizzo di questa tecnica rispetto a un approccio più tradizionale, è stato quindi illustrato a tutti i componenti del gruppo come si svolge una sessione di Event Storming.

Il workshop inizia con la definizione di un problema o di un obiettivo e, usando sticky-note colorate e pennarelli, si mappano processi e interazioni fra tutte le entità coinvolte per ottenere una visione complessiva del sistema. Per prima cosa si individuano i domain event – fatti rilevanti già avvenuti all’interno del dominio, descritti al passato – e si dispongono in sequenza cronologica, costruendo una timeline del flusso di eventi. Si passa poi all’identificazione dei command, le azioni che un attore può eseguire sul sistema, e delle relative policy con cui il sistema reagisce, arricchendo la timeline con il dialogo eventi-azioni. Infine si mettono in evidenza i read model, ovvero tutte le informazioni che il sistema deve presentare all’utente.

inserire diagramma di basa
> Allegato Lo schema risultante dell’Event Storming è riportato, insieme all’RBS presenti in [allegato 2](../process/Allegato-2.md)

Grazie a una strutturazione gerarchica dei requisiti è stato possibile definire la sequenza di sviluppo delle macro-componenti, così da beneficiare fin dall’inizio della continuous integration e impostare un percorso di testing incrementale.

Essendo in uno scenario d’incertezza tecnologica che necessita di una componente esplorativa, abbiamo ritenuto che il modello che più si presti a queste esigenze sia quello adattativo: questa scelta permette di accogliere e adeguarsi ai cambiamenti, derivanti dalla raccolta di nuove informazioni che possono emergere durante il ciclo di vita del progetto.



 <!-- Fin dalle prime fasi è stato effettuato un attento lavoro di *prototyping* collaborativo, attraverso sessioni di gruppo e discussioni iterative: il team ha lavorato su esempi pratici (“fingiamo di voler scrivere il documento X…”) che hanno aiutato a definire in modo naturale il vocabolario DSL, le gerarchie sintattiche e le funzionalità chiave del linguaggio. In particolare, sono stati svolti confronti con strumenti esistenti (es. LaTeX, Markdown, Pandoc) per individuare aree di miglioramento: le tabelle dovevano essere più semplici da definire, le liste più flessibili, e la gestione delle sezioni e degli stili testuali più intuitiva.

Il processo decisionale si è svolto in maniera condivisa, con votazioni informali. In caso di parità, è stato previsto un voto a peso maggiorato per il Project Manager, così da garantire fluidità nelle scelte. Il progetto è stato impostato seguendo un modello **adattivo basato su Scrum**, con iterazioni brevi e rilascio incrementale delle funzionalità, consentendo di gestire facilmente nuove idee emerse in corso d’opera. Anche se le variazioni rispetto allo scope iniziale sono state contenute, il team ha mantenuto un atteggiamento aperto ai cambiamenti, rivedendo in maniera costante priorità e risultati.

Dal punto di vista della qualità dei requisiti, il team ha prestato particolare attenzione a garantire **chiarezza**, **fattibilità**, **manutenibilità** e **affidabilità** nelle decisioni di design. Le scelte tecniche sono state guidate non solo da esigenze funzionali, ma anche da criteri di valutazione metodologica come stabilità nel tempo, semplicità di estensione e verificabilità dei risultati.

Infine, sono stati realizzati modelli concettuali (diagrammi UML), definiti moduli indipendenti e impostata una roadmap realistica, che ha guidato i successivi sprint con un alto grado di coerenza rispetto agli obiettivi iniziali.  -->
