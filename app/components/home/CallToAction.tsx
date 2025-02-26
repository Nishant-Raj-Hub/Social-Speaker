const CallToAction = () => {
    return (
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-8 items-center py-8 px-4 sm:py-16 lg:px-6 xl:gap-16">
          {/* Light Mode Image */}
          <img
            className="w-full dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            alt="Light mode dashboard mockup"
          />
          {/* Dark Mode Image */}
          <img
            className="w-full hidden dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="Dark mode dashboard mockup"
          />
          
          {/* Text Content */}
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Ready to unleash your untapped potential, craft a compelling personality, and transform your life?

            </h2>
            <p>Book a Consultation: Schedule a free consultation to discuss your goals and how Rocky can help you achieve them.
            </p>
            <p>Explore Coaching Programs: Learn more about Rocky's personalized coaching programs, including the personality makeover program, and find the one that's right for you.
            </p>
            <p>Join the Community: Connect with like-minded individuals and become part of a thriving community of personal growth.
            </p>
            <p className="mb-6 text-gray-500 font-light md:text-lg dark:text-gray-400">
              Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your 
              friends and family as well as discovering new ones is easy with features like Groups.
            </p>
  
            {/* Call to Action Button */}
            <a
              href="#"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default CallToAction;
  