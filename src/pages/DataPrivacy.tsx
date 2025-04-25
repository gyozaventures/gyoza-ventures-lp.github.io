
import Header from "@/components/Header";

const DataPrivacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-gray-700 flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col px-6 md:px-20">
        <div className="mb-12 max-w-4xl text-white">
          <h1 className="text-2xl font-bold mb-8">Datenschutzhinweise</h1>
          <div className="space-y-4 text-gray-300">
            <h2 className="text-xl font-semibold mt-6">Verantwortlicher</h2>
            <p>Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutz-Grundverordnung (DSGVO), ist:</p>
            <p>Moritz Lienert</p>

            <h2 className="text-xl font-semibold mt-6">Ihre Betroffenenrechte</h2>
            <p>Unter den angegebenen Kontaktdaten können Sie gemäß EU-Datenschutz-Grundverordnung (DSGVO) jederzeit folgende Rechte ausüben:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO)</li>
              <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO)</li>
            </ul>
            
            <p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>
            <p>Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.</p>
            
            <h2 className="text-xl font-semibold mt-6">Verarbeitungstätigkeiten</h2>
            <h3 className="text-lg font-medium mt-4">Erfassung allgemeiner Informationen beim Besuch unserer Website</h3>
            <p>Art und Zweck der Verarbeitung: {/* ... rest of the privacy policy content */}</p>
            
            {/* ... Additional sections of the privacy policy */}
            
            <h2 className="text-xl font-semibold mt-6">Änderung unserer Datenschutzerklärung</h2>
            <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
            
            <h2 className="text-xl font-semibold mt-6">Fragen zum Datenschutz</h2>
            <p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail an den oben genannten Verantwortlichen.</p>
            
            <p className="text-sm mt-8">Urheberrechtliche Hinweise: Diese Datenschutzerklärung wurde mit Hilfe der activeMind AG erstellt – den Experten für externe Datenschutzbeauftragte (Version #2024-10-25).</p>
          </div>
        </div>
      </main>

      <footer className="p-6 text-center text-sm text-gray-400">
        <a href="/" className="mx-3 hover:text-gray-200">Home</a>
        <a href="/imprint" className="mx-3 hover:text-gray-200">Imprint</a>
      </footer>
    </div>
  );
};

export default DataPrivacy;
