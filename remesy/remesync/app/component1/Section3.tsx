import { SectionCard } from "../components0/SectionCard";



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


 

export function Section3(){
    
    return (
        <div className="flex flex-wrap justify-center p-2 gap-6 bg-[#FEFFD2]">
          {services.map((item) => (
            <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
              <SectionCard 
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                learnMoreLink={item.learnMoreLink}

              />
            
            </div>
          ))}
          <div className="bg-[#FEFFD2] w-full h-[80px] "></div>
        </div>
      )
}