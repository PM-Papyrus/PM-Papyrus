# Allegato 2 - Requirements Breakdown Structure

## Event Storming

## Requirements Breakdown Structure

Vengono qui di seguito esplosi i requisiti del sistema, a partire dagli obiettivi definiti nel [POS](../process/Allegato-1.md) e sulla base dell’Event Storming effettuato, nel formato di una Requirements Breakdown Structure.

1. Progettazione, inizializzazione e configurazione dei workspace con un adeguato build tool, di un’infrastruttura con predisposizione a una pipeline automatizzata di continuous integration & deployment.
2. Progettazione e implementazione della libreria core
   - La libreria deve interpretare ed eseguire un DSL dedicato alla generazione documentale
   - La libreria deve supportare una struttura gerarchica dei contenuti:
       - Metadati (es. titolo documento, autore, data, formato output)
       - Contenuto principale: testo, titoli, sezioni, sottosezioni, elenchi, tabelle, ecc.
   - Ogni elemento deve poter essere arricchito con stile personalizzato (es. margini, allineamento, colore, font)
   - La libreria deve essere compatibile con Scala 3 ed essere integrabile facilmente in progetti `sbt`
3. Sistema di template e layout documentale
   - Il sistema deve fornire uno o più **template predefiniti** tra cui selezionare
   - L’utente deve poter selezionare il template desiderato direttamente dai metadati
   - Ogni template deve essere personalizzabile a livello globale e per singolo elemento
   - Il sistema deve permettere in futuro l’aggiunta di template definiti dall’utente
4. Rendering e generazione del documento
   - Il contenuto deve essere tradotto in HTML + CSS come base di rendering
   - Il sistema deve supportare diversi formati di esportazione:
       - PDF (default)
       - HTML
       - Markdown
       - DOCX 
   - Il formato di esportazione deve poter essere indicato nei metadati
   - La generazione deve includere validazione semantica del contenuto
   - Gli errori di generazione devono essere gestiti con messaggi chiari e leggibili a tempo di compilazione
5. Interfaccia e sintassi DSL
   - Il DSL deve essere leggibile anche da utenti non esperti di Scala
   - Deve supportare una sintassi modulare, con componenti composabili (es. `Section`, `Table`, `List`, ecc.)
   - Deve prevedere fallback automatici o messaggi di errore comprensibili in caso di uso scorretto
   - Deve permettere la validazione statica del documento prima della generazione
6. Integrazione, API pubbliche e usabilità
   - La libreria deve esporre API Scala per uso programmatico in altri progetti
   - Deve poter essere usata come plugin o dipendenza `sbt` in progetti esistenti
   - Deve essere facilmente integrabile in CI/CD pipeline o build automation

```mermaid
%%{init: {'theme': 'default'}}%%
graph LR

    P[Papyrus]:::root

%% Sezioni principali
    P --- A[1. Libreria Core]:::main
    P --- B[2. Sistema Template]:::main
    P --- C[3. Rendering e Output]:::main
    P --- D[4. DSL e Interfaccia]:::main
    P --- E[5. Integrazione e API]:::main
    P --- F[6. Requisiti Non Funzionali]:::main

%% Sezione A
    A --> A_bus
    A_bus --> A1[1.1 Parsing ed esecuzione del DSL]:::sub
    A_bus --> A2[1.2 Gestione struttura]:::sub
    A_bus --> A3[1.3 Supporto elementi]:::sub
    A_bus --> A4[1.4 Stili personalizzati]:::sub
    A_bus --> A5[1.5 Scala 3 + sbt]:::sub

%% Sezione B
    B --> B_bus
    B_bus --> B1[2.1 Template disponibili]:::sub
    B_bus --> B2[2.2 Scelta da metadati]:::sub
    B_bus --> B3[2.3 Personalizzazione]:::sub
    B_bus --> B4[2.4 Template custom]:::sub

%% Sezione C
    C --> C_bus
    C_bus --> C1[3.1 HTML + CSS]:::sub
    C_bus --> C2[3.2 PDF, HTML, MD, DOCX]:::sub
    C_bus --> C3[3.3 Scelta formato]:::sub
    C_bus --> C4[3.4 Validazione]:::sub
    C_bus --> C5[3.5 Errori intelligibili]:::sub

%% Sezione D
    D --> D_bus
    D_bus --> D1[4.1 DSL leggibile]:::sub
    D_bus --> D2[4.2 Componenti: Section, Table, List…]:::sub
D_bus --> D3[4.3 Fallback e messaggi di errore]:::sub
D_bus --> D4[4.4 Validazione statica]:::sub

%% Sezione E
E --> E_bus
E_bus --> E1[5.1 API Scala pubbliche]:::sub
E_bus --> E2[5.2 Pipeline CI/CD]:::sub
E_bus --> E3[5.3 Usabilità in sbt]:::sub
E_bus --> E4[5.4 No dipendenze esterne]:::sub

%% Sezione F
F --> F_bus
F_bus --> F1[6.1 Performance elevate]:::sub
F_bus --> F2[6.2 Sviluppo TDD]:::sub
F_bus --> F3[6.3 Modularità]:::sub
F_bus --> F4[6.4 Test automatici]:::sub

%% Stili
classDef root fill:#f9c74f,stroke:#000,stroke-width:2px;
classDef main fill:#d2f4ea,stroke:#1b4d3e,stroke-width:2px;
classDef sub fill:#fdebd0,stroke:#c97d36,stroke-width:1px;

%% Linee a bus visibili
style A_bus stroke:#888,stroke-width:2px;
style B_bus stroke:#888,stroke-width:2px;
style C_bus stroke:#888,stroke-width:2px;
style D_bus stroke:#888,stroke-width:2px;
style E_bus stroke:#888,stroke-width:2px;
style F_bus stroke:#888,stroke-width:2px;


```
