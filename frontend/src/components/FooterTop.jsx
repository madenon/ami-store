
const FooterTop = () => {
    const incentives = [
      {
        name: "Livraison  à vos frais  ou sur les points relais",
        imageSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNrf6RZoy8fyGCO5vC63A0J5zhLqb29cG0Vg&s",
        description:
          "Ce n'est pas vraiment gratuit, nous le facturons simplement dans les produits. Un service de nos partenaire vous offre cela.",
      },
      {
        name: "garantie sur une période bien definie ",
        imageSrc:
          "https://static.vecteezy.com/ti/vecteur-libre/p1/15360479-concept-d-assurance-de-livraison-de-fret-colis-colis-transport-protection-couverture-garantie-soins-boites-en-carton-avec-bouclier-de-garde-de-service-de-messagerie-logistique-illustration-eps-d-expedition-sure-vectoriel.jpg",
        description:
          "En cas d'anomalie services se charges de prendre en charge selon les conditions de ventes",
      },
      {
        name: "Exchanges",
        imageSrc:
          "https://www.healthystep.co.uk/wp-content/uploads/2020/06/Exchange.png",
        description:
          "En cas d'échange de produit après  livraison les conditions sont à  vérifier avant de retourner un produit déjà livré.",
      },
    ];
    return (
      <div className="py-0">
        <div className="rounded-2xl  px-6 py-16 sm:p-16">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight ">
                Nous bâtissons notre entreprise afin de faciliter le contact entre vendeurs et acheteurs pour tout type de commerces
              </h2>
            </div>
          </div>
          <div
            className="mx-auto mt-1 grid max-w-sm grid-cols-1
           gap-8 sm:max-w-none lg:grid-cols-3"
          >
            {incentives.map((item) => (
              <div
                key={item?.name}
                className="text-center sm:flex sm:text-left lg:block lg:text-center"
              >
                <div className="sm:flex-shrink-0">
                  <div className="flex-root">
                    <img
                      src={item?.imageSrc}
                      alt="image"
                      className="mx-auto h-24 w-24 items-center justify-center text-center  shadow rounded-full"
                    />
                  </div>
                </div>
                <div className="mt-3 sm:ml-6 lg:ml-0">
                  <h3 className="text-base
                   font-medium  ">{item?.name}</h3>
                  <p className="mt-2 text-sm ">{item?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default FooterTop;
  