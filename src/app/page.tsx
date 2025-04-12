import Image from "next/image";
import ImageSlider from "./components/ImageSlider";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
        <Image
                src="/logo.svg"
                alt="Clinique Logo"
                width={40}
                height={40}
                className="mr-4"
              />
              <span className="text-xl font-bold text-blue-600">Clinique Neurologique</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600">Accueil</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Services</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Équipe</a>
              <Link href="/education" className="text-gray-600 hover:text-blue-600">Éducation</Link>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
              Prendre RDV
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="pt-20">
        <div className="relative h-[600px] w-full">
          <ImageSlider />
          <div className="absolute inset-0 flex items-center z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  La neurologie au service des Guinéens, avec humanité et excellence.
                </h1>
                <p className="text-xl mb-8">
                  Des soins neurologiques de qualité dans un environnement moderne et accueillant. Notre équipe de spécialistes est à votre écoute.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 font-medium">
                    Prendre rendez-vous
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-blue-700 font-medium">
                    Nos services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Dr Barry - Présentation rapide */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/doctor.jpg"
                  alt="Dr BARRY Souleymane Djigué"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dr Souleymane Djigué Barry</h2>
              <p className="text-xl text-gray-700 mb-6">
                Neurologue à l&apos;hôpital Ignace Deen, spécialiste des états de mal convulsifs, engagé contre la stigmatisation des maladies neurologiques en Guinée.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">
                    Spécialiste des affections neurologiques courantes et rares
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">
                    Membre du conseil d&apos;administration de la Société Guinéenne de Neurologie
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">
                    Chercheur actif dans le domaine de l&apos;épilepsie et des troubles convulsifs
                  </p>
                </div>
              </div>
              <Link href="/about-doctor" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Nos services spécialisés</h2>
              <p className="mt-4 text-xl text-gray-600">Une prise en charge complète des troubles neurologiques</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Diagnostic neurologique</h3>
                <p className="text-gray-600">Évaluation complète des symptômes neurologiques avec équipements modernes</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Traitement de l&apos;épilepsie</h3>
                <p className="text-gray-600">Prise en charge personnalisée des crises convulsives et suivi adapté</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Éducation des patients</h3>
                <p className="text-gray-600">Sensibilisation et information sur les troubles neurologiques pour une meilleure prise en charge</p>
              </div>
            </div>
          </div>
        </div>

        {/* Témoignage Section */}
        <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote className="relative p-8 bg-white rounded-xl shadow-lg border-l-4 border-blue-600">
            <svg className="absolute top-3 left-3 w-12 h-12 text-blue-100 opacity-60" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <div className="relative z-10">
              <p className="text-gray-800 text-xl italic mb-4">
                &quot;L&apos;épilepsie n&apos;est pas une malédiction, c&apos;est une maladie qui se traite. Notre mission est de combattre cette stigmatisation et d&apos;offrir des soins de qualité à tous les patients.&quot;
              </p>
              <footer className="text-gray-600">
                <strong>Dr. Souleymane Djigué Barry</strong> - Neurologue
              </footer>
            </div>
          </blockquote>
        </div>

        {/* Appel à l'action */}
        <div className="bg-blue-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Prenez rendez-vous aujourd&apos;hui</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Notre équipe médicale est à votre disposition pour vous offrir les meilleurs soins neurologiques possibles. N&apos;hésitez pas à nous contacter.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 font-medium">
                Prendre rendez-vous
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-blue-700 font-medium">
                Appeler la clinique
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Clinique Neurologique</h4>
              <p className="text-gray-400">Votre partenaire de santé neurologique au quotidien</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Consultations neurologiques</li>
                <li>Traitement de l&apos;épilepsie</li>
                <li>Suivi médical spécialisé</li>
                <li>Urgences neurologiques</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Service de Neurologie</li>
                <li>CHU Ignace Deen, Conakry</li>
                <li>+224 629 879 631</li>
                <li>sogetd@gmail.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Horaires</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Lun-Ven: 8h-17h</li>
                <li>Sam: 9h-13h</li>
                <li>Dim: Urgences uniquement</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Clinique Neurologique. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
