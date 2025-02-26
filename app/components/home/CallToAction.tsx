import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-br from-red-700 via-slate-600 to-slate-800">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-8 items-center py-8 px-4 sm:py-16 lg:px-6 xl:gap-16">
        {/* Light Mode Image */}
        {/* <img
          className="w-full dark:hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          alt="Light mode dashboard mockup"
        /> */}
        {/* Dark Mode Image */}
        <img
          className="w-full "
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
          alt="Dark mode dashboard mockup"
        />

        {/* Text Content */}
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl font-extrabold bg-gradient-to-b leading-7 from-red-600 to-red-300 text-transparent bg-clip-text">
            Ready to unleash your untapped potential, craft a compelling
            personality, and transform your life?
          </h2>
          <p className="text-white">
            Book a Consultation: Schedule a free consultation to discuss your
            goals and how Rocky can help you achieve them.
          </p>
          <p className="text-white">
            Explore Coaching Programs: Learn more about Rocky&apos;s personalized
            coaching programs, including the personality makeover program, and
            find the one that&apos;s right for you.
          </p>
          <p className="text-white">
            Join the Community: Connect with like-minded individuals and become
            part of a thriving community of personal growth.
          </p>
          <p className="text-white">
            Flowbite helps you connect with friends and communities of people
            who share your interests. Connecting with your friends and family as
            well as discovering new ones is easy with features like Groups.
          </p>

          {/* Call to Action Button */}
          <a
            href="#"
            className="inline-flex mt-2 items-center px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-red-400 to-red-700 rounded-lg hover:from-red-600 hover:to-red-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
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

      {/* form */}
      <div className="bg-gradient-to-br from-purple-900 via-red-900 to-purple-900 p-12 md:p-16 lg:p-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <Card className="border-none bg-black/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
                  Talk to Our Team!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <Input
                    className="border-white/10 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-red-400"
                    placeholder="Name*"
                    type="text"
                  />
                  <Input
                    className="border-white/10 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-red-400"
                    placeholder="Email*"
                    type="email"
                  />
                  <Input
                    className="border-white/10 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-red-400"
                    placeholder="Phone Number*"
                    type="tel"
                  />
                  <Textarea
                    className="min-h-[120px] border-white/10 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-red-400"
                    placeholder="How can We Best Assist You?*"
                  />
                  <Button className="bg-gradient-to-r from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-800">
                    REACH US NOW
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="relative hidden overflow-hidden rounded-2xl lg:block">
              <Image
                src="/assets/rocky-saaggo.jpg"
                alt="Rocky Saggoo"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
