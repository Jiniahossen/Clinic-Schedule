const FaqSection = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center">

            <div className="flex-1">
                <img src="https://i.ibb.co/Fn6099m/269.jpg" alt="" />
            </div>
            <div className="flex-1">
                <div className="collapse collapse-plus bg-base-200 mb-6">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How can patients prepare for diagnostic tests at a diagnostic center?
                    </div>
                    <div className="collapse-content">
                        <p> Patients can prepare for diagnostic tests by following any pre-test instructions provided by the diagnostic center, such as fasting requirements or medication adjustments. Its essential to communicate any relevant medical history or concerns with the healthcare professionals at the center to ensure accurate and personalized testing.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200 mb-6">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        What range of diagnostic services can patients expect from a modern diagnostic center?
                    </div>
                    <div className="collapse-content">
                        <p>Modern diagnostic centers offer a comprehensive range of services, including medical imaging (X-rays, MRIs, CT scans), laboratory tests (blood tests, urine tests), cardiac diagnostics (ECGs), and specialized screenings. This diverse set of services allows for a thorough assessment of patients health conditions.</p>
                    </div>
                </div>
                

                <div className="collapse collapse-plus bg-base-200 mb-6">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How can patients access and manage their health information from diagnostic center services?
                    </div>
                    <div className="collapse-content">
                        <p> Many diagnostic centers have user-friendly online portals where patients can access their health information, including test results and reports. These portals often allow patients to track their health history, schedule appointments, and communicate securely with healthcare professionals, promoting active participation in their healthcare journey.</p>
                    </div>
                </div>
                
                <div className="collapse collapse-plus bg-base-200 mb-6">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How can patients access and manage their health information from diagnostic center services?
                    </div>
                    <div className="collapse-content">
                        <p> Many diagnostic centers have user-friendly online portals where patients can access their health information, including test results and reports. These portals often allow patients to track their health history, schedule appointments, and communicate securely with healthcare professionals, promoting active participation in their healthcare journey.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FaqSection;