import React from "react";
import "./Profile.scss";
import placeholder from "../../assets/profile-image-placeholde.png";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useState } from "react";
import BasicInfo from "./subPages/BasicInfo";
import AccountSecurity from "./subPages/AccountSecurity";
import DeleteAccount from "./subPages/DeleteAccount";
import Statistics from "./subPages/Statistics/Statistics";

const Profile = () => {
  const dispatch = useAppDispatch();
  const [mountedPage, setMountedPage] = useState(0);
  const user = useAppSelector((state) => state.user.data);
  let mountedJsx = <BasicInfo />;

  switch (mountedPage) {
    case 0:
      mountedJsx = <BasicInfo />;
      break;
    case 1:
      mountedJsx = <Statistics />;
      break;
    case 2:
      mountedJsx = <AccountSecurity />;
      break;
    case 3:
      mountedJsx = <DeleteAccount />;
  }

  return (
    <div className="profile-container c">
      <div className="left">
        <div className="profile-container__basic-info">
          <img src={placeholder} />
          <h3>{user?.name}</h3>
        </div>
        <ul className="profile-container__list">
          <li
            className={mountedPage === 0 ? "profile-container__active" : ""}
            onClick={() => {
              setMountedPage(0);
            }}
          >
            Basic info
          </li>
          <li
            className={mountedPage === 1 ? "profile-container__active" : ""}
            onClick={() => setMountedPage(1)}
          >
            Statistics
          </li>
          <li
            className={mountedPage === 2 ? "profile-container__active" : ""}
            onClick={() => setMountedPage(2)}
          >
            Account security
          </li>
          <li
            className={mountedPage === 3 ? "profile-container__active" : ""}
            onClick={() => setMountedPage(3)}
          >
            Delete Account
          </li>
        </ul>
      </div>
      <div className="right">
        <div className="profile-container__title">
          <h2>Profile Info</h2>
          <h4>Edit your profile here!</h4>
          <hr></hr>
        </div>
        <div className="profile-container__page">{mountedJsx}</div>
      </div>
    </div>
  );
};

export default Profile;

{
  /* <div className="profile-container__secondary-info"></div> */
}
// <span className="profile-container__secondary-info--value">
//           Swap points
//         </span>
//         <ToggledInput label="20" />
//         <span className="profile-container__secondary-info--value">Email</span>
//         <ToggledInput label="pgoovis@yahoo.com" />
//         <span className="profile-container__secondary-info--value">Skills</span>
//         <ToggledInput label="4" />
//         <span className="profile-container__secondary-info--value">
//           Bio Headline
//         </span>
//         <ToggledInput label="My Headline!!" />

//         <br></br>
//         {isNotEditing && <br></br>}
//         {!isNotEditing && (
//           <button
//             className="profile-container__secondary-info--button-save"
//             onClick={handleSubmit}
//           >
//             Save
//           </button>
//         )}

//         {isNotEditing && (
//           <MdModeEditOutline
//             onClick={editHandler}
//             className="profile-container__secondary-info--icon"
//           />
//         )}
