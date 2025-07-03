# Allegato 3 - Work Breakdown Structure

A partire dal [RBS](../process/Allegato-2.md), vengono qui di seguito esplosi i requisiti del sistema elencando le attività necessarie per soddisfarli, nel formato di una Work Breakdown Structure.

1. Progettazione, inizializzazione e configurazione dei workspace
   1. Creazione struttura repository Git e progetto sbt
   2. Inizializzazione directory di lavoro (`src`, `resources`, `test`)
   3. Configurazione del file `build.sbt` con supporto Scala 3
   4. Aggiunta delle dipendenze principali (ScalaTest, Iron, Cucumber, ecc.)
   5. Integrazione plugin sbt per test, documentazione ed export
   6. Configurazione pipeline GitHub Actions:
      1.  Build e compilazione
      2.  Test automatici
      3.  Generazione documentazione
      4.  Deploy e rilascio versionato
2. Progettazione e implementazione della libreria core
   1. Struttura gerarchica della libreria
      1. Metadata
         1. `Nome file`
         2. `Autore`
         3. `Template (con valori di default)`
      2. Contenuto principale.
         1. Elementi base.
            1. `Titolo`
            2. `Testo`
            3. `Tabelle`
            4. `Immagini`
            5. `Liste`
         2. Elementi strutturati.
            1. `Content`
            2. `Metadata`
            3. `Section`
            4. `Subsection`
   2. Stile e formattazione
      1. `Margini`
      2. `Allineamento`
      3. `Colore`
      4. Meccanismo di override locale e globale degli stili
3. Interfaccia e sintassi DSL
   1.  Definizione vocabolario e struttura del DSL
   2.  Supporto alla composizione modulare dei componenti
   3.  Validazione statica della struttura e semantica del documento:
       1.  Uso di tipi raffinati per elementi di stile
       2.  Rispetto della gerarchia tra elementi
       3.  Errori bloccanti e chiari a compile-time
   4.  Gestione fallback automatici in presenza di errori
4. Sistema di template e layout documentale
   1. Progettazione di uno o più template predefiniti:
      1. Definizione HTML + CSS coerente (palette, font, margini, ...)
   2. Selezione del template nei metadati del documento
   3. Possibilità di personalizzazione:
      1. A livello globale per l’intero documento nei metadati
      2. A livello locale per singoli elementi
   4. Predisposizione all’estensibilità con template definiti dall’utente:
      1. Interfaccia pubblica per override e registrazione
5. Rendering e generazione del documento
   1. Traduzione DSL in HTML + CSS
   2. Esportazione nei formati supportati:
      1. `PDF` (default)
      2. `HTML`
      3. `Markdown`
      4. `DOCX`
   3. Il formato di esportazione deve essere nei metadati
   4. Supporto a generazione incrementale:
      1. Solo i formati richiesti vengono esportati
   5. Gestione degli errori:
      1. Compile-time exception
      2. Logging e messaggi utente chiari
6. Integrazione, API pubbliche e usabilità
   1. Esporre API pubbliche documentate per uso da altri progetti
   2. Fornire un plugin sbt con comandi semplici (`generateDoc`)
   3. Compatibilità con pipeline CI/CD
   4. Documentazione tecnica:
      1. Scaladoc
      2. Esempi d’uso in formato `readme.md`
   5. Testing completo:
      1. Test unitari con ScalaTest
      2. Test comportamentali con Gherkin + Cucumber
      3. Test di integrazione su generazione ed export