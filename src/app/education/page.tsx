import Image from "next/image";
import Link from "next/link";

export default function EducationPage() {
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
              <Link href="/about-doctor" className="text-gray-600 hover:text-blue-600">Équipe</Link>
              <Link href="/education" className="text-gray-600 hover:text-blue-600 font-medium">Éducation</Link>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
              Prendre RDV
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-2">
            <Link href="/" className="text-blue-600 hover:underline mr-2">Accueil</Link>
            <span className="text-gray-400 mr-2">/</span>
            <span className="text-gray-700">Éducation et sensibilisation</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Comprendre l&apos;épilepsie</h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl">
            L&apos;éducation et la sensibilisation sont essentielles pour combattre les idées reçues sur l&apos;épilepsie 
            et permettre aux patients de recevoir les soins appropriés.
          </p>
          
          {/* Hero Image Section */}
          <div className="relative h-[400px] w-full mb-12 rounded-xl overflow-hidden">
            <Image
              src="/education-hero.jpg"
              alt="Session d&apos;information sur l&apos;épilepsie"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center">
              <div className="text-white max-w-xl p-8">
                <h2 className="text-3xl font-bold mb-4">
                  L&apos;épilepsie n&apos;est pas une malédiction
                </h2>
                <p className="text-lg">
                  C&apos;est une maladie neurologique qui peut être traitée efficacement avec un suivi médical approprié.
                </p>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Qu&apos;est-ce que l&apos;épilepsie ?</h2>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  L&apos;épilepsie est une maladie neurologique chronique caractérisée par des crises récurrentes, 
                  qui sont le résultat d&apos;une activité électrique anormale dans le cerveau. Ces crises peuvent 
                  se manifester de différentes façons, allant de brèves absences à des convulsions affectant 
                  l&apos;ensemble du corps.
                </p>
                
                <p>
                  Contrairement aux croyances populaires, l&apos;épilepsie n&apos;est pas :
                </p>
                
                <ul>
                  <li>Une malédiction ou une possession</li>
                  <li>Une forme de folie ou de trouble mental</li>
                  <li>Une maladie contagieuse</li>
                  <li>Nécessairement héréditaire</li>
                </ul>
                
                <p>
                  L&apos;épilepsie est une condition médicale qui peut être diagnostiquée et, dans la plupart des cas, 
                  traitée efficacement avec des médicaments antiépileptiques et parfois d&apos;autres approches thérapeutiques.
                </p>
                
                <h3>Les causes de l&apos;épilepsie</h3>
                
                <p>
                  L&apos;épilepsie peut avoir diverses causes, notamment :
                </p>
                
                <ul>
                  <li>Facteurs génétiques</li>
                  <li>Traumatismes crâniens</li>
                  <li>Tumeurs cérébrales</li>
                  <li>Accidents vasculaires cérébraux (AVC)</li>
                  <li>Infections du système nerveux central (comme la méningite)</li>
                  <li>Malformations cérébrales</li>
                </ul>
                
                <p>
                  Cependant, dans près de la moitié des cas, la cause exacte reste inconnue.
                </p>
                
                <h3>Reconnaître une crise d&apos;épilepsie</h3>
                
                <p>
                  Les crises d&apos;épilepsie peuvent se manifester de différentes façons. Les signes courants incluent :
                </p>
                
                <ul>
                  <li>Perte de conscience temporaire</li>
                  <li>Confusion</li>
                  <li>Mouvements saccadés incontrôlables des bras et des jambes</li>
                  <li>Regard fixe et absence momentanée</li>
                  <li>Sensations psychiques comme la peur, la joie ou la colère soudaines</li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Citation du Dr. Barry</h3>
                <blockquote className="italic text-gray-700 border-l-4 border-blue-600 pl-4">
                  &quot;En Guinée, trop de patients souffrant d&apos;épilepsie sont marginalisés et n&apos;ont pas accès aux soins appropriés. Notre travail consiste à changer cette réalité, un patient à la fois.&quot;
                </blockquote>
                <div className="mt-4 flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/doctor.jpg"
                      alt="Dr BARRY Souleymane Djigué"
                      fill
                      sizes="(max-width: 768px) 100vw, 100px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Dr. Souleymane Djigué Barry</p>
                    <p className="text-sm text-gray-600">Neurologue, CHU Ignace Deen</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Faits importants</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>L&apos;épilepsie touche environ 50 millions de personnes dans le monde</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Environ 80% des personnes épileptiques vivent dans des pays à revenu faible ou intermédiaire</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Jusqu&apos;à 70% des personnes épileptiques pourraient vivre sans crises si elles étaient diagnostiquées et traitées correctement</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Besoin d&apos;aide ?</h3>
                <p className="text-gray-700 mb-4">
                  Si vous ou un proche souffrez de symptômes qui pourraient être liés à l&apos;épilepsie, n&apos;hésitez pas à consulter.
                </p>
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Prendre rendez-vous
                </button>
              </div>
            </div>
          </div>
          
          {/* Myths and Facts Section */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Mythes et réalités sur l&apos;épilepsie</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="flex items-center text-xl font-semibold text-red-800 mb-2">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Mythe : L&apos;épilepsie est contagieuse
                  </h3>
                  <p className="text-gray-700">
                    Certaines personnes pensent qu&apos;elles peuvent &quot;attraper&quot; l&apos;épilepsie en étant en contact avec quelqu&apos;un qui fait une crise.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="flex items-center text-xl font-semibold text-green-800 mb-2">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Réalité : L&apos;épilepsie n&apos;est pas contagieuse
                  </h3>
                  <p className="text-gray-700">
                    L&apos;épilepsie est une condition neurologique qui ne peut en aucun cas se transmettre d&apos;une personne à une autre par contact physique ou proximité.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="flex items-center text-xl font-semibold text-red-800 mb-2">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Mythe : Les personnes épileptiques sont possédées
                  </h3>
                  <p className="text-gray-700">
                    Dans certaines communautés, les crises d&apos;épilepsie sont associées à des possessions par des esprits ou des forces surnaturelles.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="flex items-center text-xl font-semibold text-green-800 mb-2">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Réalité : L&apos;épilepsie est une condition médicale
                  </h3>
                  <p className="text-gray-700">
                    L&apos;épilepsie est causée par une activité électrique anormale dans le cerveau. C&apos;est une condition médicale bien documentée qui peut être traitée par des professionnels de la santé.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="flex items-center text-xl font-semibold text-red-800 mb-2">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Mythe : L&apos;épilepsie ne peut pas être traitée
                  </h3>
                  <p className="text-gray-700">
                    Certains croient que l&apos;épilepsie est une condition permanente sans solution.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="flex items-center text-xl font-semibold text-green-800 mb-2">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Réalité : L&apos;épilepsie peut être traitée efficacement
                  </h3>
                  <p className="text-gray-700">
                    Avec un traitement médical approprié, environ 70% des personnes atteintes d&apos;épilepsie peuvent vivre sans crises. Les médicaments antiépileptiques sont la principale forme de traitement.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* First Aid Section */}
          <div className="bg-blue-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Que faire en cas de crise d&apos;épilepsie ?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Actions à entreprendre</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Rester calme et chronométrer la durée de la crise</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Placer la personne en position latérale de sécurité une fois les convulsions terminées</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Éloigner les objets dangereux</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Rester avec la personne jusqu&apos;à ce qu&apos;elle se soit complètement rétablie</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Appeler les secours si la crise dure plus de 5 minutes ou si la personne ne reprend pas conscience</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Actions à éviter</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Ne pas essayer de retenir la personne ou d&apos;arrêter ses mouvements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Ne rien mettre dans la bouche de la personne</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Ne pas donner à boire ou à manger tant que la personne n&apos;est pas complètement réveillée</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Ne pas déplacer la personne, sauf si elle est en danger</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Ne pas pratiquer de réanimation cardio-pulmonaire, sauf en cas d&apos;arrêt respiratoire</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-blue-600 rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Besoin de consulter un spécialiste ?</h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Si vous ou un membre de votre famille présentez des symptômes qui pourraient être liés à l&apos;épilepsie, 
              n&apos;hésitez pas à consulter Dr. Barry Souleymane Djigué, spécialiste en neurologie.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 font-medium">
                Prendre rendez-vous
              </button>
              <Link href="/about-doctor" className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-blue-700 font-medium">
                En savoir plus sur Dr. Barry
              </Link>
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