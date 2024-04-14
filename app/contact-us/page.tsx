import { Custombreadcrumb } from "@/components/bread-crumb";
import ContactUsForm from "@/components/contact-us-form";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

import { CommonQuestions, CommonQuestion } from "@/bin/common-questions";

function ContactUsPage() {
  return (
    <div className=" h-auto lg:mx-32 md:mx-16 mx-8 py-12">
      <Custombreadcrumb title_1="Fale conosco" href_1="/contact-us" />
      <div className="sm:flex  justify-between md:mr-24">
        <div className="mt-8 space-y-6">
          <div className="text font-medium">FALE CONOSCO</div>
          <div className=" lg:text-6xl lg:leading-snug md:text-5xl font-semibold leading-snug sm:text-3xl">
            Como podemos te <br /> ajudar?
          </div>
          <div className=" text-xl font-medium text-[#514D4D]">
            Se tem alguma dúvida, crítica, sugestão ou <br /> parceria, entre em
            contato.
          </div>
          <div className="flex space-x-4 justify-center sm:justify-start">
            <ContactUsForm />
          </div>
        </div>
        <div className="py-36 sm:mt-0">
          <Image
            src="/images/contact-us.png"
            alt="About Us"
            width={650}
            height={650}
          />
        </div>
      </div>

      <Separator className=" my-12" />

      <div className=" flex flex-col justify-center text-center space-y-4">
        <div className=" font-semibold text-3xl mb-3">Perguntas frequentes</div>
        <div className=" text-xl text-[#514D4D]">
          Principais perguntas que podem te ajudar a sanar sua dúvida <br />{" "}
          sobre as promoções no Eu Amo Desconto
        </div>
      </div>
      <div className="grid lg:mx-32 grid-cols-1 lg:grid-cols-2 gap-16 mt-10 mb-16">
        {CommonQuestions.map((question: CommonQuestion) => {
          const CommonQuestionComponent = () => (
            <div key={question.id} className="flex">
              <div className="pt-1 mr-5">
                <Image
                  src="/icons/red-arrow.svg"
                  alt="About Us"
                  width={20}
                  height={20}
                />
              </div>
              <div>
                <h2 className="text-lg font-bold mb-2">{question.title}</h2>
                <p className="text-[#514D4D]">{question.content}</p>
              </div>
            </div>
          );
          CommonQuestionComponent.displayName = `CommonQuestionComponent${question.id}`;
          return <CommonQuestionComponent key={question.id} />;
        })}
      </div>
    </div>
  );
}

export default ContactUsPage;
