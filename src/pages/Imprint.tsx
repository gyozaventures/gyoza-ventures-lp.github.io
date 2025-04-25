import Header from "@/components/Header";

const Imprint = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-gray-700 flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col px-6 md:px-20">
        <div className="mb-12 max-w-4xl text-white">
          <h1 className="text-2xl font-bold mb-8">Impressum</h1>
          <div className="space-y-4 text-gray-300">
            <p>Gyoza Ventures GmbH</p>
            <p>Am Mühlberg 7, 64354 Reinheim</p>
            <p>info@gyozaventures.com</p>
            <p>Geschäftsführer: Moritz Lienert und Andreas Lienert</p>
            <p>Inhaltlich Verantwortlicher gemäß § 18 Abs. 2 MStV: Moritz Lienert</p>
            <p>Registernummer: Amtsgericht Charlottenburg (Berlin) HRB 184106 B</p>
            <p>UStID. gemäß §27 Umsatzsteuergesetz: DE311071439</p>
          </div>
        </div>
      </main>

      <footer className="p-6 text-center text-sm text-gray-400">
        <a
          href="/"
          className="mx-3 hover:text-gray-200"
        >
          Home
        </a>
        <a
          href="/data"
          className="mx-3 hover:text-gray-200"
        >
          Data Privacy
        </a>
      </footer>
    </div>
  );
};

export default Imprint;
