import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SupplierQuestionnaire.module.css'

const listIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const SECTIONS = [
    { id: 'section1', label: 'Section 1', icon: listIcon },
    { id: 'section2', label: 'Section 2', icon: listIcon },
    { id: 'section3', label: 'Section 3', icon: listIcon },
    { id: 'section4', label: 'Section 4', icon: listIcon },
    { id: 'section5', label: 'Section 5', icon: listIcon },
    { id: 'section6', label: 'Section 6', icon: listIcon },
]

const SECTION_DESCS = {
    section5: 'Scope 3 includes emissions that occur outside your direct operations, but are linked to your value chain — including raw materials, packaging, logistics, waste, and certifications.',
    section6: 'Scope 4 refers to emissions avoided as a result of your products, services, or initiatives. These emissions are not part of your direct footprint but represent the positive climate impact your organization enables.',
}

const QUESTIONS = {
    section1: [
        {
            id: 'q01', num: 'QUESTION 01', title: 'Organization Name', defaultOpen: true,
            what: 'The registered legal name of your organization as it appears in official government and tax documentation. If you are a subsidiary, provide the name of the reporting entity responsible for this supply chain.',
            why: 'Accurate legal identification ensures traceability, regulatory compliance, and correct mapping of emissions data to the appropriate reporting entity. It prevents duplication or misallocation in sustainability reporting.',
        },
        {
            id: 'q02', num: 'QUESTION 02', title: 'Core Business Activities', defaultOpen: false,
            what: 'The primary business activity that best represents your organization\'s main operations within the supply chain.',
            why: 'Understanding your operational category helps classify emissions profiles, apply appropriate industry benchmarks, and ensure sector-specific accuracy in Product Carbon Footprint (PCF) calculations.',
        },
        {
            id: 'q03', num: 'QUESTION 03', title: 'Designation / Role / Title', defaultOpen: false,
            what: 'Your official job title or designation within the organization submitting this data.',
            why: 'Identifying the responsible individual ensures accountability, data credibility, and traceability for audit and verification purposes.',
        },
        {
            id: 'q04', num: 'QUESTION 04', title: 'Official Email Address', defaultOpen: false,
            what: 'Your official company email address for communication and verification.',
            why: 'This enables secure follow-ups, clarification requests, and validation of submitted data, ensuring reporting transparency.',
        },
        {
            id: 'q05', num: 'QUESTION 05', title: 'Number of Employees', defaultOpen: false,
            what: 'The total number of employees or employee range within your organization.',
            why: 'Organization size helps contextualize emissions intensity, operational scale, and benchmarking comparisons within similar industry categories.',
        },
        {
            id: 'q06', num: 'QUESTION 06', title: 'Annual Revenue', defaultOpen: false,
            what: 'Your organization\'s annual revenue for the selected reporting period.',
            why: 'Revenue data supports normalization of emissions metrics and improves sustainability performance comparisons across entities of different economic scale.',
        },
        {
            id: 'q07', num: 'QUESTION 07', title: 'Reporting Period', defaultOpen: false,
            what: 'The specific reporting year for which emissions and operational data are being submitted.',
            why: 'Consistent reporting periods ensure accurate year-on-year comparison and alignment with PCF boundary conditions.',
        },
        {
            id: 'q08', num: 'QUESTION 08', title: 'Availability of Scope 1, 2, and 3 Data', defaultOpen: false,
            what: 'Whether your organization has calculated emissions data at the site or organizational level for Scope 1, 2, and 3.',
            why: 'This determines the maturity of your carbon accounting system and allows integration of verified emissions data into PCF modeling.',
        },
        {
            id: 'q09', num: 'QUESTION 09', title: 'Emissions Data (If Available)', defaultOpen: false,
            what: 'Total Scope 1, Scope 2, and Scope 3 emissions for each manufacturing location.',
            why: 'Site-level emissions enable accurate allocation of environmental impact across facilities and improve precision in cradle-to-gate footprint calculations.',
        },
    ],

    section2: [
        {
            id: 'q10', num: 'QUESTION 10', title: 'PCF Report Availability', defaultOpen: true,
            what: 'Whether a Product Carbon Footprint study has been completed for the requested product(s) within the past 12 months.',
            why: 'Recent PCF studies provide verified emissions baselines and prevent outdated or inconsistent carbon accounting.',
        },
        {
            id: 'q11', num: 'QUESTION 11', title: 'Methodology Used', defaultOpen: false,
            what: 'The carbon accounting standard or methodology used to calculate the PCF.',
            why: 'Using recognized methodologies ensures consistency, comparability, and alignment with international standards.',
        },
        {
            id: 'q12', num: 'QUESTION 12', title: 'Upload PCF Report', defaultOpen: false,
            what: 'The most recent PCF report document for the selected product(s).',
            why: 'Documentation validates assumptions, system boundaries, and emission factors used in calculations.',
        },
        {
            id: 'q13', num: 'QUESTION 13', title: 'Production Site', defaultOpen: false,
            what: 'The manufacturing or assembly location associated with each product or component.',
            why: 'Geographic location influences energy mix, regulatory context, and transport emissions, impacting overall carbon footprint results.',
        },
        {
            id: 'q14', num: 'QUESTION 14', title: 'Environmental Impact Method Required', defaultOpen: false,
            what: 'The specific environmental impact category or assessment method required for the product.',
            why: 'Different impact categories capture different environmental burdens beyond carbon, ensuring a comprehensive sustainability evaluation.',
        },
        {
            id: 'q15', num: 'QUESTION 15', title: 'Product / Component Details', defaultOpen: false,
            what: 'Detailed production data including weight, production period, unit, price, and volume for each product or component.',
            why: 'Production volume and weight data are critical inputs for calculating per-unit carbon intensity and scaling total lifecycle impacts.',
        },
        {
            id: 'q151', num: 'QUESTION 15.1', title: 'Co-Products Generated', defaultOpen: false,
            what: 'Whether the manufacturing process generates additional economically valuable co-products.',
            why: 'Co-products may require allocation of environmental burdens, affecting overall carbon footprint calculations.',
        },
        {
            id: 'q152', num: 'QUESTION 15.2', title: 'Co-Product Details', defaultOpen: false,
            what: 'Information about co-products including weight, quantity, and economic value.',
            why: 'Economic allocation methods depend on accurate co-product valuation to distribute emissions appropriately.',
        },
    ],

    section3: [
        {
            id: 'q16', num: 'QUESTION 16', title: 'Fuel Used for On-Site Energy Generation', defaultOpen: true,
            what: 'The type and total annual quantity of fuels used for on-site energy generation, including boilers, furnaces, generators, or other stationary combustion sources.',
            why: 'Fuel combustion is a primary source of direct greenhouse gas emissions. Accurate fuel consumption data enables precise calculation of Scope 1 emissions and supports identification of energy efficiency and decarbonization opportunities.',
        },
        {
            id: 'q17', num: 'QUESTION 17', title: 'Fuel Consumed by Company-Owned Vehicles', defaultOpen: false,
            what: 'The total annual fuel consumption from company-owned or controlled vehicles and mobile machinery.',
            why: 'Mobile combustion contributes directly to Scope 1 emissions. Tracking fleet fuel usage supports emission reduction strategies such as electrification or fuel efficiency improvements.',
        },
        {
            id: 'q18', num: 'QUESTION 18', title: 'Refrigerant Top-Ups or Leakage', defaultOpen: false,
            what: 'Whether refrigerants or industrial gases were replenished or leaked from air conditioning, refrigeration, or fire suppression systems during the reporting period.',
            why: 'Refrigerants often have high Global Warming Potential (GWP). Even small leaks can significantly increase direct emissions, making accurate reporting essential for carbon footprint integrity.',
        },
        {
            id: 'q19', num: 'QUESTION 19', title: 'Types and Quantities of Refrigerants Used', defaultOpen: false,
            what: 'The specific refrigerant types and total quantities used, replenished, or emitted during the reporting period.',
            why: 'Different refrigerants have different climate impacts. Identifying gas type and quantity allows precise calculation of CO₂-equivalent emissions.',
        },
        {
            id: 'q20', num: 'QUESTION 20', title: 'Industrial Process Emissions', defaultOpen: false,
            what: 'Whether your operations generate emissions from chemical reactions, material transformation, or manufacturing processes beyond fuel combustion.',
            why: 'Certain industrial processes emit greenhouse gases independently of energy use. Identifying these sources ensures complete Scope 1 accounting and avoids underreporting.',
        },
        {
            id: 'q21', num: 'QUESTION 21', title: 'Sources and Types of Gases Emitted', defaultOpen: false,
            what: 'The emission sources and types of greenhouse gases released from industrial processes, along with their total annual quantities.',
            why: 'Different gases (CO₂, CH₄, N₂O, etc.) have varying global warming impacts. Accurate source and gas-level data ensures precise emissions conversion into CO₂e and improves reporting transparency.',
        },
    ],

    section4: [
        {
            id: 'q22', num: 'QUESTION 22', title: 'Energy Purchased or Acquired', defaultOpen: true,
            what: 'The total quantity and type of energy purchased or acquired during the reporting period, including electricity, heating, steam, or cooling.',
            why: 'Purchased energy is a major contributor to indirect emissions. Accurate reporting ensures correct Scope 2 calculation and helps identify opportunities for renewable energy transition.',
        },
        {
            id: 'q23', num: 'QUESTION 23', title: 'Renewable Energy Certificates (RECs)', defaultOpen: false,
            what: 'Whether your organization acquires standardized renewable energy certificates or similar mechanisms to offset or claim renewable electricity use.',
            why: 'Renewable energy procurement affects market-based Scope 2 emissions calculations and demonstrates commitment to low-carbon energy sourcing.',
        },
        {
            id: 'q24', num: 'QUESTION 24', title: 'Renewable Certificate Details', defaultOpen: false,
            what: 'The details of renewable energy certificates obtained, including procurement mechanism, serial identification, generator information, and issuance data.',
            why: 'Certificate transparency ensures credibility of renewable claims and prevents double-counting within sustainability reporting.',
        },
        {
            id: 'q25', num: 'QUESTION 25', title: 'Energy Allocation Methodology', defaultOpen: false,
            what: 'Whether your organization has a defined method or device to allocate total factory-level energy consumption to individual products or components.',
            why: 'Product-level energy allocation improves the precision of Product Carbon Footprint (PCF) calculations by avoiding generalized or averaged assumptions.',
        },
        {
            id: 'q26', num: 'QUESTION 26', title: 'Detailed Methodology Documentation', defaultOpen: false,
            what: 'A documented explanation of the methodology used to calculate and allocate energy from facility level to product level.',
            why: 'Transparent methodology enhances auditability, ensures consistency in calculations, and strengthens data reliability.',
        },
        {
            id: 'q27', num: 'QUESTION 27', title: 'Energy Intensity per Product', defaultOpen: false,
            what: 'The estimated energy consumed per unit of product or component, expressed in kWh or MJ.',
            why: 'Energy intensity is a key performance indicator for operational efficiency and directly influences product-level emission calculations.',
        },
        {
            id: 'q28', num: 'QUESTION 28', title: 'Process-Specific Energy Usage', defaultOpen: false,
            what: 'The amount and type of energy consumed during specific manufacturing processes (e.g., injection molding, machining, curing) per product.',
            why: 'Process-level energy data improves accuracy in footprint allocation and identifies high-impact production stages for optimization.',
        },
        {
            id: 'q29', num: 'QUESTION 29', title: 'Use of Abatement Systems', defaultOpen: false,
            what: 'Whether emission control or abatement systems such as VOC treatment or heat recovery are used in your facility.',
            why: 'Abatement systems may reduce emissions but also consume energy. Including their energy demand ensures complete environmental accounting.',
        },
        {
            id: 'q30', num: 'QUESTION 30', title: 'Energy Consumption of Abatement Systems', defaultOpen: false,
            what: 'The total energy consumed by emission control or abatement systems during operation.',
            why: 'Capturing this energy use prevents underestimation of total facility emissions and supports transparent reporting.',
        },
        {
            id: 'q31', num: 'QUESTION 31', title: 'Water Consumption and Treatment', defaultOpen: false,
            what: 'Details of water sources, quantities consumed, and treatment processes associated with product manufacturing.',
            why: 'Water usage and treatment processes can influence indirect energy use and environmental impact assessments beyond carbon.',
        },
        {
            id: 'q32', num: 'QUESTION 32', title: 'Quality Control Equipment Used', defaultOpen: false,
            what: 'The types and quantities of testing or inspection equipment used in production.',
            why: 'Testing equipment consumes energy and resources that contribute to overall operational emissions and must be included in footprint calculations.',
        },
        {
            id: 'q33', num: 'QUESTION 33', title: 'Electricity Consumption for Quality Control', defaultOpen: false,
            what: 'The total electricity used specifically for quality control activities during the reporting period.',
            why: 'Separating quality control energy improves allocation accuracy at product level and strengthens PCF precision.',
        },
        {
            id: 'q34', num: 'QUESTION 34', title: 'Use of Utilities in Quality Control', defaultOpen: false,
            what: 'Whether utilities such as compressed air, nitrogen, or other gases are consumed during quality testing processes.',
            why: 'Utilities have embedded energy and emissions impacts that must be included in comprehensive product-level assessments.',
        },
        {
            id: 'q341', num: 'QUESTION 34.1', title: 'Pressure or Flow-Based Utilities', defaultOpen: false,
            what: 'Details of pressure-based or flow-based utility consumption used in inspection or testing processes.',
            why: 'Capturing these operational inputs improves completeness of indirect emission calculations and operational transparency.',
        },
        {
            id: 'q35', num: 'QUESTION 35', title: 'Consumables Used in Quality Control', defaultOpen: false,
            what: 'The type and quantity of consumable materials used during testing and validation activities.',
            why: 'Consumables contribute to material use and waste generation, impacting overall product carbon footprint results.',
        },
        {
            id: 'q36', num: 'QUESTION 36', title: 'Destructive Testing', defaultOpen: false,
            what: 'Whether products or components are destroyed during quality testing procedures.',
            why: 'Destructive testing increases material consumption and waste, influencing total environmental burden per unit produced.',
        },
        {
            id: 'q37', num: 'QUESTION 37', title: 'Weight of Destroyed Samples', defaultOpen: false,
            what: 'The total weight of materials destroyed during quality testing activities.',
            why: 'Quantifying destroyed material ensures accurate allocation of material loss and waste impacts in PCF calculations.',
        },
        {
            id: 'q38', num: 'QUESTION 38', title: 'Defect or Rejection Rate', defaultOpen: false,
            what: 'The percentage of products rejected during quality control inspections.',
            why: 'Rejected products require additional resources or disposal, increasing environmental intensity per finished unit.',
        },
        {
            id: 'q39', num: 'QUESTION 39', title: 'Rework Rate', defaultOpen: false,
            what: 'The percentage of products requiring rework and the associated processes involved.',
            why: 'Rework activities add extra energy and resource consumption beyond standard production, affecting product-level emissions.',
        },
        {
            id: 'q40', num: 'QUESTION 40', title: 'Quality Control Waste Generated', defaultOpen: false,
            what: 'The types and quantities of waste generated during quality control activities and their treatment methods.',
            why: 'Waste handling and disposal create additional emissions that must be included in cradle-to-gate impact calculations.',
        },
        {
            id: 'q41', num: 'QUESTION 41', title: 'IT Systems Used for Production Control', defaultOpen: false,
            what: 'The types of digital systems used for manufacturing or production management.',
            why: 'Digital systems consume energy and contribute to operational emissions within the production boundary.',
        },
        {
            id: 'q42', num: 'QUESTION 42', title: 'Energy Consumption of IT Hardware', defaultOpen: false,
            what: 'Whether energy consumption from on-site servers or IT infrastructure is tracked.',
            why: 'IT energy demand contributes to total facility electricity use and must be included in Scope 2 reporting.',
        },
        {
            id: 'q43', num: 'QUESTION 43', title: 'Inclusion in Total Purchased Energy', defaultOpen: false,
            what: 'Whether IT-related energy consumption has already been accounted for in total purchased energy reporting.',
            why: 'This prevents duplication or omission in energy accounting.',
        },
        {
            id: 'q44', num: 'QUESTION 44', title: 'IT Energy Consumption Details', defaultOpen: false,
            what: 'The total energy consumed by IT infrastructure supporting production.',
            why: 'Accurate tracking ensures comprehensive indirect emission reporting.',
        },
        {
            id: 'q45', num: 'QUESTION 45', title: 'Use of Cloud-Based Systems', defaultOpen: false,
            what: 'Whether cloud services are used to support production or quality control processes.',
            why: 'Cloud infrastructure contributes indirectly to emissions and should be considered in sustainability assessments.',
        },
        {
            id: 'q46', num: 'QUESTION 46', title: 'Cloud Usage Details', defaultOpen: false,
            what: 'The provider and approximate compute, storage, and data transfer usage.',
            why: 'Cloud usage estimation allows calculation of indirect digital infrastructure emissions.',
        },
        {
            id: 'q47', num: 'QUESTION 47', title: 'Dedicated Monitoring Sensors', defaultOpen: false,
            what: 'Details of monitoring sensors used for energy, temperature, pressure, or vibration tracking.',
            why: 'Sensor infrastructure adds incremental energy demand that contributes to total operational footprint.',
        },
        {
            id: 'q48', num: 'QUESTION 48', title: 'Replacement Rate for Sensors or IT Consumables', defaultOpen: false,
            what: 'The annual replacement quantity of IT-related hardware or consumables.',
            why: 'Recurring material replacement generates additional resource consumption and electronic waste.',
        },
        {
            id: 'q49', num: 'QUESTION 49', title: 'Cooling Systems for Server Rooms', defaultOpen: false,
            what: 'Whether dedicated cooling systems are used for IT or server rooms.',
            why: 'Cooling systems can significantly increase electricity consumption and must be accounted for.',
        },
        {
            id: 'q50', num: 'QUESTION 50', title: 'Inclusion of Cooling Energy in Section 2', defaultOpen: false,
            what: 'Whether cooling energy is already included in total purchased energy reporting.',
            why: 'Ensures energy data completeness without duplication.',
        },
        {
            id: 'q51', num: 'QUESTION 51', title: 'Cooling Energy Consumption', defaultOpen: false,
            what: 'The total energy consumed by cooling systems supporting IT infrastructure.',
            why: 'Cooling-related energy contributes directly to Scope 2 emissions and affects total carbon accounting.',
        },
    ],

    section5: [
        // ── 5.1 Materials Details ──
        { type: 'group', id: 'g51', label: '5.1 Materials Details' },
        {
            id: 'q52', num: 'QUESTION 52', title: 'Raw Materials Used in Component Manufacturing', defaultOpen: true,
            what: 'The types of raw materials used in each component and their percentage composition by weight.',
            why: 'Material composition is one of the most significant drivers of product carbon footprint. Accurate breakdown enables precise lifecycle emission calculation and material impact assessment.',
        },
        {
            id: 'q521', num: 'QUESTION 52.1', title: 'EnviGuide Support for Material Identification', defaultOpen: false,
            what: 'Whether assistance is required to estimate or identify detailed material composition.',
            why: 'Accurate material data ensures reliability of environmental calculations and avoids assumptions that could distort carbon footprint results.',
        },
        {
            id: 'q53', num: 'QUESTION 53', title: 'Grade of Metal Used', defaultOpen: false,
            what: 'The specific grade or specification of metal used in manufacturing the component.',
            why: 'Different metal grades have different compositions and embodied emissions. Precise grade identification improves the accuracy of emission factor application.',
        },
        {
            id: 'q54', num: 'QUESTION 54', title: 'Upload MSDS or Composition Breakdown', defaultOpen: false,
            what: 'Material Safety Data Sheets (MSDS) or detailed material composition documentation for the product.',
            why: 'Supporting documentation strengthens data transparency, enhances audit readiness, and ensures compliance with international carbon accounting standards.',
        },
        {
            id: 'q55', num: 'QUESTION 55', title: 'Use of Recycled or Secondary Materials', defaultOpen: false,
            what: 'Whether recycled or secondary materials are incorporated into your products.',
            why: 'Recycled content can significantly reduce embodied carbon and improve sustainability performance metrics.',
        },
        {
            id: 'q56', num: 'QUESTION 56', title: 'Percentage of Recycled Material Content', defaultOpen: false,
            what: 'The percentage of recycled material used within each product or component.',
            why: 'Quantifying recycled content enables more accurate emission reduction calculations and supports circular economy reporting.',
        },
        {
            id: 'q57', num: 'QUESTION 57', title: 'Knowledge of Pre-Consumer / Post-Consumer / Reused Materials', defaultOpen: false,
            what: 'Whether your organization can estimate the proportion of materials classified as pre-consumer, post-consumer, or reused.',
            why: 'Material origin affects lifecycle emissions and helps distinguish between different sustainability impacts.',
        },
        {
            id: 'q58', num: 'QUESTION 58', title: 'Percentage of Pre-Consumer / Post-Consumer / Reused Materials', defaultOpen: false,
            what: 'The specific percentage breakdown of materials by recovery type.',
            why: 'Granular classification improves carbon accounting accuracy and strengthens supply chain transparency.',
        },
        {
            id: 'q59', num: 'QUESTION 59', title: 'PIR and PCR Material Percentage', defaultOpen: false,
            what: 'The percentage of Post-Industrial Recycled (PIR) and Post-Consumer Recycled (PCR) materials used.',
            why: 'Differentiating PIR and PCR supports more refined environmental reporting and lifecycle modeling.',
        },

        // ── 5.2 Packaging Details ──
        { type: 'group', id: 'g52', label: '5.2 Packaging Details' },
        {
            id: 'q60', num: 'QUESTION 60', title: 'Packaging Materials Used', defaultOpen: false,
            what: 'The type, size, and treatment method of packaging materials used for product delivery.',
            why: 'Packaging contributes to material use and waste emissions within the product lifecycle and must be included in footprint calculations.',
        },
        {
            id: 'q61', num: 'QUESTION 61', title: 'Packaging Weight per Unit', defaultOpen: false,
            what: 'The approximate weight of packaging associated with each product unit.',
            why: 'Packaging weight directly influences material-related emissions and transportation impacts.',
        },
        {
            id: 'q62', num: 'QUESTION 62', title: 'Size of Packaging', defaultOpen: false,
            what: 'The dimensions or size of the packaging used for each product.',
            why: 'Packaging size affects transport efficiency and storage emissions.',
        },
        {
            id: 'q63', num: 'QUESTION 63', title: 'Use of Recycled Packaging Materials', defaultOpen: false,
            what: 'Whether recycled materials are used in packaging.',
            why: 'Recycled packaging lowers embodied carbon and supports circular supply chain practices.',
        },
        {
            id: 'q64', num: 'QUESTION 64', title: 'Percentage of Recycled Packaging Content', defaultOpen: false,
            what: 'The percentage of recycled content in packaging materials.',
            why: 'Quantifying recycled packaging improves emission reduction estimation accuracy.',
        },
        {
            id: 'q65', num: 'QUESTION 65', title: 'Electricity Use for Packaging', defaultOpen: false,
            what: 'Whether electricity is consumed specifically for packaging processes.',
            why: 'Packaging energy use contributes to total product-related emissions.',
        },
        {
            id: 'q66', num: 'QUESTION 66', title: 'Inclusion of Packaging Energy in Total Energy', defaultOpen: false,
            what: 'Whether packaging-related electricity consumption is already included in total purchased energy.',
            why: 'Ensures no duplication or omission in Scope 2 accounting.',
        },
        {
            id: 'q67', num: 'QUESTION 67', title: 'Packaging Energy Consumption Details', defaultOpen: false,
            what: 'The total energy consumed for packaging processes during the reporting period.',
            why: 'Accurate packaging energy data improves cradle-to-gate emission allocation.',
        },

        // ── 5.3 Disposal of Waste ──
        { type: 'group', id: 'g53', label: '5.3 Disposal of Waste' },
        {
            id: 'q68', num: 'QUESTION 68', title: 'Production and Packaging Waste Generated', defaultOpen: false,
            what: 'The types and quantities of waste generated from production and packaging, along with treatment methods.',
            why: 'Waste treatment processes (recycling, landfill, incineration) generate emissions that must be included in lifecycle assessment.',
        },
        {
            id: 'q69', num: 'QUESTION 69', title: 'Percentage of Scrap Recycled Internally or Externally', defaultOpen: false,
            what: 'The proportion of waste or scrap that is recycled either internally or externally.',
            why: 'Higher recycling rates reduce overall environmental impact and improve circular economy performance metrics.',
        },
        {
            id: 'q70', num: 'QUESTION 70', title: 'By-Products Generated', defaultOpen: false,
            what: 'Whether manufacturing processes generate additional by-products.',
            why: 'By-products may require allocation of environmental burdens or represent opportunities for impact reduction.',
        },
        {
            id: 'q71', num: 'QUESTION 71', title: 'By-Product Details', defaultOpen: false,
            what: 'The type, quantity, and economic value of by-products generated.',
            why: 'Proper allocation of emissions between primary products and by-products ensures fair and transparent carbon accounting.',
        },

        // ── 5.4 Logistics (Transportation) ──
        { type: 'group', id: 'g54', label: '5.4 Logistics (Transportation)' },
        {
            id: 'q72', num: 'QUESTION 72', title: 'Tracking Raw Material Transport Emissions', defaultOpen: false,
            what: 'Whether emissions from transporting raw materials to your facilities are monitored.',
            why: 'Upstream transportation can represent a significant Scope 3 emission source and must be included in full lifecycle accounting.',
        },
        {
            id: 'q73', num: 'QUESTION 73', title: 'Estimated CO₂ Emissions from Raw Material Transport', defaultOpen: false,
            what: 'The estimated emissions associated with transporting raw materials.',
            why: 'Transport-related emissions contribute to embodied carbon and influence overall product footprint results.',
        },
        {
            id: 'q74', num: 'QUESTION 74', title: 'Modes of Transport Used', defaultOpen: false,
            what: 'The transportation modes, distances, and weights associated with moving products or components.',
            why: 'Transport mode significantly impacts carbon intensity due to varying emission factors.',
        },
        {
            id: 'q741', num: 'QUESTION 74.1', title: 'EnviGuide Support for Transport Emissions', defaultOpen: false,
            what: 'Whether assistance is required to calculate transport-related emissions.',
            why: 'Accurate emission calculation improves Scope 3 completeness and reporting reliability.',
        },
        {
            id: 'q75', num: 'QUESTION 75', title: 'Destination Plant Location', defaultOpen: false,
            what: 'The final destination plant or facility to which components are transported.',
            why: 'Transport distance and geography directly influence logistics-related carbon emissions.',
        },

        // ── 5.5 Certifications & Standards ──
        { type: 'group', id: 'g55', label: '5.5 Certifications & Standards' },
        {
            id: 'q76', num: 'QUESTION 76', title: 'ISO 14001 / ISO 50001 Certification', defaultOpen: false,
            what: 'Whether your organization holds recognized environmental or energy management certifications.',
            why: 'Certifications demonstrate structured sustainability management and strengthen credibility of reported data.',
        },
        {
            id: 'q77', num: 'QUESTION 77', title: 'Use of Recognized PCF Standards', defaultOpen: false,
            what: 'Whether recognized standards are followed for PCF calculations.',
            why: 'Standardized methodologies ensure comparability, transparency, and global alignment.',
        },
        {
            id: 'q78', num: 'QUESTION 78', title: 'Reporting to Frameworks (CDP, SBTi, etc.)', defaultOpen: false,
            what: 'Whether your organization reports environmental data to recognized platforms.',
            why: 'Participation in frameworks indicates commitment to transparency and climate action.',
        },

        // ── 5.6 Additional Sustainability Notes ──
        { type: 'group', id: 'g56', label: '5.6 Additional Sustainability Notes' },
        {
            id: 'q79', num: 'QUESTION 79', title: 'Carbon Reduction Measures', defaultOpen: false,
            what: 'The initiatives implemented to reduce emissions within your production processes.',
            why: 'Understanding mitigation efforts provides context to performance data and highlights improvement trajectories.',
        },
        {
            id: 'q80', num: 'QUESTION 80', title: 'Renewable Energy or Recycling Programs', defaultOpen: false,
            what: 'Details of renewable energy adoption or recycling programs in place.',
            why: 'These initiatives directly influence emission reduction potential and sustainability maturity.',
        },
        {
            id: 'q81', num: 'QUESTION 81', title: 'Sustainability Strategies and Initiatives', defaultOpen: false,
            what: 'A summary of your broader sustainability policies and long-term environmental strategy.',
            why: 'Strategic alignment ensures that emission reductions are integrated into long-term operational planning.',
        },
    ],

    section6: [
        {
            id: 'q82', num: 'QUESTION 82', title: 'Product Impact – Emissions Avoided by Your Products or Services', defaultOpen: true,
            what: 'Whether your products or services help customers reduce greenhouse gas emissions, and if available, an estimate of emissions avoided per unit or annually.',
            why: 'Quantifying avoided emissions highlights the positive environmental value of your offerings and supports climate solution reporting. This provides a more complete sustainability picture beyond operational emissions.',
        },
        {
            id: 'q83', num: 'QUESTION 83', title: 'Circular Economy Practices', defaultOpen: false,
            what: 'Details of any recycling, reuse, refurbishment, take-back, or Extended Producer Responsibility (EPR) initiatives implemented within your business model.',
            why: 'Circular economy practices reduce resource extraction, minimize waste, and lower lifecycle emissions. Capturing these initiatives demonstrates material efficiency and long-term sustainability commitment.',
        },
        {
            id: 'q84', num: 'QUESTION 84', title: 'Renewable Energy or Carbon Offset Projects', defaultOpen: false,
            what: 'Information about renewable energy installations, carbon offset projects, or environmental restoration initiatives implemented or financed by your organization, including estimated emissions avoided annually.',
            why: 'Renewable and offset projects contribute to decarbonization beyond operational boundaries. Reporting these initiatives supports transparent climate action accounting and strengthens your environmental performance profile.',
        },
    ],
}

