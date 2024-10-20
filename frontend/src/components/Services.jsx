 

const Services = () => {
    const services = [
      {
        id: 1,
        url:"/iftar.jpeg.jpeg",
        title: "Iftar dinners",
      },
      {
        id: 2,
        url:"/zakah.jpeg.jpeg",
        title: " Encourage charitable giving ",
      },
      {
        id: 3,
        url: "/feast.jpeg.jpeg",
        title: "Community feasts ",
      },
      {
        id: 4,
        url:"/zak.jpeg.jpeg",
        title: "Zakat and Sadaqa campaigns",
      },
      {
        id: 5,
        url:"/eid.jpeg.jpeg",
        title: " Eid gatherings and celebrations",
      },
      {
        id: 6,
        url: "/online quran.jpeg.jpeg",
        title: " Online Quran recitation"
      },
    ];
    return (
      <>
        <div className="services container">
          <h2>OUR SERVICES</h2>
          <div className="banner">
            {services.map((element) => {
              return (
                <div className="item" key={element.id}>
                  <h3>{element.title}</h3>
                  <img src={element.url} alt={element.title} />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  
  export default Services;
  