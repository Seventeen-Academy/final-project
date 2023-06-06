import { RewardCoin, RewardGem, RewardHoodie, LogoPoint } from "../../assets/images";
import "../../assets/css/style-award.css";
import { useState } from "react";

const AwardContent = () => {
  const [award, useAward] = useState([
    {
      taglineReward: "Tukarkan dengan e-wallet Rp.10.000,-",
      currentPoint: "8000 Point",
      imgReward: RewardCoin,
    },
    {
      taglineReward: "Tukarkan dengan Voucher game Rp.50.000,-",
      currentPoint: "25.000 Point",
      imgReward: RewardGem,
    },
    {
      taglineReward: "Tukarkan dengan Hoodie SevA",
      currentPoint: "50.000 Point",
      imgReward: RewardHoodie,
    },
  ]);
  return (
    <>
      <div className="card card-rounded shadow-sm">
        <div className="card-body d-flex flex-column">
          <h3 className="title mb-4">Total point yang didapatkan</h3>
          <div className="card-level w-100">
            <div className="row">
              <div className="col-sm-4 col-md-4 col-xl-4 p-4 align-items-center">
                <img src={LogoPoint} alt="" className="img-fluid" />
              </div>
              <div className="col-sm-8 col-md-8 col-xl-8 p-4 my-3">
                <h3 className="tagline-level">Point yang terkumpul</h3>
                <hr className="line-level" />
                <h1 className="level-status">1500 Point</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card card-rounded shadow-sm mt-4">
        <div className="card-body ">
          <h3 className="title mb-4">Hadiah yang dapat ditukarkan</h3>
          <div className="reward-status w-100 mt-3 rounded mb-4">
            <div className="row">
              {award.map((item, index) => (
                <div className="container d-flex" key={index}>
                  <div className="col-sm-8 col-md-8 col-xl-8 p-4">
                    <h3 className="tagline-reward ms-4">{item.taglineReward}</h3>
                    <hr className="line-reward-2 ms-4" />
                    <h1 className="current-point ms-4">{item.currentPoint}</h1>
                    {/* <h3 className="desc ms-4">
                      Perlu <span className="need-point">250</span> lagi untuk menjadi <span className="upgrade-level">Senior</span>
                    </h3> */}
                  </div>
                  <div className="col-sm-4 col-md-4 col-xl-4 p-4">
                    <img src={item.imgReward} alt="" className="img-fluid me-3 my-auto" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AwardContent;