function AccordionItem({ q }) {
    const [open, setOpen] = useState(q.defaultOpen)

    return (
        <div className={`${styles.accordion} ${open ? styles.accordionOpen : ''}`}>
            <button className={styles.accordionHeader} onClick={() => setOpen(o => !o)}>
                <div className={styles.accordionLeft}>
                    <span className={styles.qNum}>{q.num}</span>
                    <span className={styles.qTitle}>{q.title}</span>
                </div>
                <svg
                    className={`${styles.chevron} ${open ? styles.chevronUp : ''}`}
                    width="18" height="18" viewBox="0 0 24 24" fill="none"
                >
                    <path d="M6 9l6 6 6-6" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {open && (
                <div className={styles.accordionBody}>
                    <div className={styles.accordionGrid}>
                        <div className={styles.accordionCol}>
                            <p className={styles.colLabel}>WHAT WE ARE ASKING</p>
                            <p className={styles.colText}>{q.what}</p>
                        </div>
                        <div className={styles.accordionDivider} />
                        <div className={styles.accordionCol}>
                            <p className={styles.colLabel}>WHY THIS MATTERS</p>
                            <p className={styles.colText}>{q.why}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default function SupplierQuestionnaire() {
    const navigate = useNavigate()
    const [activeSection, setActiveSection] = useState('section1')
    const [search, setSearch] = useState('')

    const activeSectionLabel = SECTIONS.find(s => s.id === activeSection)?.label ?? 'Section 1'
    const activeSectionDesc = SECTION_DESCS[activeSection] ?? null
    const activeQuestions = (QUESTIONS[activeSection] || []).filter(q =>
        q.type === 'group' ||
        search === '' ||
        q.title.toLowerCase().includes(search.toLowerCase()) ||
        q.what.toLowerCase().includes(search.toLowerCase()) ||
        q.why.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className={styles.page}>


            {/* ── Body ── */}
            <div className={styles.body}>

                {/* ── Left Sidebar ── */}
                <aside className={styles.sidebar}>
                    <p className={styles.sidebarLabel}>QUESTIONNAIRE SECTIONS</p>
                    <nav className={styles.sidebarNav}>
                        {SECTIONS.map(s => (
                            <button
                                key={s.id}
                                className={`${styles.sidebarItem} ${activeSection === s.id ? styles.sidebarItemActive : ''}`}
                                onClick={() => setActiveSection(s.id)}
                            >
                                <span className={styles.sidebarIcon}>{s.icon}</span>
                                {s.label}
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* ── Main Content ── */}
                <main className={styles.main}>

                    {/* Breadcrumb */}
                    <div className={styles.breadcrumb}>
                        <button className={styles.breadcrumbLink} onClick={() => navigate('/help-centre')}>Help Center</button>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18l6-6-6-6" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className={styles.breadcrumbCurrent}>Supplier Questionnaire</span>
                    </div>

                    {/* Page Title Row */}
                    <div className={styles.titleRow}>
                        <div>
                            <h1 className={styles.pageTitle}>Supplier Questionnaire</h1>
                            <p className={styles.pageSub}>
                                Provide structured environmental, product, and sustainability data to help track and improve our shared impact.
                            </p>
                        </div>
                        <div className={styles.searchBox}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                                <circle cx="11" cy="11" r="8" stroke="#9ca3af" strokeWidth="2" />
                                <path d="M21 21l-4.35-4.35" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <input
                                className={styles.searchInput}
                                placeholder="Search guidance topics..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Section Title */}
                    <div className={styles.sectionTitle}>
                        <div className={styles.sectionBar} />
                        <h2 className={styles.sectionHeading}>{activeSectionLabel}</h2>
                    </div>

                    {/* Section Description Banner (Scope 4 intro etc.) */}
                    {activeSectionDesc && (
                        <div className={styles.sectionBanner}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className={styles.sectionBannerText}>{activeSectionDesc}</p>
                        </div>
                    )}

                    {/* Accordion Questions */}
                    <div className={styles.questionList}>
                        {activeQuestions.length > 0 ? (
                            activeQuestions.map(q =>
                                q.type === 'group' ? (
                                    <div key={q.id} className={styles.groupHeader}>
                                        <span className={styles.groupLabel}>{q.label}</span>
                                        <div className={styles.groupLine} />
                                    </div>
                                ) : (
                                    <AccordionItem key={q.id} q={q} />
                                )
                            )
                        ) : (
                            <div className={styles.emptyState}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 12h6M9 16h6M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className={styles.emptyTitle}>
                                    {search ? 'No questions match your search.' : 'Content for this section is coming soon.'}
                                </p>
                                <p className={styles.emptyDesc}>
                                    {search ? 'Try a different keyword.' : 'Check back shortly for the full question set.'}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Guidance Note */}
                    <div className={styles.guidanceNote}>
                        <div className={styles.guidanceIcon}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="2" />
                                <path d="M12 16v-4M12 8h.01" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div>
                            <span className={styles.guidanceLabel}>Guidance Notes</span>
                            <p className={styles.guidanceText}>
                                This guidance page is updated quarterly based on the latest GHG Protocol and IFRS S2 standards. Last updated: Feb 2026.
                            </p>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    )
}
