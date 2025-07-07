# Project Overview Statement

## Opportunità

A seguito di un’analisi svolta all’interno del gruppo, è emersa una mancanza significativa: non esiste, nell’ecosistema Scala, una libreria che consenta di generare documenti in modo dichiarativo, tipizzato e integrato nei flussi di lavoro automatici. Le soluzioni attualmente più diffuse si basano su strumenti esterni, spesso poco flessibili o difficili da integrare in contesti di sviluppo. Papyrus nasce per rispondere a questa esigenza concreta, offrendo un linguaggio semplice e leggibile per la produzione automatica di documenti, valorizzando al contempo modularità, chiarezza e riusabilità.

## Scopo del progetto

Il progetto si propone di sviluppare una libreria open source in Scala per la generazione automatica di documenti in formato PDF e HTML, attraverso un linguaggio DSL leggibile, tipizzato e semplice da estendere. La libreria dovrà permettere di definire in modo dichiarativo i contenuti e la struttura dei documenti, supportando titoli, testi, elenchi, immagini, tabelle, sezioni e stili. Lo scopo è quello di semplificare la produzione di documentazione, consentendone l’integrazione fluida all’interno di progetti software.

## Obiettivi

L’obiettivo è fornire uno strumento ben organizzato, modulare e accessibile. Verranno progettate e implementate:
- una grammatica DSL chiara e intuitiva;
- un motore di rendering per la trasformazione del linguaggio in vari tipi di formati per esempio PDF e HTML;
- un sistema di salvataggio dei documenti generati;
- il supporto allo stile grafico;
- la gestione di lingue multiple in metadata;
- una base per future estensioni, integrabile in pipeline di sviluppo.

## Conditions of Satisfaction

- Il progetto dovrà essere completato entro Luglio 2025. 
- Lo sviluppo seguirà un approccio guidato dai test (Test Driven Development), con il supporto di Cucumber e Gherkin per la definizione dei casi d’uso. 
- Saranno coinvolti alcuni utenti esterni in momenti chiave del progetto, attraverso piccoli focus group, per valutare la facilità d’uso e la qualità dell’esperienza. 
- La DSL dovrà risultare leggibile anche per chi non ha familiarità con Scala, pur mantenendo coerenza e rigore sintattico. Al tempo stesso, dovrà garantire buone prestazioni, manutenibilità del codice e chiarezza architetturale.

## Acceptance Criteria

- Tutti i requisiti funzionali e non funzionali dovranno essere verificati tramite test automatici.
- I documenti generati dovranno essere ben formattati, coerenti con quanto definito nella DSL e visivamente leggibili. 
- La documentazione dovrà essere completa, accessibile e pubblicata in un repository condiviso. 
- La libreria dovrà essere facilmente installabile e integrabile in altri progetti, senza richiedere configurazioni complesse.

## Rischi principali

- Il team non ha esperienza sufficiente con Scala 3.
- Il team ha limitata esperienza riguardo l’utilizzo di tecnologie e strumenti per il continuous depoloyment in ambienti di produzione.
- La libreria potrebbe non essere sufficientemente flessibile per soddisfare le esigenze di tutti gli utenti.
