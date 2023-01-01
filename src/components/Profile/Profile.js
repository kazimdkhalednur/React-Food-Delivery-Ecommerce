import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <div style={styles.card_wrapper}>
            <Link style={styles.link} to="/edit-profile">Edit</Link>
            <div style={styles.card}>
                <div style={styles.profile_image_circle}>
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Profile Picture" style={styles.profile_image} />
                </div>
                <div style={styles.info}>
                    <h4>John Dev</h4>
                    <h6>johndev@hotmail.com</h6>
                    <h6>41 Manchester Street Saint Johns, FL 32259</h6>
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
        margin: "30px 0 0 40px"
    },
    card_wrapper: {
        display: "flex",
        justifyContent: "center"
    },
    link: {
        fontSize: "20px",
        padding: "10px 20px",
        backgroundColor: "red",
        fontWeight: "700",
        color: "#fff",
        borderRadius: "6px",
        position: "absolute",
        right: "10%",
    }
}