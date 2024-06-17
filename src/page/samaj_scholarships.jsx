import { Fragment } from "react";
import { Link } from "react-router-dom";


import "../assets/css/EOC.css";


const SamajGosthi = () => {
    const pdfData = [
        { Title: 'Notice 2023-24', link: 'assets/files/samaj_scholarship/Notice_2023-24.pdf' },
        { Title: 'Application Form', link: 'assets/files/samaj_scholarship/Application_Form.pdf' },
      ];
  return (
      <Fragment>
    {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}
    <div className="blog-section padding-tb section-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <article>
              <div className="section-wrapper">
                <div className="row row-cols-1 justify-content-center g-4">
                  <div className="col">
                    <div className="post-item style-2">
                      <div className="post-inner">
                        <div className="post-content">
                          <h3>Samaj Scholarships</h3>
                          <br />
                          {/* <div className="meta-post" >
                            
                              <a className="pdfLink" target="_blank" href="assets\files\samajgosthi\December_2022.pdf">December 2022<i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                              <br />
                              <a className="pdfLink" target="_blank" href="assets\files\samajgosthi\November_2022.pdf">November 2022<i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                              <br />
                              <a className="pdfLink" target="_blank" href="assets\files\samajgosthi\October_2022.pdf">October 2022<i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                              <br />
                              <a className="pdfLink" target="_blank" href="assets\files\samajgosthi\September_2022.pdf">September 2022<i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                              <br />                           
                              <a className="pdfLink" target="_blank" href="assets\files\samajgosthi\July_2022.pdf">July 2022 <i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                              <br />                           
                              <a className="pdfLink" target="_blank" href="assets\files\samajgosthi\June_2022.pdf">June 2022 <i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                              <br />                           
                              <a className="pdfLink" target="_blank" href="assets\files\samajgosthi\April_2022.pdf">April 2022 <i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                              <br />                           
                          </div> */}

  

 
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>PDF Link</th>
          </tr>
        </thead>
        <tbody>
          {pdfData.map((item, index) => (
            <tr key={index}>
              <td>{item.Title}</td>
              <td>
                <a className="pdfLink" target="_blank" href={item.link}>
                <i className="icofont-file-pdf" style={{ fontSize: "22px", color: "red" }}></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
                          {/* <Link to="/blog-single" className="lab-btn"><span>Operator's Detail <i className="icofont-external-link"></i></span></Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
  );
}

export default SamajGosthi;
