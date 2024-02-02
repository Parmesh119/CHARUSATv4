import conferenceOnEthicsReviewInHealthResearch from '../../files/event/Conference on Ethics Review in Health Research.pdf'
import certifcateCourseOnRProgrammingForBeginners from '../../files/event/Brochure_RProgramming.pdf'
const subTitle = "Don’t Miss the Day";
const title = "Announcements";
const desc = "";

const eventListOne = [
 
  {
    imgUrl: "assets/images/Foundation_Day.jpg",
    imgAlt: "24th Foundation Day Celebrations",
    Date: "03",
    MonthYear: "FEB 2024",
    link: "https://www.youtube.com/watch?v=9TB7wn-ciCQ&ab_channel=CHARUSAT",
    openInNewTab: true,
    title:
      "24th Foundation Day Celebrations",
    Time: "",
    Place: " CHARUSAT",
  },
];

const eventListTwo = [
  {
    Date: "22",
    MonthYear: "JAN 2024",
    link: "assets/images/MTIN_Clinical_Instructor_Interview_2024.jpg",
    openInNewTab: true,
    title:
      "Walk-in-interview for the Clinical Instructor",
    Time: "",
    Place: " CHARUSAT",
  },
 
];

const Event = () => {
  return (
    <div className="event-section  padding-tb ">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
          <p className="desc">{desc}</p>
        </div>
        <div className="section-wrapper">
          <div className="row row-cols-lg-2 row-cols-1 g-4">
            {eventListOne.map((val, i) => (
              <div className="col" key={i}>
                <div className="event-left">
                  <div className="event-item">
                    <div className="event-inner">
                      <div className="event-thumb">
                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} data-aos="fade-right"/>
                      </div>
                      <div className="event-content" data-aos="fade-right"  data-aos-duration="3000">
                        <div className="event-date-info">
                          <div className="edi-box">
                            <h4>{val.Date}</h4>
                            <p>{val.MonthYear}</p>
                          </div>
                        </div>
                        <div className="event-content-info">
                          <a href={val.link} target='_blank'>
                            <h3>{val.title}</h3>
                          </a>
                          <ul className="lab-ul">
                            {val.Time ? (
                              <li>
                                <i className="icofont-clock-time"></i>
                                {val.Time}
                              </li>
                            ) : (
                              <span></span>
                            )}

                            {val.Place ? (
                              <li>
                                <i className="icofont-google-map"></i>
                                {val.Place}
                              </li>
                            ) : (
                              <span></span>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col">
              <div className="event-right">
                {eventListTwo.map((val, i) => (
                  <div className="event-item" key={i}>
                    <div className="event-inner">
                      <div className="event-content" data-aos="fade-left">
                        <div className="event-date-info">
                          <div className="edi-box">
                            <h4>{val.Date}</h4>
                            <p>{val.MonthYear}</p>
                          </div>
                        </div>
                        <div className="event-content-info">
                          <a href={val.link}>
                            <h5>{val.title}</h5>
                          </a>
                          <ul className="lab-ul">
                            {val.Time ? (
                              <li>
                                <i className="icofont-clock-time"></i>
                                {val.Time}
                              </li>
                            ) : (
                              <span></span>
                            )}

                            {val.Place ? (
                              <li>
                                <i className="icofont-google-map"></i>
                                {val.Place}
                              </li>
                            ) : (
                              <span></span>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
