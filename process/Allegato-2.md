# Allegato 2 - Requirements Breakdown Structure

## Event Storming

Event Storming per la definizione dei requisiti del sistema, sono riportate solo alcune azioni per motivi di spazio, ma il processo è stato molto più ampio e dettagliato.
```mermaid
flowchart TD
    %% Comandi utente
    cmd1["ScriviDocumento(papyrusCode)"]:::command
    val["Validazione Compile-Time\n- Gerarchia corretta?\n- Parametri validi?"]:::aggregate
    evValid["DocumentoValido"]:::event
    evError["ErroreCompileTime"]:::event
    cmd2["EseguiDocumento()"]:::command
    cmd3["EseguiDocumento()"]:::command

    %% Processo principale
    template["Selezione Templateo\n\n- (Salvataggio opzionale)"]:::aggregate
    evTemplate["TemplateUsato"]:::event
    model["Costruzione Modello Documentale\n- Metadata + Content"]:::aggregate
    evModel["ModelloCreato"]:::event
    render["Rendering\n- HTML + CSS"]:::aggregate
    evRendered["RenderCompletato"]:::event
    convert["Conversione (se richiesta)\n- PDF, DOCX, Markdown"]:::aggregate
    evConverted["ConversioneCompletata"]:::event
    output["Output\n- Apertura automatica\n- Salvataggio se specificato"]:::aggregate
    evFinal["DocumentoAperto\n(File salvato se richiesto)"]:::event

    %% Errore a runtime
    evRuntimeError["ErroreRuntime\n(Documento non creato)"]:::event

    %% Flussi
    cmd1 --> val
    val -->|✓| evValid
    val -->|✗| evError
    evError --> cmd1
    evValid --> cmd2
    evError --> cmd3
    cmd2 --> template --> evTemplate --> model --> evModel --> render --> evRendered --> convert --> evConverted --> output --> evFinal
    evRendered --> output
    cmd3 --> evRuntimeError

    %% Stili
    classDef command fill:#FF8000,stroke:#333,stroke-width:1px,color:#fff;
    classDef aggregate fill:#0066CC,stroke:#333,stroke-width:1px,color:#fff;
    classDef event fill:#FFEB3B,stroke:#333,stroke-width:1px,color:#000;

    %% Note
    click evFinal callout "Il file viene sempre aperto. È salvato solo se specificato in metadata (con path e nome)."
    click template callout "Il template è salvato solo se l’utente lo indica esplicitamente nei metadata."
    click evRuntimeError callout "Se ci sono errori a compile-time, l’esecuzione genera errore a runtime e il documento non viene creato."
```




## Requirements Breakdown Structure

Vengono qui di seguito esplosi i requisiti del sistema, a partire dagli obiettivi definiti nel [POS](../process/Allegato-1.md) e sulla base dell’Event Storming effettuato, nel formato di una Requirements Breakdown Structure.

1. Progettazione, inizializzazione e configurazione dei workspace
   1. Creazione di un repository
   2. Il sistema deve includere strumenti per test, export e build automatizzato.
   3. Deve essere predisposta una pipeline CI/CD per build, test, documentazione e rilascio.

2. Progettazione e implementazione della libreria core
   1. Deve supportare la modellazione di elementi documentali, ognuno con funzioni di rendering dello stile e del contenuto.
   2. La libreria deve fornire un motore interno basato sui contesti, responsabili della struttura documentale.
   3. Ogni elemento deve applicare correttamente lo stile grafico ricevuto, con possibilità di override locale o globale.
   4. Deve esistere un sistema di export in output di tipologie PDF, DOCX, Markdown e HTML.
   
3. Interfaccia e sintassi DSL
   1. Il sistema deve offrire un DSL leggibile e modulare per la composizione di documenti.
   2. Il DSL deve gestire automaticamente la validità della gerarchia degli elementi.
   3. La validazione deve essere effettuata a tempo di compilazione bloccandone l'esecuzione.
   4. Il DSL deve fornire fallback automatici in caso di errori.

4. Sistema di template e layout documentale
   1. Il sistema deve offrire uno o più template predefiniti con scelte coerenti di stile (font, margini, colore, allineamento).
   2. L’utente deve poter selezionare il template da utilizzare tramite i metadati del documento.
   3. Gli stili di default devono essere sovrascrivibili a livello globale o per singolo elemento.
   4. Il sistema deve essere predisposto per l’estensibilità, consentendo in futuro l’aggiunta di template personalizzati.

5. Rendering e generazione del documento
   1. Il sistema deve tradurre la struttura descritta nel DSL in contenuto e stile del contenuto.
   2. Il processo di generazione deve essere suddiviso in: validazione iniziale, generazione dello stile, generazione del contenuto, esportazione.

6. Integrazione, API pubbliche e usabilità
   1. La libreria deve esporre API Scala documentate per l’uso in progetti esterni.
   2. Deve essere utilizzabile come plugin `sbt`, con comandi espliciti per generazione e apertura documenti.
   3. Il sistema deve essere integrabile in pipeline CI/CD.
   4. Deve essere fornita documentazione tecnica e di esempio.
   5. Il sistema deve essere completamente testato.

![RBS](../diagram/rbs4.png)

## User Stories

Le user story sono state elaborate a valle delle sessioni di Event Storming, che hanno permesso di individuare eventi chiave e processi di dominio; ogni story è stata poi validata attraverso scenari di test scritti in Gherkin ed eseguiti con Cucumber, assicurando che i criteri di accettazione fossero soddisfatti e che il comportamento del sistema corrispondesse a quanto discusso durante la modellazione.

Esempio di user story tramite Gherkin:

```gherkin
Feature: Papyrus document content rendering

  Scenario: Render a document with title and paragraph
    Given I create a Papyrus document
    And I add a title "Prova"
    And I add a paragraph "testo di prova"
    When I render the document
    Then The HTML output should contain:
      """
      |<h1>Prova</h1>
      |<span class="cls-3E8">testo di prova</span>
      """

  Scenario: Render a section with title and text
    Given I add a section with title "titolo section" and text "testo section"
    When I render the document
    Then The HTML output should contain:
      """
      |<section>
      |  <h1>titolo section</h1>
      |  <span class="cls-3E9">testo section</span>
      |</section>
      """

  Scenario: Render a section and subSection with title and text
    Given I add a section with title "titolo section" and text "testo section"
    And I add a subsection with title "titolo subsection" and text "testo subsection"
    When I render the document
    Then The HTML output should contain:
      """
      |<section>
      |  <h1>titolo section</h1>
      |  <span class="cls-3EA">testo section</span>
      |<section>
      |  <h2>titolo subsection</h2>
      |  <span class="cls-3EB">testo subsection</span>
      |</section>
      |</section>
      """
```
