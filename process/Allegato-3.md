# Allegato 3 - Work Breakdown Structure

A partire dal [RBS](../process/Allegato-2.md), vengono qui di seguito esplosi i requisiti del sistema elencando le attività necessarie per soddisfarli, nel formato di una Work Breakdown Structure.

1. Progettazione, inizializzazione e configurazione dei workspace con un adeguato build tool, di un’infrastruttura con predisposizione a una pipeline automatizzata di continuous integration & deployment
   1. Configurazione build tool e DVCS;
   2. Configurazione pipeline di continuous integration;
   3. Configurazione pipeline di continuous deployment;
      1. Progettazione diagrammi deployment;
      2. Creazione struttura locale minimale di orchestrazione;
      3. Configurazione ambiente di produzione;
      4. Sviluppo azioni deployment da locale a produzione;
   4. Configurazione bot per aggiornamento automatico delle dipendenze;
   5. Configurazione bot per il merge automatizzato di Pull Request sulla repo;
   6. Configurazione bot per il rilascio automatico delle release;

2. Progettazione e implementazione della libreria core
    1. Struttura gerarchica della libreria
       1. Metadata (es. titolo documento, autore, data, formato output)
       2. Contenuto principale: testo, titoli, sezioni, sottosezioni, elenchi, tabelle, ecc.
    2. Ogni elemento deve poter essere arricchito con stile personalizzato (es. margini, allineamento, colore, font)
    3. La libreria deve essere compatibile con Scala 3 ed essere integrabile facilmente in progetti `sbt`
3. Interfaccia e sintassi DSL
    1. Il DSL deve essere leggibile anche da utenti non esperti di Scala
    2. Deve supportare una sintassi modulare, con componenti composabili (es. `Section`, `Table`, `List`, ecc.)
    3. Deve prevedere fallback automatici o messaggi di errore comprensibili in caso di uso scorretto
    4. Deve permettere la validazione statica del documento prima della generazione
4. Sistema di template e layout documentale
    1. Il sistema deve fornire uno o più **template predefiniti** tra cui selezionare
    2. L’utente deve poter selezionare il template desiderato direttamente dai metadati
    3. Ogni template deve essere personalizzabile a livello globale e per singolo elemento
    4. Il sistema deve permettere in futuro l’aggiunta di template definiti dall’utente
5. Rendering e generazione del documento
    1. Il contenuto deve essere tradotto in HTML + CSS come base di rendering
    2. Il sistema deve supportare diversi formati di esportazione:
        - PDF (default)
        - HTML
        - Markdown
        - DOCX
    3. Il formato di esportazione deve poter essere indicato nei metadati
    4. La generazione deve includere validazione semantica del contenuto
    5. Gli errori di generazione devono essere gestiti con messaggi chiari e leggibili a tempo di compilazione
6. Integrazione, API pubbliche e usabilità
    1. La libreria deve esporre API Scala per uso programmatico in altri progetti
    2. Deve poter essere usata come plugin o dipendenza `sbt` in progetti esistenti
    3. Deve essere facilmente integrabile in CI/CD pipeline o build automation
2. Progettazione e implementazione della libreria core
   1. Progettazione architetturale della libreria;
   2. Progettazione e Implementazione degli elementi base.
      1. Titolo;
      2. testo;
      3. tabella
      4. immagini
      5. liste
   3. progettazione e implementazione elementi strutturati.
      1. content
      2. metadata
      3. section
      4. subsection
   4. progettazione e implementazione elementi di stile.
      1. margini
      2. allineamento
      3. colore
      4. font
3. Progettazione e implementazione dei template
   1. Template style html
   2. Template style pdf
   3. Template style docx
   4. Template style markdown
4. Progettazione e implementazione del motore di rendering
   1. generazione html
   2. generazione pdf
   3. generazione markdown
   4. generazione docx
5. Progettazione e implementazione della DSL
   1. Definizione del vocabolario.
   2. Progettazione sintassi DSL;
   3. implementazione Builder.
   4. implementazione DSL.
6. Definizione e implementazione delle API pubbliche
   1. Progettazione API;
   2. Implementazione API;
   3. Documentazione API.