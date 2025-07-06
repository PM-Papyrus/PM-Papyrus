# Closing

## Procedura di accettazione

Il processo di accettazione verte sulla certificazione del successo di tutti i test precedentemente sviluppati, dei success criteria e delle Conditions of Satisfactions, oltre che sull’installazione di un’infrastruttura atta al collaudo dell’applicativo.

## Installazione 

In assenza di un deliverable preesistente da sostituire, non è necessario alcun approccio Cut Over: la libreria è semplicemente pubblicata nel repository e resa disponibile per il download. L’integrazione si riduce ad aggiungerla come dipendenza nel proprio progetto tramite sbt e importare i moduli necessari seguendo la guida rapida inclusa nella documentazione.

## Documentazione

La documentazione è stata resa disponibile nel repository di progetto e include:
- esempi pratici di utilizzo della libreria
- istruzioni passo-passo per l’installazione e la configurazione
- una legenda dettagliata con l’intero vocabolario delle API
- report sullo sviluppo che traccia le scelte architetturali, le versioni rilasciate e le future evoluzioni previste.

## Post-implementation Audit

Ultimata la messa in produzione il team si e' riunito per un post-implementation audit, un incontro di riflessione e valutazione del progetto. Durante questa sessione, sono stati discussi i risultati ottenuti, le sfide affrontate e le lezioni apprese, con l’obiettivo di migliorare i processi futuri e garantire che le esperienze acquisite possano essere utili per progetti successivi.

Di seguito le domande poste durante l'audit e le relative risposte:

**Q. Gli obiettivi del progetto sono stati raggiunti?**  
**A.** Sì. Tutti i target fissati sono stati centrati e, in più, il lavoro ha rafforzato le pratiche di pianificazione, evidenziando i vantaggi in termini di riduzione del rischio e di stime più accurate dei tempi.

---

**Q. Il deliverable svolge le funzioni previste dal team?**  
**A.** Sì. Il superamento di tutti i test dedicati conferma la piena conformità del sistema ai requisiti stabiliti.

---

**Q. Il progetto si è concluso nei limiti di tempo, budget e specifiche?**  
**A.** Sì. Scadenze e specifiche tecniche sono stati pienamente rispettati.

---

**Q. Sono stati soddisfatti i criteri di successo?**  
**A.** Per gli aspetti legati allo sviluppo sì; per il post-installazione, i test automatici offrono solo una proiezione di determinati indicatori, comunque in linea con i criteri stabiliti.

---

**Q. Quali lezioni sono emerse riguardo alla metodologia di gestione scelta?**  
**A.** L’approccio agile si è rivelato prezioso in un contesto ad alto tasso di incertezza, permettendo rapide correzioni di rotta, coesione del team e un morale elevato grazie a revisioni tempestive.

---

**Q. In che modo il team ha seguito la metodologia?**  
**A.** Il gruppo ha applicato Scrum attenuando alcuni vincoli — ad esempio, riducendo i daily meeting in assenza di novità rilevanti — ma mantenendo la prontezza d’intervento per affrontare i problemi e ottimizzare i tempi di tutti i membri.


## Chiusura del progetto

In assenza di un committente esterno, il progetto si considera concluso con il deployment della libreria e il superamento di tutti i test in vitro: soddisfatti dei risultati, gli studenti si preparano a presentarlo agli esami, ma anche che la libreria venga apprezzata e adottata da altri sviluppatori.