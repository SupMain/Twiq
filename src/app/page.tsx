import Image from "next/image";

export default function Home() {
    return (
        <div className="police h-full w-full no-scrollbar bg-[#f3f2f7]">
            <div className="flex fixed top-0 text-3xl justify-evenly items-center space-x-4 opacity-60 h-[90px] inset-x-0 transform bg-[#3694ee] rounded-b-full">
                <a href="#presentation" className="text-white">Présentation</a>
                <a href="#rejoignez-nous" className="text-white">Rejoignez-nous !</a>
                <a href="#contactez-nous" className="text-white">Contactez-nous !</a>
            </div>
            <div className="fixed left-0 top-2">
                <Image src="/logo.png" alt="Logo de Voyage Initiative Artistique" width={50} height={50} />
            </div>
            <div id="presentation" className="h-screen flex flex-col items-center police rounded-3xl py-24 bg-gray-200">
                <h1 className="text-5xl mb-6 w600" style={{ fontFamily: 'Poppins, sans-serif' }}>Présentation de Voyage Initiative Artistique (VIA)</h1>
                <p className="leading-relaxed w-3/5 text-3xl text-center my-auto">
                    Voyage Initiative Artistique est une association créée sous l&apos;impulsion d&apos;artistes novateurs, de créateurs et d&apos;entrepreneurs de tous horizons, désireux de mettre en lumière leurs expériences et leurs pratiques afin d&apos;en faire profiter un public aussi divers que leurs projets.<br/><br/>
                    Vous pouvez nous aider en adhérant à notre association, par un don, ou en nous proposant des lieux et des salles susceptibles de nous accueillir pour des concerts ou des stages adaptés. <br/><br/>
                    Nous proposons divers concerts, spectacles et stages en fonction des artistes disponibles et engagés dans nos initiatives.<br/><br/>
                    Nous organisons principalement des stages autour de l&apos;art vocal, choral ou individuel prenant en compte le bien-être du corps, des exercices de respiration et d&apos;autres exercices de relaxation et d&apos;extériorisation par le biais du jeu théâtral et de la comédie musicale, ainsi que des concerts et spectacles alliant pratique et musique, culture musicale et ouverture d&apos;esprit.<br/><br/>
                    Nous proposons également des projets similaires autour de la harpe, classique ou celtique, avec l&apos;appui de l&apos;artiste Isabelle Issier, qui met son expérience professionnelle au service de Voyage Initiative Artistique.
                </p>
            </div>
            <div id="rejoignez-nous" className="h-screen flex flex-col items-center  rounded-3xl py-24 bg-[#3694ee] ">
                <h1 className="text-5xl w600 mb-6"  style={{ fontFamily: 'Poppins, sans-serif' }}>Rejoignez-nous !</h1>
                <p className="w-3/5 leading-relaxed text-3xl text-center my-auto">
                    Vous pouvez nous rejoindre et nous soutenir financièrement par votre adhésion de 50€ par année scolaire en envoyant un chèque
                    à l&apos;ordre de Voyage Initiative Artistique, à l&apos;adresse postale suivante :<br/><br/>
                    2310 avenue de Toulouse 34070 MONTPELLIER<br/><br/>

                    ou par un don à partir de 1€ lors de nos rencontres.<br/><br/>
                    Vous pouvez également, à cette adresse, nous envoyer des projets que vous souhaiteriez réaliser avec notre aide, nous les étudierons avec attention.<br/>
                    <br/>Bien musicalement,<br/>
                    La présidente de Voyage Initiative Artistique (VIA), <br/>Madame Isabelle Vidaux
                </p>
            </div>
            <div id="contactez-nous" className="h-screen flex flex-col items-center  rounded-3xl py-24 bg-gray-200">
                <h1 className="text-5xl w600 mb-6"  style={{ fontFamily: 'Poppins, sans-serif' }}>Contactez-nous !</h1>
                <p className="w-3/5 leading-relaxed  text-3xl text-center my-auto">
                    Coordonnées de l&apos;association : <br/><br/>
                    Siège de l&apos;association : <br/>2310 avenue de Toulouse 34070 MONTPELLIER <br/><br/>
                    Email de l&apos;association : <br/>asso.viaoccitanie@gmail.com<br/><br/>
                    Coordonnées de la Présidente de l&apos;association Madame Isabelle VIDAUX: <br/><br/>
                    Numéro de téléphone : 06 30 25 18 57 <br/>
                </p>
            </div>
        </div>
    );
}
