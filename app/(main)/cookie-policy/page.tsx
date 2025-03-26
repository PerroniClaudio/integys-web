function CookiePolicy() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
      <p className="mb-4">
        Ultimo aggiornamento: <span className="font-semibold">25/03/2025</span>
      </p>
      <p className="mb-4">
        La presente Cookie Policy descrive l’utilizzo dei cookie e tecnologie
        simili sul nostro sito web.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Cosa sono i cookie?
      </h2>
      <p className="mb-4">
        I cookie sono piccoli file di testo che vengono memorizzati sul
        dispositivo dell’utente quando visita un sito web. Questi file
        permettono al sito di riconoscere l’utente, migliorare l’esperienza di
        navigazione e raccogliere dati statistici.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Tipologie di cookie utilizzati
      </h2>
      <p className="mb-4">Il nostro sito utilizza i seguenti tipi di cookie:</p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <span className="font-semibold">Cookie Tecnici:</span> Essenziali per
          il corretto funzionamento del sito e per garantire la navigazione
          dell’utente.
        </li>
        <li>
          <span className="font-semibold">
            Cookie di Analisi e Performance:
          </span>{" "}
          Utilizziamo un sistema di monitoraggio creato e gestito internamente
          per raccogliere dati anonimi sulle visite e sulle interazioni con il
          sito, al fine di migliorare la qualità dei servizi offerti. Nessun
          dato viene condiviso con terze parti.
        </li>
      </ul>

      <h3 className="text-lg font-semibold mt-4 mb-2">
        Tracciamento interno e cookie utilizzati
      </h3>
      <p className="mb-4">
        Il nostro sistema di tracciamento utilizza un cookie tecnico denominato{" "}
        <code className="bg-gray-200 dark:bg-gray-900 px-1 rounded">
          integys_session_id
        </code>
        , che ha una durata di 1 giorno e serve a identificare il visitatore in
        modo anonimo. Ogni volta che un utente visita una pagina del sito, viene
        inviata una richiesta HTTP al nostro server di tracciamento (
        <code className="bg-gray-200 dark:bg-gray-900  px-1 rounded">
          tracking.ifortech.com
        </code>
        ), che registra in modo anonimo le seguenti informazioni:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Indirizzo IP</li>
        <li>User Agent del browser</li>
        <li>Referer (pagina di provenienza)</li>
        <li>URL della pagina visitata</li>
        <li>Percentuale di scroll della pagina</li>
      </ul>
      <p className="mb-4">
        Questi dati vengono raccolti al solo scopo di analizzare il traffico sul
        sito e migliorare l’esperienza utente. I dati non vengono condivisi con
        terze parti e sono memorizzati nei nostri sistemi interni.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Cookie di Terze Parti
      </h2>
      <p className="mb-4">
        Questo sito non utilizza cookie di terze parti per fini di profilazione
        o analisi.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Gestione dei Cookie
      </h2>
      <p className="mb-4">
        L’utente può accettare o rifiutare i cookie attraverso le impostazioni
        del proprio browser. È possibile configurare il browser in modo da
        essere avvisati della presenza di cookie o per bloccarli completamente.
        Tuttavia, la disabilitazione di alcuni cookie potrebbe compromettere
        l’esperienza di navigazione.
      </p>
      <p className="mb-4">
        Di seguito, i link alle guide per la gestione dei cookie nei principali
        browser:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647#"
            className="text-primary">
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/en-US/kb/block-websites-storing-cookies-site-data-firefox"
            className="text-primary">
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
            className="text-primary">
            Apple Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d#:~:text=view%20that%20site.-,Open%20Edge%20browser%2C%20select%20Settings%20and%20more%20in%20the%20upper,recommended)%20to%20block%20all%20cookies."
            className="text-primary">
            Microsoft Edge
          </a>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        5. Conservazione dei Dati e Durata dei Cookie
      </h2>
      <p className="mb-4">
        I cookie utilizzati dal nostro sito hanno una durata limitata, in base
        alla loro funzione. Il cookie&nbsp;
        <code className="bg-gray-200 dark:bg-gray-900 px-1 rounded">
          integys_session_id
        </code>
        &nbsp;ha una durata di 1 giorno e viene rinnovato a ogni nuova visita
        dell’utente. I dati raccolti vengono conservati nei nostri sistemi
        interni per fini di analisi e miglioramento del sito.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        6. Modifiche alla Cookie Policy
      </h2>
      <p className="mb-4">
        Ci riserviamo il diritto di aggiornare questa Cookie Policy in qualsiasi
        momento. Gli utenti saranno informati delle modifiche significative
        tramite una comunicazione sul sito.
      </p>
    </div>
  );
}
export default CookiePolicy;
