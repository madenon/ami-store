import React, { useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { IoIosArrowDown } from "react-icons/io";

const About = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show41, setShow41] = useState(false);
  return (
    <div>
      <div className="bg-white p-2 px-4 flex justify-between items-center mt-16">
        <Title text1={"A props de"} text2={"Nous"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <div className="flex flex-col shadow-sm justify-center gap-6 md:w-2/4 text-gray-600 bg-transparent">
          <div className="flex justify-between items-center text-center gap-5">
            <p className="text-2xl text-gray-700">Tout savoir sur notre mission</p>
            <IoIosArrowDown
              className="text-2xl"
              onClick={() => setShow(!show)}
            />
          </div>
          <div className=" flex justify-between w-full gap-5">
            {show ? (
              <span>
                Chez EcoTech Innov, notre mission est de transformer le paysage
                technologique et énergétique en Afrique de l'Ouest. Nous nous
                engageons à offrir des solutions innovantes dans les domaines
                des NTIC et des énergies renouvelables, en répondant aux besoins
                spécifiques de nos clients, qu'ils soient particuliers,
                entreprises ou institutions. Notre objectif est d’allier
                performance, durabilité et accessibilité pour un impact positif
                et durable.
              </span>
            ) : (
              ""
            )}
          </div>

          <div className="flex justify-between items-center text-center gap-5">
            <p className="text-2xl text-gray-700">Tout savoir sur les conditions de retour de commande </p>
            <IoIosArrowDown
              className="text-2xl"
              onClick={() => setShow1(!show1)}
            />
          </div>
          <div className=" flex justify-between w-full gap-5">
            {show1 ? (
              <span>
                Nous nous engageons à vous offrir des produits de qualité.
                Cependant, si vous n'êtes pas satisfait de votre commande, nous
                acceptons les retours dans un délai de 14 jours suivant la
                réception. Les produits doivent être en parfait état, dans leur
                emballage d'origine et accompagnés de la facture. Pour toute
                question concernant les retours, n'hésitez pas à contacter notre
                service client.
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-between items-center text-center gap-5">
            <p className="text-2xl text-gray-700">Tout savoir sur l'échange d'un colis après livraison </p>
            <IoIosArrowDown
              className="text-2xl"
              onClick={() => setShow2(!show2)}
            />
          </div>
          <div className=" flex justify-between w-full gap-5">
            {show2 ? (
              <span>
                En cas de problème avec un produit livré (défectueux, erreur de
                commande, etc.), vous avez la possibilité de demander un
                échange. Nous vous invitons à nous signaler tout incident dans
                un délai de 7 jours suivant la réception du colis. Notre équipe
                se chargera de traiter votre demande dans les plus brefs
                délais..
              </span>
            ) : (
              ""
            )}
          </div>
          {/* gggg */}

          <div className="flex justify-between items-center text-center gap-5">
            <p className="text-2xl text-gray-700">Tout savoir sur l'annulation de commande</p>
            <IoIosArrowDown
              className="text-2xl"
              onClick={() => setShow3(!show3)}
            />
          </div>
          <div className=" flex justify-between w-full gap-5">
            {show3 ? (
              <span>
                Vous pouvez annuler votre commande avant son expédition. Une
                fois la commande expédiée, l'annulation n’est plus possible,
                mais vous pouvez initier une procédure de retour après
                réception. Pour annuler une commande, contactez notre service
                client en mentionnant votre numéro de commande.
              </span>
            ) : (
              ""
            )}
          </div>
          {/* Tout savoir sur les paimenets a plusieurs fois */}
          <div className="flex justify-between items-center text-center gap-5 ">
            <p className="text-2xl text-gray-700">Tout savoir sur les payements échelonner</p>
            <IoIosArrowDown
              className="text-2xl"
              onClick={() => setShow41(!show41)}
            />
          </div>
          <div className=" flex justify-between w-full gap-5">
            {show41 ? (
              <span>
                Chez EcoTech Innov, nous proposons des solutions de paiement
                échelonné pour rendre nos produits et services accessibles à
                tous. Nos plans de financement sont simples et flexibles, avec
                des échéances adaptées à vos besoins. Pour en savoir plus,
                consultez nos conditions de paiement ou contactez notre équipe
                pour une assistance personnalisée..
              </span>
            ) : (
              ""
            )}
          </div>
        </div>

        <img
          className="max-h-96  max-w-[400px] right-0 top-0 left-0 bottom-0 rounded-full shadow-sm border border-neutral-400"
          src={assets.about_img}
          alt=""
        />
      </div>

      <div className="text-xl py-4">
        <Title text1={"Pourquoi"} text2={"Nous Choissir"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 ">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b className=" font-extrabold uppercase">Assurance qualité :</b>
          <p className=" text-gray-600 text-lg">
            L'assurance qualité, généralement abrégée QA, est le processus qui
            consiste à vérifier que les services ou produits d'une organisation
            répondent aux normes de qualité souhaitées et attendues.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className=" font-extrabold uppercase">
            Avantage de notre service :
          </b>
          <p className=" text-gray-600 text-lg">
            Avec notre interface conviviale et notre processus de commande sans
            tracas consiste à vérifier que les services ou produits d'une
            organisation répondent aux normes de qualité souhaitées et
            attendues.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className=" font-extrabold uppercase">
            Service client exceptionnel :
          </b>
          <p className=" text-gray-600 text-lg">
            Avec notre interface conviviale et notre processus de commande sans
            tracas consiste à vérifier que les services ou produits d'une
            organisation répondent aux normes de qualité souhaitées et
            attendues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
