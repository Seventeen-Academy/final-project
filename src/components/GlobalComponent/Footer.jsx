import {
  GithubIcon,
  InstagramIcon,
  LogoWhiteIcon,
  YoutubeIcon,
} from "../../assets/icons";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container mt-5 pt-5 pb-2">
          <div className="row">
            <div className="col-md-5">
              <img src={LogoWhiteIcon} />
              <h4 className="tag mt-3">
                Website interaktif, <br />
                Belajar lebih menyenangkan
              </h4>
            </div>
            <div className="col-md-2 col footer-list">
              <strong>Layanan Kami</strong>
              <ul>
                <li>Tentanng Kami</li>
                <li>Privacy & Policy</li>
                <li>Kontak Kami</li>
              </ul>
            </div>
            <div className="col-md-2 col footer-list">
              <strong>Product Kami</strong>
              <ul>
                <li>Kelas Online</li>
                <li>
                  <a href="#">Artikel</a>
                </li>
                <li>Permainan</li>
              </ul>
            </div>
            <div className="col-md-3 col-xs-6 footer-list">
              <strong>Sosial Media</strong>
              <ul>
                <li>
                  <a href="#">
                    <div className="social-media-wrapper">
                      <img src={GithubIcon} />
                      <span className="ms-2">Seventeen Academy</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="social-media-wrapper">
                      <img src={InstagramIcon} />
                      <span className="ms-2">Seventeen Academy</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="social-media-wrapper">
                      <img src={YoutubeIcon} />
                      <span className="ms-2">Seventeen Academy</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="row">
              <span className="copyright">
                Copyright © 2023 SEVA ALL RIGHT RESERVED
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
