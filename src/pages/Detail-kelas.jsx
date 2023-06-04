import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiBookAdd } from "react-icons/bi";
import { LuAlarmClock } from "react-icons/lu";
import { TiPointOfInterestOutline } from "react-icons/ti";
import { TbCertificate } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineClass } from "react-icons/md";
const dataKelas = [
  {
    title: "Terakhir Diupdate",
    status: "December 2022",
  },
  {
    title: "Level Kelas",
    status: "Junior",
  },
  {
    title: "Siswa",
    status: "130,662",
  },
  { title: "Bahasa", status: "Indonesia" },
];
function Kelas() {
  return (
    <main className="bg-grey pt-4">
      <div className="container">
        <div className="row">
          <div className="col col-sm-12  col-lg-6">
            <div className="container border border-white rounded bg-white p-4 my-2">
              <div className="container fw-bold fs-3">HTML Dasar</div>
              <div className="container">
                <div className="row justify-content-center align-items-center">
                  <div className="col col-sm-5 col-lg-4">
                    <div
                      className="container kelas-type-wrapper rounded"
                      id="coding"
                    >
                      Kelas Coding
                    </div>
                  </div>
                  <div className="col col-sm-7 col-lg-8">
                    <div className="container">
                      5.0{" "}
                      {[...Array(5)].map((a, index) => (
                        <span key={index} style={{ color: "#f5d442" }}>
                          <AiFillStar />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  {dataKelas.map((a, index) => (
                    <div lg={3} className="col col-lg-3 py-2" key={index}>
                      <div className="container data-kelas-wrapper rounded py-1">
                        <div>{a.title}</div>
                        <div className="fw-bold">{a.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="container py-2">
                <img
                  className="rounded"
                  src="https://cdn.eraspace.com/pub/media/mageplaza/blog/post/m/e/medium.com_-1024x684.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col col-sm-12 col-lg-6">
            <div className="container border border-white rounded bg-white p-4 my-2">
              <div className="fw-bold">Rp. 500.000,-</div>
              <div style={{ color: "#7b069c" }}>Gratis</div>
              <button className="button rounded text-white btn-dftr">
                Daftar Kelas
              </button>
              <hr />
              <div className="fw-bold">Detail Kelas</div>
              <div style={{ fontSize: "0.8rem" }}>
                <span>
                  <BiBookAdd /> 5 Pembelajaran
                </span>
              </div>
              <div style={{ fontSize: "0.8rem" }}>
                <span>
                  <LuAlarmClock /> Dapat diakses selamanya
                </span>
              </div>
              <div style={{ fontSize: "0.8rem" }}>
                <span>
                  <TiPointOfInterestOutline /> Dapat 500 points
                </span>
              </div>
              <div style={{ fontSize: "0.8rem" }}>
                <span>
                  <TbCertificate /> Sertifikat dari penyelesaian kelas
                </span>
              </div>
              <hr />
              <div className="fw-bold">Mentor</div>
              <div className="py-2">
                <div className="d-flex align-items-center gap-2">
                  <div className="fs-1 d-flex">
                    <FaUserCircle />
                  </div>
                  <div style={{ fontSize: "0.8rem" }}>
                    <div>Enricho Alkalas Savaro</div>
                    <div>Mentor Skilvul</div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between pt-2">
                <div>
                  5.0{" "}
                  {[...Array(5)].map((a, index) => (
                    <span key={index} style={{ color: "#f5d442" }}>
                      <AiFillStar />
                    </span>
                  ))}
                </div>
                <div style={{ fontSize: "0.8rem" }}>
                  <MdOutlineClass /> 4 Kelas
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12  col-lg-6">
            <div className="container border border-white rounded bg-white p-4 my-2">
              <div className="fw-bold fs-3">Ringkasan</div>
              <br />
              <p>
                Di kelas ini, kita akan belajar bagaimana membuat halaman sebuah
                website dengan menggunakan HTML. HTML adalah bahasa pemrograman
                web yang cocok dipelajari untuk pemula, kita bisa membuat
                struktur dan kerangka website dari beberapa element. Fungsi HTML
                adalah membangun tampilan website khsusnya untuk bagian front
                end. Setiap halaman website pastinya dibangun dari HTML.
              </p>

              <p>Apa yang akan kita pelajari</p>

              <ol>
                <li>Struktur Dokumen HTML</li>
                <li>HTML Tag, Element, Attribute & Comment</li>
                <li>HTML Tag Untuk Menampilkan Teks</li>
                <li>HTML Tag Untuk Multimedia</li>
                <li>HTML Tag Untuk Tabel</li>
                <li>HTML Tag Untuk Formulir</li>
                <li>HTML Tag Untuk Membagi Layout Website</li>
              </ol>
            </div>
            <div className="container border border-white rounded bg-white p-4 my-2">
              <div className="fw-bold fs-3">Materi yang kamu pelajari</div>

              <br />

              <ol>
                <li>Struktur Dokumen HTML</li>
                <li>HTML Tag, Element, Attribute & Comment</li>
                <li>HTML Tag Untuk Menampilkan Teks</li>
                <li>HTML Tag Untuk Multimedia</li>
                <li>HTML Tag Untuk Tabel</li>
                <li>HTML Tag Untuk Formulir</li>
                <li>HTML Tag Untuk Membagi Layout Website</li>
              </ol>
            </div>
            <div className="container border border-white rounded bg-white p-4 my-2">
              <div className="fw-bold fs-3">Persiapan kelas</div>

              <br />

              <ul>
                <li>
                  Gunakan komputer atau laptop dengan koneksi internet yang
                  stabil
                </li>
                <li>
                  Install web browser {"("}disarankan menggunakan Chrome {")"}
                </li>
                <li>
                  Sistem operasi {"("}Windows, Linux, MacOS {")"}
                </li>
                <li>Minimal RAM 1GB</li>
                <li>Menginstall text editor(VScode)</li>
                <li>
                  Processor Intel Coloron {"("}rekomendasi Core i3 ke atas {")"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Kelas;
