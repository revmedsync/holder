import { SectionCard1 } from "../components0/SectionCard1";
import { SubmitButton } from "../components0/storefront/SubmitButton";



const services = [
    { id: 0,
      title: "Streamline & Optimize",
      subtitle: "Enhance Your Medical Billing Process",
      description: "Boost your revenue cycle with our expert team handling claims processing, denial management, and payment posting. We ensure faster reimbursements and reduced errors.",
      learnMoreLink: "/services/medical-billing",
      image: "/funnel.jpg"
    },
    { id: 1,
      title: "Manage & Comply",
      subtitle: "Navigate Complex RCMS Regulations",
      description: "Stay compliant and up-to-date with ever-changing healthcare regulations. Our end-to-end RCMS services cover credentialing, enrollment, and ongoing monitoring.",
      learnMoreLink: "/services/rcms",
      image: "/graph.jpg"
    },
    { id: 2,
      title: "Analyze & Improve",
      subtitle: "Leverage Data for Better Decision-Making",
      description: "Gain insights from comprehensive analytics and reporting. Our tools help you identify trends, optimize workflows, and make informed strategic decisions to improve your bottom line.",
      learnMoreLink: "/services/analytics",
      image: "/shield.jpg"
    }
  ];


  const services2 = [
    { id: 0,
      title: "Design & Develop",
      subtitle: "Create Cutting-Edge Digital Solutions",
      description: "Boost your online presence with our expert team handling website design, development, and deployment. We ensure responsive, user-friendly, and high-performance digital products.",
      image: "/Design_Develop.jpg",
      details: [
        "Responsive web design",
        "Custom software development",
        "Mobile app creation (iOS and Android)",
        "E-commerce solutions",
        "Content Management Systems (CMS)",
        "User Interface (UI) and User Experience (UX) design"
      ]
    },
    { id:1,
      title: "Integrate & Optimize",
      subtitle: "Navigate Complex Software Ecosystems",
      description: "Stay competitive with seamlessly integrated software solutions. Our end-to-end development services cover system analysis, architecture design, and continuous integration/deployment.",
      image: "/Integrate_Optimize.jpg",
      details: [
        "API development and integration",
        "Cloud migration and management",
        "Database design and optimization",
        "Performance tuning and scalability",
        "Security implementation and testing",
        "DevOps and CI/CD pipeline setup"
      ]
    },
    { id:2,
      title: "Analyze & Innovate",
      subtitle: "Leverage Data for Better User Experience",
      description: "Gain insights from comprehensive analytics and user feedback. Our tools help you identify trends, optimize user journeys, and make informed decisions to improve your digital products.",
      image: "/Analyze_Innovate.jpg",
      details: [
        "User behavior analytics",
        "A/B testing implementation",
        "Conversion rate optimization",
        "Search Engine Optimization (SEO)",
        "Accessibility compliance",
        "Emerging technology integration (AI, ML, IoT)"
      ]
    }
  ];

export function Section3_1(){
    
    return (
        <div>
            <div className='bg-[#FEFFD2] pt-10 w-full items-center justify-center flex py-5'>
                <SubmitButton text="Workable Software development"/>
            
            
            
            </div>

        <div className="flex flex-wrap justify-center p-2 gap-6 bg-[#FEFFD2]">
          {services2.map((item) => (
            <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
              <SectionCard1
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                details={item.details}
              />
            
            </div>
          ))}
          <div className="bg-[#FEFFD2] w-full h-[150px] "></div>
        </div>
 
        </div>     )
}