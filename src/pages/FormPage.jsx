import React from "react";
import { Link } from "react-router-dom";

const FormsPage = () => {
  return (
    <section className="body-container pt-5">
      <div className="container">
        <div className="row">
          <div className="col-9 form-container">
            <h1 className="fw-bold ps-3 pb-2">Forms / Information</h1>

            <div className="form-lists">
              <div className="form-list-inner">
                <div className="d-flex-column">
                  <p className="text-muted mb-0">29 Sep</p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://nea.org.np/admin/assets/uploads/supportive_docs/Sahamati Form.pdf"
                  >
                    Download
                  </a>
                </div>

                <div className="d-flex-column">
                  <p className="fw-bold form-title">सहमती फारम</p>
                </div>
              </div>
              <i className="fa-solid fa-file-pdf fa-2x" style={{ color: "#e01b24" }} aria-hidden="true"></i>
            </div>

            <div className="form-lists">
              <div className="form-list-inner">
                <div className="d-flex-column">
                  <p className="text-muted mb-0">21 Sep</p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://nea.org.np/admin/assets/uploads/supportive_docs/New Application form Final.pdf"
                  >
                    Download
                  </a>
                </div>

                <div className="d-flex-column">
                  <p className="fw-bold form-title">नयाँ ग्राहक आबेदन फारम</p>
                </div>
              </div>
              <i className="fa-solid fa-file-pdf fa-2x" style={{ color: "#e01b24" }} aria-hidden="true"></i>
            </div>

            <div className="form-lists">
              <div className="form-list-inner">
                <div className="d-flex-column">
                  <p className="text-muted mb-0">26 Mar</p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://nea.org.np/admin/assets/uploads/supportive_docs/Information-about-medical-insurance.pdf"
                  >
                    Download
                  </a>
                </div>

                <div className="d-flex-column">
                  <p className="fw-bold form-title">Information about medical insurance</p>
                </div>
              </div>
              <i className="fa-solid fa-file-pdf fa-2x" style={{ color: "#e01b24" }} aria-hidden="true"></i>
            </div>

            <div className="form-lists">
              <div className="form-list-inner">
                <div className="d-flex-column">
                  <p className="text-muted mb-0">07 Dec</p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://nea.org.np/admin/assets/uploads/supportive_docs/68619474.pdf"
                  >
                    Download
                  </a>
                </div>

                <div className="d-flex-column">
                  <p className="fw-bold form-title">Matured Life insurance refund demand application</p>
                </div>
              </div>
              <i className="fa-solid fa-file-pdf fa-2x" style={{ color: "#e01b24" }} aria-hidden="true"></i>
            </div>

            <div className="form-lists">
              <div className="form-list-inner">
                <div className="d-flex-column">
                  <p className="text-muted mb-0">26 Mar</p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://nea.org.np/admin/assets/uploads/supportive_docs/Pariwarik-bibaran.pdf"
                  >
                    Download
                  </a>
                </div>

                <div className="d-flex-column">
                  <p className="fw-bold form-title">पारिवारिक बिबरण</p>
                </div>
              </div>
              <i className="fa-solid fa-file-pdf fa-2x" style={{ color: "#e01b24" }} aria-hidden="true"></i>
            </div>

            <nav className="d-flex justify-items-center justify-content-between">
              <div className="d-flex justify-content-between flex-fill d-sm-none">
                <ul className="pagination">
                  <li className="page-item disabled" aria-disabled="true">
                    <span className="page-link">« Previous</span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="http://intranet.nea.org.np/forms?page=2" rel="next">Next »</a>
                  </li>
                </ul>
              </div>

              <div className="d-none flex-sm-fill d-sm-flex align-items-sm-center justify-content-sm-between">
                <div>
                  <p className="small text-muted">
                    Showing
                    <span className="fw-semibold">1</span>
                    to
                    <span className="fw-semibold">5</span>
                    of
                    <span className="fw-semibold">23</span>
                    results
                  </p>
                </div>

                <div>
                  <ul className="pagination">
                    <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                      <span className="page-link" aria-hidden="true">‹</span>
                    </li>
                    <li className="page-item active" aria-current="page">
                      <span className="page-link">1</span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="http://intranet.nea.org.np/forms?page=2">2</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="http://intranet.nea.org.np/forms?page=3">3</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="http://intranet.nea.org.np/forms?page=4">4</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="http://intranet.nea.org.np/forms?page=5">5</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="http://intranet.nea.org.np/forms?page=2" rel="next" aria-label="Next »">›</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>

          <div className="col-3">
            <h1>Quick Links</h1>
            <div className="sidebar">
              <ul className="list-unstyled">
                <li>
                  <a className="nav-link" href="http://intranet.nea.org.np/forms">
                    Forms / Information
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="http://intranet.nea.org.np/publications">
                    Publications / Reports
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="http://intranet.nea.org.np/acts">
                    Acts / Regulations
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="http://intranet.nea.org.np/pressreleases">
                    Press Releases
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormsPage;
