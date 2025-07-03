# Allegato 3 - Work Breakdown Structure

A partire dal [RBS](../process/Allegato-2.md), vengono qui di seguito esplosi i requisiti del sistema elencando le attività necessarie per soddisfarli, nel formato di una Work Breakdown Structure.

Vengono qui di seguito esplosi i requisiti del sistema, a partire dagli obiettivi definiti nel [POS](../process/Allegato-1.md) e sulla base dell’Event Storming effettuato, nel formato di una Requirements Breakdown Structure.

1. Progettazione, inizializzazione e configurazione dei workspace
- 1.1 Creazione struttura repository Git e progetto sbt
- 1.2 Inizializzazione directory di lavoro (`src`, `resources`, `test`)
- 1.3 Configurazione del file `build.sbt` con supporto Scala 3
- 1.4 Aggiunta delle dipendenze principali (ScalaTest, Iron, Cucumber, ecc.)
- 1.5 Integrazione plugin sbt per test, documentazione ed export
- 1.6 Configurazione pipeline GitHub Actions:
   - Build e compilazione
   - Test automatici
   - Generazione documentazione
   - Deploy e rilascio versionato
2. Progettazione e implementazione della libreria core
   1. Struttura gerarchica della libreria
      1. Metadata
         - `Nome file`
         - `Autore`
         - `Template (con valori di default)`
      2. Contenuto principale.
         1. Elementi base.
            - `Titolo`
            - `Testo`
            - `Tabelle`
            - `Immagini`
            - `Liste`
         2. Elementi strutturati.
            - `Content`
            - `Metadata`
            - `Section`
            - `Subsection`
   2. Stile e formattazione
      1. `Margini`
      2. `Allineamento`
      3. `Colore`
      4. Meccanismo di override locale e globale degli stili


3. Interfaccia e sintassi DSL
- 3.1 Definizione vocabolario e struttura del DSL
- 3.2 Supporto alla composizione modulare dei componenti
- 3.3 Validazione statica della struttura e semantica del documento:
   - Uso di tipi raffinati per elementi di stile
   - Rispetto della gerarchia tra elementi
   - Errori bloccanti e chiari a compile-time
- 3.4 Gestione fallback automatici in presenza di errori

4. Sistema di template e layout documentale
- 4.1 Progettazione di uno o più template predefiniti:
   - Definizione HTML + CSS coerente (palette, font, margini, ...)
- 4.2 Selezione del template nei metadati del documento
- 4.3 Possibilità di personalizzazione:
   - A livello globale per l’intero documento nei metadati
   - A livello locale per singoli elementi
- 4.4 Predisposizione all’estensibilità con template definiti dall’utente:
   - Interfaccia pubblica per override e registrazione

5. Rendering e generazione del documento
- 5.1 Traduzione DSL in HTML + CSS
- 5.2 Esportazione nei formati supportati:
   - `PDF` (default)
   - `HTML`
   - `Markdown`
   - `DOCX`
- 5.3 Il formato di esportazione deve essere nei metadati
- 5.4 Supporto a generazione incrementale:
   - Solo i formati richiesti vengono esportati
- 5.5 Gestione degli errori:
   - Compile-time exception
   - Logging e messaggi utente chiari

6. Integrazione, API pubbliche e usabilità
- 6.1 Esporre API pubbliche documentate per uso da altri progetti
- 6.2 Fornire un plugin sbt con comandi semplici (`generateDoc`)
- 6.3 Compatibilità con pipeline CI/CD
- 6.4 Documentazione tecnica:
   - Scaladoc
   - Esempi d’uso in formato `readme.md`
- 6.5 Testing completo:
   - Test unitari con ScalaTest
   - Test comportamentali con Gherkin + Cucumber
   - Test di integrazione su generazione ed export