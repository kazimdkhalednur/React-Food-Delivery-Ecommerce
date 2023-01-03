import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import axiosInstance from "../../utils/axiosInstance";

function Profile() {
  const [userData, setUserData] = useState();
  const getUserData = async () => {
    let response = await axiosInstance.get("/accounts/detail/");
    setUserData(response.data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div style={styles.card_wrapper}>
      <Link style={styles.link} to="/edit-profile">
        <Button>Edit</Button>
      </Link>
      <div style={styles.card}>
        <div style={styles.profile_image_circle}>
          <img
            src={
              userData?.img === null
                ? "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                : userData?.img
            }
            alt="Profile Picture"
            style={styles.profile_image}
          />
        </div>
        <div style={styles.info}>
          <h4>{userData?.full_name}</h4>
          <h6>{userData?.email}</h6>
          <h6>{userData?.address}</h6>
          <h6>{userData?.phone}</h6>
        </div>
      </div>
    </div>
  );
}

export default Profile;

const styles = {
  profile_image_circle: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    overflow: "hidden",
  },
  profile_image: {
    width: "100%",
    height: "100%",
  },
  card: {
    display: "flex",
    margin: "10px 0",
    padding: "100px 0 200px 0",
  },
  info: {
    margin: "30px 0 0 40px",
  },
  card_wrapper: {
    display: "flex",
    justifyContent: "center",
  },
  link: {
    margin: "30px",
    position: "absolute",
    left: "10%",
  },
};
