const Partenaire = () => {
    const incentives = [
      {
        name: "Partenaire de ventes et de collaboration de'echanges de produits",
        imageSrc:
          "https://upload.wikimedia.org/wikipedia/commons/0/06/Amazon_2024.svg",
        description: "Nous d'echanges de produits",
      },
      {
        name: "Partenariat de vente bussiness ",
        imageSrc:
          "https://www.african-markets.com/images/markets/brvm/orange_ci-2.jpg",
        description: "Notre partenariat avec les grandes entreprise de rendeurs",
      },
      {
        name: "Partenariat de formations",
        imageSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrWxbL29AQmKlaiNpwRrkakeJvLT3h321Sqw&s",
        description:
          "Nous sommes en partenaire , vous aurez la possibilité  de suivre une formation soit en Informatique ou Anglais ou Marketing",
      },
    ];
    return (
      <div className="py-0">
        <div className="rounded-2xl px-6 py-16 sm:p-16">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-14">
                Nos partenaires
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
                      className="mx-auto bg-white h-24 w-24 items-center justify-center text-center  shadow rounded-full"
                    />
                  </div>
                </div>
                <div className="mt-3 sm:ml-6 lg:ml-0">
                  <h3
                    className="text-base
                     font-medium  "
                  >
                    {item?.name}
                  </h3>
                  <p className="mt-2 text-sm ">
                    {item?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Partenaire;
  