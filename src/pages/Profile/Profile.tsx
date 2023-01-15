import "./Profile.scss";
import { useAppSelector } from "../../hooks/hooks";
import { useState } from "react";
import BasicInfo from "./subPages/BasicInfo/BasicInfo";
import DeleteAccount from "./subPages/DeleteAccount/DeleteAccount";
import Statistics from "./subPages/Statistics/Statistics";
import avatar1 from "../../assets/avatars/male_avatar_1.svg";
import avatar2 from "../../assets/avatars/female_avatar_1.svg";
import avatar3 from "../../assets/avatars/male_avatar_2.svg";
import avatar4 from "../../assets/avatars/female_avatar_2.svg";
import useWindowSize from "../../hooks/useWindowSize";
import Header from "../../components/Header/Header";

const Profile = () => {
  const [mountedPage, setMountedPage] = useState(0);
  const user = useAppSelector((state) => state.user.data);
  const [height, width] = useWindowSize();
  let mountedJsx = <BasicInfo />;
  let profileImage;

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
    <div className="c profile-container">
      <div className="left">
        <div className="profile-container__basic-info">
          <img src={profileImage} alt="avatar_img" />
          <h3>{user?.name}</h3>
          {width < 701 && <Header />}
        </div>
        <ul className="profile-container__list">
          <li
            className={mountedPage === 0 ? "profile-container__active" : ""}
            onClick={() => {
              setMountedPage(0);
            }}
          >
            Basic {width > 700 && "Info"}
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
            Delete {width > 700 && "Account"}
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
