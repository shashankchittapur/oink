import { IndustryDefinition, OverViewEnum } from "@/types/industries";
import { describe } from "node:test";
import { title } from "process";

export const industryDefinitions: IndustryDefinition[] = [
    {
        path: 'hi-tech-and-semi-conductor',
        href: '/industries/hi-tech-and-semi-conductor',
        title: 'Hi Tech and Semi Conductor',
        description: 'TRANSFORMING FUTURE WITH DIGITAL INNOVATION',
        heroImage: '/images/industries/hero/Semiconductor.jpg',
        overview: {
            details: [
                "In 2020, high-tech companies witnessed one of the most significant disruptions, considering the pandemic. However, High tech continues to be one of the strongest industry sectors when it comes to sustainability. One of the largest external forces impacting high-tech supply chains is a dynamic competitive landscape that is driven by a combination of expanded customer expectations and new market entrants, from both existing industry ecosystems and the emergence of nontraditional competitors. To remain competitive, supply chains must enable change by possessing solid operational models and transformational capabilities.",
                "During the pandemic, many high-tech companies showed their ability to embrace business-model transformation. Despite the current challenging environment, advanced supply chains are pressing forward and accelerating investments in real-time visibility, planning, and agile supply chain execution capabilities."
            ],
            overviewType: OverViewEnum.TABLE_VIEW,
            tableHighlights: {
                highlights: [
                    {
                        title: 'Global Supply Chain',
                        description: 'Global supply chain, manufacturing partners and distributors spread across the globe',
                        icon: '/images/industries/highlights/Global-Supply-Chain-manufacturing.jpeg',
                    },
                    {
                        title: 'Disconnected Tools',
                        description: 'Disconnected tools, e.g. different PowerPoint and Excel for product roadmaps, proposals etc.',
                        icon: '/images/industries/highlights/Disconnected-tools.jpeg',
                    },
                    {
                        title: 'Diversified Products',
                        description: 'Diversified products and services offerings',
                        icon: '/images/industries/highlights/Diversified-products.jpeg',
                    },
                    {
                        title: 'Regulations and Compliance',
                        description: 'Managing regulations and compliance',
                        icon: '/images/industries/highlights/Managing-regulations-and-compliances.jpeg',
                    }
                ]
            }

        },
        industryBenifits: {
            benifits: [
                {
                    title: 'Performance Engagement',
                    icon: '/images/industries/benifits/Performance-Engagement.png',
                },
                {
                    title: 'Standardized Solution',
                    icon: '/images/industries/benifits/Standardized-Solution.png',
                },
                {
                    title: 'Fast Integration',
                    icon: '/images/industries/benifits/Fast-Integration.png',
                },
                {
                    title: 'Reduced Cost',
                    icon: '/images/industries/benifits/reduce-cost.png',
                }
            ]
        },
        industryFocusAreas: {
            focusAreas: [
                {
                    title: 'Connected Operations',
                    description: 'Connected modern experience to deliver exceptional CX, connected engineering to accelerate ROI, connected insights and Data 360 to improve efficiency and decisions, and Connected Edge and cloud to simplify complexities.',
                    icon: '/images/industries/hi-tech-and-semi-conductor/focus-areas/Connected-Operations.jpeg',
                },
                {
                    title: 'Digital supply chain',
                    description: 'Real-time and granular supply chain visibility for better customer experiences. Predict demand and optimize sourcing and procurement to improve your supply chain resiliency against adverse events.',
                    icon: '/images/industries/hi-tech-and-semi-conductor/focus-areas/Digital-Supply-Chain.jpeg',
                },
                {
                    title: 'Servitization',
                    description: 'Accelerate your servitization journey by identifying the right products and markets, defining the GTM strategy with partner and customer segmentations, measuring KPIs, and identifying upsell/cross-sell opportunities through our recommendation engine.',
                    icon: '/images/industries/hi-tech-and-semi-conductor/focus-areas/Servitization.jpeg',
                },
                {
                    title: 'Modern experience to engineering',
                    description: 'Cloud-native, full-stack services help enterprises design, create, and maintain their cloud and infrastructure, reduce time-to-market and cost, and improve innovation and scale.',
                    icon: '/images/industries/hi-tech-and-semi-conductor/focus-areas/Modern-Experience-to-Engineering.jpeg'
                }
            ]
        },
        industryOfferings: {
            offerings: [
                {
                    title: 'Oracle',
                    description: 'A complete suite of end to end solutions including advisory services, implementations, migrations, rollouts and AMS.',
                    icon: '/images/industries/offerings/hi-tech-and-semi-conductor/oracle.png'
                },
                {
                    title: 'SAP',
                    description: 'SAP certified life sciences solution which address the challenges and business needs of the life sciences industry.',
                    icon: '/images/industries/hi-tech-and-semi-conductor/offerings/SAP.png'
                },
                {
                    title: 'Digital customer experience',
                    description: 'Digital customer experience solutions that helps you translate your digital marketing strategies and drive superior customer experience',
                    icon: '/images/industries/hi-tech-and-semi-conductor/offerings/Digital-Customer-Experience.png'
                },
                {
                    title: 'Adobe',
                    description: 'Adobe expertise that shortens your value realization cycle, improves customer conversion, acquisition, engagement and retention',
                    icon: '/images/industries/hi-tech-and-semi-conductor/offerings/Adobe.png'
                },
                {
                    title: 'Salesforce',
                    description: 'Salesforce solutions provide end to and innovative digital solutions to modernise your legacy applications',
                    icon: '/images/industries/hi-tech-and-semi-conductor/offerings/Salesforce.png'
                },
                {
                    title: 'Application transformation',
                    description: 'Smart ADM that provides application modernisation, cloud applications, product centric development, support and maintenance.',
                    icon: '/images/industries/hi-tech-and-semi-conductor/offerings/Application-Transformation.png'
                },
                {
                    title: 'Digital foundation services',
                    description: 'Solutions for a sound digital foundation that is agile, collaborative and scalable.',
                    icon: '/images/industries/hi-tech-and-semi-conductor/offerings/Digital-Foundation-Services.png'
                }

            ]
        }
    },
    {
        path: 'retail-consumer-industry',
        href: '/industries/retail-consumer-industry',
        title: 'Retail & Consumer Industry',
        description: 'STREAMLINING OPERATIONS TO ACHIEVE GREATER EFFICIENCY',
        heroImage: '/images/industries/hero/Retail-Industry.jpeg',
        overview: {
            details: [
                "According to Gartner report, “2020 Gartner Supply Chain Top 25: Retail” published on August 7 2020 by Thomas O’Connor et al, “Gartner’s annual Future of Supply Chain Survey shows that, coming into 2020, retailers were rapidly shifting their view of the role that supply chain plays in business. From 2018 to 2019, we’ve seen the percentage of retailers indicating that supply chain is understood as an equally important part of business success as sales and marketing or product development increase from 43% to 55% — and this was before COVID-19. During the pandemic, senior leadership at businesses in Gartner’s retail Top 10 and Masters lists have emphasized the critical role of supply chain.“",
                "In the same report, Gartner mentioned three key trends about the strategic focus of retail leaders:"
            ],
            overviewType: OverViewEnum.TABLE_VIEW,
            tableHighlights: {
                highlights: [
                    {
                        title: 'Global Supply Chain',
                        description: 'Global supply chain, manufacturing partners and distributors spread across the globe',
                        icon: '/images/industries/highlights/Global-Supply-Chain-manufacturing.jpeg',
                    },
                    {
                        title: 'Disconnected Tools',
                        description: 'Disconnected tools, e.g. different PowerPoint and Excel for product roadmaps, proposals etc.',
                        icon: '/images/industries/highlights/Disconnected-tools.jpeg',
                    },
                    {
                        title: 'Diversified Products',
                        description: 'Diversified products and services offerings',
                        icon: '/images/industries/highlights/Diversified-products.jpeg',
                    },
                    {
                        title: 'Regulations and Compliance',
                        description: 'Managing regulations and compliance',
                        icon: '/images/industries/highlights/Managing-regulations-and-compliances.jpeg',
                    }
                ]
            }

        },
        industryBenifits: {
            benifits: [
                {
                    title: 'Performance Engagement',
                    icon: '/images/industries/benifits/Performance-Engagement.png',
                },
                {
                    title: 'Standardized Solution',
                    icon: '/images/industries/benifits/Standardized-Solution.png',
                },
                {
                    title: 'Fast Integration',
                    icon: '/images/industries/benifits/Fast-Integration.png',
                },
                {
                    title: 'Reduced Cost',
                    icon: '/images/industries/benifits/reduce-cost.png',
                }
            ]
        },
        industryFocusAreas: {
            focusAreas: [
                {
                    title: 'Digital Strategy and Execution',
                    description: 'With our experience, create complete digital transformation plans, create cloud-native full-stack apps, update outdated technology stacks, and automate corporate procedures to boost productivity and drive expansion.',
                    icon: '/images/industries/retail-consumer-industry/focus-areas/Digital-Strategy-and-Execution.jpeg'
                },
                {
                    title: 'Elevate Customer Experience',
                    description: 'Through omnichannel integration, personalisation, in-store experiences, user-friendly websites, and mobile apps, we contribute to the creation of distinctive shopping experiences.',
                    icon: '/images/industries/retail-consumer-industry/focus-areas/Elevate-Customer-Experience.jpeg'
                },
                {
                    title: 'Package Implementation',
                    description: 'To help our clients achieve operational excellence, we build and support enterprise apps including SAP, Oracle, Salesforce, Manhattan, and Blue Yonder.',
                    icon: '/images/industries/retail-consumer-industry/focus-areas/Package-implementation.jpeg'
                },
                {
                    title: 'Data Driven Decision Making',
                    description: 'We enable clients to optimise return on investment (ROI) from available resources through our state-of-the-art consultancy, enterprise data architecture, domain consulting, and plan-build-deploy services.',
                    icon: '/images/industries/retail-consumer-industry/focus-areas/Data-Driven-Decision-Making.jpeg'
                },
                {
                    title: 'Innovation',
                    description: 'By utilising our investments in blockchain, AI/ML, AR/VR, digital twins, IoT, and other areas, we provide our clients with extensive co-innovation options.',
                    icon: '/images/industries/retail-consumer-industry/focus-areas/Innovation.jpeg'
                }
            ]
        },
        industryOfferings: {
            offerings: [
                {
                    title: 'Order Management',
                    description: 'By using individualised order management, we improve the shopping experience by guaranteeing that the correct product is delivered at the right time, via the right channel, at the right price.',
                    icon: '/images/industries/retail-consumer-industry/offerings/Order-Management.jpeg'
                },
                {
                    title: 'Merchandising Solutions',
                    description: 'We streamline omnichannel merchandising, pricing, promotion, assortment planning, and real-time tracking of orders, sales, inventory, and fulfilment. Our strategy involves developing tailored plans and putting packaged solutions into practice to enable shops to meet their goals.',
                    icon: '/images/industries/retail-consumer-industry/offerings/Merchandising-Solutions.jpeg'
                },
                {
                    title: 'Warehouse Management Solutions',
                    description: 'Design, implement, and customize warehouse and transport management solutions with our expertise. We ensure faster time-to-market with our integration, configuration, and test accelerators. Our specialized tools facilitate seamless integration between WMS and WES.',
                    icon: '/images/industries/retail-consumer-industry/offerings/Warehouse-Management-Solutions.jpeg'
                },
                {
                    title: 'Digital Commerce',
                    description: 'We offer comprehensive services that transform how businesses interact, conduct business, and support their clients in the current omnichannel setting, which includes contact centre, online, and offline modes. In addition to our knowledge of Salesforce and Oracle commerce, we also provide customised composeable commerce solutions.',
                    icon: '/images/industries/retail-consumer-industry/offerings/Digital-Commerce.jpeg'
                },
                {
                    title: 'POS solutions',
                    description: 'Our proven expertise helps deliver premium experiences to end customers and store associates. We do this by leveraging our integrated retail solutions to manage sales, inventory, faster checkouts, real-time promotions, and omnichannel support.',
                    icon: '/images/industries/retail-consumer-industry/offerings/POS-solutions.jpeg'
                }

            ]
        }
    },
    {
        path: 'trading-distibution',
        href: '/industries/trading-distibution',
        title: 'Trading & Distibution',
        description: 'HELP TAKE BETTER DECISIONS WITH REAL INSIGHTS',
        heroImage: '/images/industries/hero/Trading-Distribution.jpeg',
        overview: {
            details: [
                "The industrial trading and distribution market is becoming more dynamic than ever. Global disruptions like the pandemic, climate change, and trade relations are affecting this industry to its core. Distribution companies are adapting to new business models due to increasing demands, diminishing margins, and tough competition. Successful distribution companies are gaining greater value from the value chain by integrating channels through self–service ordering and aggregated sourcing of suppliers.",
                "Distribution companies are facing numerous challenges, such as rising quality service expectations, supply chain directly linked to monetization, and dispersed market segments with different pricing structures."
            ],
            overviewType: OverViewEnum.TABLE_VIEW,
            tableHighlights: {
                highlights: [
                    {
                        title: 'Quality Service',
                        description: 'Global supply chain, manufacturing partners and distributors spread across the globe',
                        icon: '/images/industries/highlights/Global-Supply-Chain-manufacturing.jpeg',
                    },
                    {
                        title: 'Supply Chain',
                        description: 'Disconnected tools, e.g. different PowerPoint and Excel for product roadmaps, proposals etc.',
                        icon: '/images/industries/highlights/Disconnected-tools.jpeg',
                    },
                    {
                        title: 'Dispersed Market Segments',
                        description: 'Diversified products and services offerings',
                        icon: '/images/industries/highlights/Diversified-products.jpeg',
                    }
                ]
            }

        },
        industryBenifits: {
            benifits: [
                {
                    title: 'Real Time Insights',
                    icon: '/images/industries/benifits/Performance-Engagement.png',
                },
                {
                    title: 'Better Procurement',
                    icon: '/images/industries/benifits/Standardized-Solution.png',
                },
                {
                    title: 'Effective Customer Acquisition & Retention',
                    icon: '/images/industries/benifits/Fast-Integration.png',
                },
                {
                    title: 'Competent Revenue Strategy',
                    icon: '/images/industries/benifits/reduce-cost.png',
                }
            ]
        },
        industryFocusAreas: {
            focusAreas: [

            ]
        },
        industryOfferings: {
            offerings: [
            ]
        }
    },
    {
        path: 'industrial-manufacturing',
        href: '/industries/industrial-manufacturing',
        title: 'Industrial Manufacturing',
        description: 'ALIGNING SUPPLY AND DEMAND MANAGEMENT',
        heroImage: '/images/industries/hero/Industrial-Manufacturing.jpeg',
        overview: {
            details: [
                "Industrial manufacturers address a broad number of consumer and business segments ranging across automotive, aerospace and defense, general machinery and components, and construction materials. A volatile economic environment, global disruptions, and shifting government policies have created uncertainty for industrial manufacturing companies while increasing competitive price pressure. It is challenging for supply chain leaders focused on the strategy to forecast demand or to make supply network redesign decisions.",
                "Industrial manufacturing companies are adopting multiple growth strategies including digital transformation, product innovation, and building partnerships to respond to the market developments quickly. Digital technologies are impacting how supply chains operate as they become smarter and better connected."
            ],
            overviewType: OverViewEnum.TABLE_VIEW,
            tableHighlights: {
                highlights: [
                    {
                        title: 'Quality Service',
                        description: 'Global supply chain, manufacturing partners and distributors spread across the globe',
                        icon: '/images/industries/highlights/Global-Supply-Chain-manufacturing.jpeg',
                    },
                    {
                        title: 'Supply Chain',
                        description: 'Disconnected tools, e.g. different PowerPoint and Excel for product roadmaps, proposals etc.',
                        icon: '/images/industries/highlights/Disconnected-tools.jpeg',
                    },
                    {
                        title: 'Dispersed Market Segments',
                        description: 'Diversified products and services offerings',
                        icon: '/images/industries/highlights/Diversified-products.jpeg',
                    }
                ]
            }

        },
        industryBenifits: {
            benifits: [
                {
                    title: 'Better Syncronization',
                    icon: '/images/industries/benifits/Performance-Engagement.png',
                },
                {
                    title: 'Increased Operations Productivity',
                    icon: '/images/industries/benifits/Standardized-Solution.png',
                },
                {
                    title: 'Reduced Overheads',
                    icon: '/images/industries/benifits/Fast-Integration.png',
                },
                {
                    title: 'Improve Visibility',
                    icon: '/images/industries/benifits/reduce-cost.png',
                }
            ]
        },
        industryFocusAreas: {
            focusAreas: [
                {
                    title: 'Industry 4.0 solutions',
                    description: 'Utilise digital technologies including cloud computing, AI/ML, big data and analytics, IoT, AR/VR, and digital twins to transform manufacturing and industrial processes.',
                    icon: '/images/industries/industrial-manufacturing/focus-areas/Industry-4.0-solutions.jpeg'
                },
                {
                    title: 'Supply Chain Management',
                    description: 'By streamlining the whole supply chain—from sourcing to delivery—our methods help manufacturers cut expenses, boost supplier cooperation, and better manage their inventories.',
                    icon: '/images/industries/industrial-manufacturing/focus-areas/Supply-Chain-Management.jpeg'
                },
                {
                    title: 'ERP Solutions',
                    description: 'Use ERP solutions to effectively execute and customise manufacturing operations, have access to real-time data into supply chain, production, and inventory, and speed market launches with increased agility.',
                    icon: '/images/industries/industrial-manufacturing/focus-areas/Implement-ERP-solutions.jpeg'
                },
                {
                    title: 'Digital Strategy and Execution',
                    description: 'In order to improve operational efficiency and growth, we specialise in creating cloud-native full-stack apps, automating business processes, and modernising legacy stacks. We also construct comprehensive digital transformation roadmaps.',
                    icon: '/images/industries/industrial-manufacturing/focus-areas/Digital-Strategy-and-Execution.jpeg'
                },
                {
                    title: 'Manage Customer Relationships',
                    description: 'In order to collect leads, manage customer interactions, improve communication, and raise customer satisfaction, we assist in the implementation of CRM systems designed specifically for manufacturing and industrial companies.',
                    icon: '/images/industries/industrial-manufacturing/focus-areas/Manage-Customer-Relationships.jpeg'
                },
                {
                    title: 'Data analytics and business intelligence',
                    description: 'Manufacturers are able to extract meaningful insights from their data and processes because to our demonstrated domain expertise. For clients, our specialists guarantee data-driven choices, improved predictive maintenance, and performance improvement.',
                    icon: '/images/industries/industrial-manufacturing/focus-areas/Data-analytics-and-business-intelligence.jpeg'
                }
            ]
        },
        industryOfferings: {
            offerings: [
                {
                    title: 'Oracle',
                    description: 'A complete suite of end to end solutions including advisory services, implementations, migrations, rollouts and AMS.',
                    icon: '/images/industries/industrial-manufacturing/offerings/Oracle.png'
                },
                {
                    title: 'SAP',
                    description: 'SAP certified life sciences solution which address the challenges and business needs of the life sciences industry.',
                    icon: '/images/industries/industrial-manufacturing/offerings/SAP.png'
                },
                {
                    title: 'Salesforce',
                    description: 'Salesforce solutions provide end to and innovative digital solutions to modernise your legacy applications.',
                    icon: '/images/industries/industrial-manufacturing/offerings/Salesforce.png'
                },

                {
                    title: 'Warehouse Management Solutions',
                    description: 'Design, implement, and customize warehouse and transport management solutions with our expertise. We ensure faster time-to-market with our integration, configuration, and test accelerators. Our specialized tools facilitate seamless integration between WMS and WES.',
                    icon: '/images/industries/industrial-manufacturing/offerings/Warehouse-Management-Solutions.png'
                },
                {
                    title: 'Cloud Transformation and Operations',
                    description: 'To create long-term value, move, run, and scale business-critical apps to the cloud.',
                    icon: '/images/industries/industrial-manufacturing/offerings/Cloud-Transformation-and-Operations.png'
                }
            ]
        }
    },
    {
        path: 'life-science-and-healthcare',
        href: '/industries/life-science-and-healthcare',
        title: 'Life Sciences and Healthcare',
        description: 'ALIGNING SUPPLY AND DEMAND MANAGEMENT',
        heroImage: '/images/industries/hero/healthcare.jpeg',
        overview: {
            details: [
                "In today’s evolving business landscape, life sciences organizations must deliver fast responses, provide high-quality products, and improve their dynamic competencies. Oink helps customers worldwide uncover their potential and drive progress through our deep understanding of the life sciences ecosystem—from pharma, biotech, medical devices, clinical trials, and more. We leverage an array of solutions built on top of Oracle’s cloud-based technologies, helping life sciences organizations overcome several challenges. With modern solution offerings, we ensure faster time-to-value for new treatments and devices, unify data from clinical trials, streamline and automate safety case management, and strengthen business operations.",
                "Life sciences organizations are facing numerous challenges, such as rising quality service expectations, supply chain directly linked to monetization, and dispersed market segments with different pricing structures."
            ],
            overviewType: OverViewEnum.TABLE_VIEW,
            tableHighlights: {
                highlights: [
                    {
                        title: 'Quality Service',
                        description: 'Global supply chain, manufacturing partners and distributors spread across the globe',
                        icon: '/images/industries/highlights/Global-Supply-Chain-manufacturing.jpeg',
                    },
                    {
                        title: 'Supply Chain',
                        description: 'Disconnected tools, e.g. different PowerPoint and Excel for product roadmaps, proposals etc.',
                        icon: '/images/industries/highlights/Disconnected-tools.jpeg',
                    },
                    {
                        title: 'Dispersed Market Segments',
                        description: 'Diversified products and services offerings',
                        icon: '/images/industries/highlights/Diversified-products.jpeg',
                    }
                ]
            }

        },
        industryBenifits: {
            benifits: [
                {
                    title: 'Streamlined Workflows and Productivity',
                    icon: '/images/industries/benifits/Performance-Engagement.png',
                },
                {
                    title: 'Enhanced Patient Care and Outcomes',
                    icon: '/images/industries/benifits/Standardized-Solution.png',
                },
                {
                    title: 'Improved Scalability and Flexibility',
                    icon: '/images/industries/benifits/Fast-Integration.png',
                },
                {
                    title: 'Meeting Regulatory Compliance Goals',
                    icon: '/images/industries/benifits/reduce-cost.png',
                },
                {
                    title: 'Faster Collaboration and Decision-Making',
                    icon: '/images/industries/benifits/reduce-cost.png',
                }
            ]
        },
        industryFocusAreas: {
            focusAreas: [
                {
                    title: 'Transform the Core',
                    description: 'We design, develop, and maintain enterprise apps like Veeva, SAP, Oracle, and Salesforce to provide a cutting-edge foundation for corporate operations.',
                    icon: '/images/industries/life-science-and-healthcare/focus-areas/Transform-the-Core.jpeg'
                },
                {
                    title: 'Elevate HCP and Patient Experience',
                    description: 'For patients and healthcare providers, we build unique experiences that promote meaningful connection and keep the focus on health outcomes.',
                    icon: '/images/industries/life-science-and-healthcare/focus-areas/Elevate-HCP-and-Patient-Experience.jpeg'
                },
                {
                    title: 'Leverage Data to Drive Decision Making',
                    description: 'With the use of artificial intelligence, data products, data democratisation, and data governance, we assist clients in reaching new heights of data maturity.',
                    icon: '/images/industries/life-science-and-healthcare/focus-areas/Leverage-Data-to-Drive-Decision-Making.jpeg'
                },
                {
                    title: 'Infrastructure Modernization',
                    description: 'To safeguard our clients from cybersecurity risks, we modernise IT infrastructure, cloud services, and digital workspaces.',
                    icon: '/images/industries/life-science-and-healthcare/focus-areas/Infrastructure-Modernization.jpeg'
                },
                {
                    title: 'Innovation',
                    description: 'We offer full-stack, cloud-native services that assist businesses in designing, building, and managing their cloud and infrastructure, cutting costs and time-to-market, and enhancing innovation and scalability.',
                    icon: '/images/industries/life-science-and-healthcare/focus-areas/Innovation.jpeg'
                }
            ]
        },
        industryOfferings: {
            offerings: [
                {
                    title: 'Oracle',
                    description: 'A complete suite of end to end solutions including advisory services, implementations, migrations, rollouts and AMS.',
                    icon: '/images/industries/life-science-and-healthcare/offerings/Oracle.png'
                },
                {
                    title: 'SAP',
                    description: 'SAP certified life sciences solution which address the challenges and business needs of the life sciences industry.',
                    icon: '/images/industries/life-science-and-healthcare/offerings/SAP.png'
                },
                {
                    title: 'Salesforce',
                    description: 'Salesforce solutions provide end to and innovative digital solutions to modernise your legacy applications.',
                    icon: '/images/industries/life-science-and-healthcare/offerings/Salesforce.png'
                },
                {
                    title: 'Digital HCP and Patient Experience',
                    description: 'Solutions for digital customer experience that assist you in implementing your digital marketing tactics and enhancing the patient and HCP experience.',
                    icon: '/images/industries/life-science-and-healthcare/offerings/Digital-HCP-and-Patient-Experience.png'
                },
                {
                    title: 'Application services',
                    description: 'We make next-generation ADM, modernization, microservices and API, testing automation, agile, DevSecOps, and more possible.',
                    icon: '/images/industries/life-science-and-healthcare/offerings/Application-Services.png'
                },
                {
                    title: 'Digital foundation services',
                    description: 'We provide you the tools you need to run, maintain, and improve the technology infrastructure required to give your company\'s operations the utmost security and support.',
                    icon: '/images/industries/life-science-and-healthcare/offerings/Digital-Foundation-Services.png'
                }

            ]
        }
    }
];