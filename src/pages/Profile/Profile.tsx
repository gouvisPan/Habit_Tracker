import React from "react";
import "./Profile.scss";
import placeholder from "../../assets/profile-image-placeholde.png";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useState } from "react";
import BasicInfo from "./subPages/BasicInfo";
import DeleteAccount from "./subPages/DeleteAccount";
import Statistics from "./subPages/Statistics/Statistics";
import avatar1 from "../../assets/avatars/male_avatar_1.svg"
import avatar2 from "../../assets/avatars/female_avatar_1.svg"
import avatar3 from "../../assets/avatars/male_avatar_2.svg"
import avatar4 from "../../assets/avatars/female_avatar_2.svg"

const Profile = () => {
  const dispatch = useAppDispatch();
  const [mountedPage, setMountedPage] = useState(0);
  const user = useAppSelector((state) => state.user.data);
  let mountedJsx = <BasicInfo />;
  let profileImage ;

    switch (user!.avatar) {
    case 1:
      profileImage = avatar1;
      break;
    case 2:
      profileImage = avatar2;
      break;
    case 3:
      profileImage = avatar3;
      break;
    case 4:
      profileImage = avatar4;
  }

  switch (mountedPage) {
    case 0:
      mountedJsx = <BasicInfo />;
      break;
    case 1:
      mountedJsx = <Statistics />;
      break;
    case 2:
      mountedJsx = <DeleteAccount />;
  }

  return (
    <div className="profile-container c">
      <div className="left">
        <div className="profile-container__basic-info">
          <img src={profileImage} />
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
