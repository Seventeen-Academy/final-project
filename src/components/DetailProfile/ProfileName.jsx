function ProfileName() {
    return (
      <div className=" border border-white rounded shadow bg-white p-4 my-2">
        <div className=" fw-bold fs-3">Foto Profile</div>
        <div className="d-flex gap-3 align-items-center py-4">
          <img
            width={90}
            height={90}
            className="avatar"
            src="/src/assets/images/profile-avatar.png"
            alt=""
          />
  
          <div>
            <button className="btn-img rounded py-1 px-2">Pilih Foto</button>
            <div className="text-black-50 w-75 pt-1">
              Gambar Profile Anda sebaiknya memiliki rasio 11 dan berukuran tidak
              lebih dari 2MB.
            </div>
          </div>
        </div>
        <div className="input-wrapper">
          <div>
            Nama Lengkap <span style={{ color: "red" }}>*</span>
          </div>
          <input
            type="text"
            name="name"
            className="w-100 rounded p-2"
            placeholder="Nama Lengkap"
          />
        </div>
        <div className="input-wrapper">
          <div>
            Username <span style={{ color: "red" }}>*</span>
          </div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-100 rounded p-2"
          />
        </div>
        <div className="input-wrapper">
          <div>
            Email <span style={{ color: "red" }}>*</span>
          </div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-100 rounded p-2"
          />
        </div>
        <button className="btn-img rounded mt-4 py-2 px-2">
          Simpan Perubahan
        </button>
      </div>
    );
  }
  
  export default ProfileName;
  