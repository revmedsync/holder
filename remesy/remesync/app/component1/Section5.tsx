import React from 'react';


interface logoProps {
  name: string;
  src: string;
}
const softwareLogos = [
  { name: 'PracticeFusion', src: './wares/practicefusion.png' },
  { name: 'AdvanceMD', src: './wares/admd.png' },
  { name: 'Epic', src: './wares/epic.png' },
  { name: 'Cerner', src: './wares/cerner.png' },
  { name: 'Allscripts', src: './wares/allscripts.png' },
  { name: 'Kareo', src: './wares/kareo.png' },
  { name: 'Athenahealth', src: './wares/athenahealth.png' },
  { name: 'eClinicalWorks', src: './wares/eclinicalworks.png' },
  { name: 'Medisoft', src: './wares/medisoft.png' },
  { name: 'IMS', src: './wares/ims.png' },
  { name: 'MDofficeManager', src: './wares/mdofficemanager.png' },
  { name: 'Office Ally', src: './wares/officeally.png' },
  { name: 'MedENT', src: './wares/medent.png' },
  { name: 'Augusta', src: './wares/augusta.png' },
];

const LogoCard = ({ name, src }: logoProps) => (
  <div className="flex-shrink-0 p-4 bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
    <div className="flex justify-center items-center h-16">
      <img src={src} alt={`${name} logo`} className="md:w-32 h-16 object-contain" />
    </div>
    <p className="mt-2 text-sm text-center text-gray-600">{name}</p>
  </div>
);

export function Section5() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#D95F59] to-[#4F1787]">
      <div className="container mx-auto px-4">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#E2E2B6] sm:text-4xl md:text-5xl">
            Software We Support
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-[#E2DFD0]">
            We provide expert services for leading healthcare software platforms.
          </p>
        </div>
        <div className="mt-12 p-5 overflow-hidden">
          <div className="flex flex-wrap justify-center gap-8">
            {softwareLogos.map((logo) => (
              <LogoCard key={logo.name} {...logo} />
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-[#E2DFD0] uppercase font-CustomGlyseric">
            And many more... Contact us for a full list of supported software.
          </p>
        </div>
      </div>
      
      </section>
  );
}
