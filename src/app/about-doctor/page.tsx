import Image from "next/image";
import Link from "next/link";

export default function AboutDoctor() {
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
              <Link href="/" className="text-gray-600 hover:text-blue-600">Accueil</Link>
              <a href="#" className="text-gray-600 hover:text-blue-600">Services</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Équipe</a>
              <Link href="/education" className="text-gray-600 hover:text-blue-600">Éducation</Link>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
              Prendre RDV
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="w-full md:w-1/3">
              <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/doctor.jpg"
                  alt="Dr BARRY Souleymane Djigué"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                  className="object-cover"
                />
              </div>
              <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Coordonnées</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700">+224 629 879 631</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700">sogetd@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700">Service de Neurologie, CHU Ignace Deen, Conakry</span>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Prendre rendez-vous
                  </button>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <div className="flex items-center mb-2">
                <Link href="/" className="text-blue-600 hover:underline mr-2">Accueil</Link>
                <span className="text-gray-400 mr-2">/</span>
                <span className="text-gray-700">Dr. Barry Souleymane Djigué</span>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Dr. Barry Souleymane Djigué</h1>
              <p className="text-gray-500 text-xl mb-8">Neurologue – CHU Ignace Deen, membre du conseil d&apos;administration de la Société Guinéenne de Neurologie</p>
              
              <div className="prose prose-lg max-w-none">
                <p className="mb-6">
                  Le Dr Barry Souleymane Djigué est un neurologue spécialisé dans le traitement des troubles neurologiques, avec une expertise particulière dans le diagnostic et le traitement de l&apos;épilepsie et des états de mal convulsifs.
                </p>
                
                <p className="mb-6">
                  Exerçant au CHU Ignace Deen de Conakry, il est reconnu pour son engagement envers les patients et sa détermination à combattre la stigmatisation associée aux maladies neurologiques en Guinée, notamment l&apos;épilepsie.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Domaines d'expertise</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Épilepsie</h3>
                    <p>Spécialiste du diagnostic et du traitement de l'épilepsie sous toutes ses formes, avec une attention particulière aux épilepsies résistantes aux traitements.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">États de mal convulsifs</h3>
                    <p>Expert reconnu dans la prise en charge des états de mal convulsifs, situations d'urgence neurologique nécessitant une intervention rapide et efficace.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Formation médicale</h3>
                    <p>Impliqué dans la formation de la prochaine génération de neurologues guinéens, contribuant au développement des capacités médicales locales.</p>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Citations</h2>
                
                <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 mb-8">
                  &quot;L&apos;épilepsie n&apos;est pas une malédiction, c&apos;est une maladie qui se traite. Notre mission est de combattre cette stigmatisation et d&apos;offrir des soins de qualité à tous les patients.&quot;
                </blockquote>
                
                <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 mb-8">
                  &quot;En Guinée, trop de patients souffrant d&apos;épilepsie sont marginalisés et n&apos;ont pas accès aux soins appropriés. Notre travail consiste à changer cette réalité, un patient à la fois.&quot;
                </blockquote>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Publications et recherches</h2>
                
                <ul className="list-disc pl-5 space-y-4 mb-8">
                  <li>
                    <strong>Étude sur les états de mal convulsifs (EMC) en Guinée</strong>
                    <p className="text-gray-600">Publication dans l&apos;African Journal of Neurological Sciences (AJNS)</p>
                  </li>
                  <li>
                    <strong>Épidémiologie de l&apos;épilepsie en Guinée : défis et perspectives</strong>
                    <p className="text-gray-600">Recherche menée en collaboration avec la Société Guinéenne de Neurologie</p>
                  </li>
                  <li>
                    <strong>Impact de la sensibilisation sur la prise en charge de l&apos;épilepsie</strong>
                    <p className="text-gray-600">Étude sur l&apos;efficacité des programmes d&apos;éducation dans la réduction de la stigmatisation</p>
                  </li>
                </ul>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Engagement et associations</h2>
                
                <ul className="list-disc pl-5 space-y-2 mb-8">
                  <li>Membre du conseil d&apos;administration de la Société Guinéenne d&apos;Étude et de Traitement de la Douleur (SOGETD)</li>
                  <li>Membre actif de la Société Guinéenne de Neurologie</li>
                  <li>Participant régulier aux congrès nationaux et internationaux de neurologie</li>
                </ul>
                
                <div className="mt-10">
                  <Link href="/" className="text-blue-600 hover:underline flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Retour à l'accueil
                  </Link>
                </div>
              </div>
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
                <li>Traitement de l'épilepsie</li>
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