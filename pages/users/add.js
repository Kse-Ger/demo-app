import { useState } from "react";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/Home.module.css";

const AddUser = () => {
  const [ninja, setNinja] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const router = useRouter();

  async function postData(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    router.push('./all')
    return await response.status;
  }

  const handleSubmit = (ninja, age, city) => {
    var newUser = {
      name: ninja,
      age: age,
      city: city,
    };
    console.log("New User: " + JSON.stringify(newUser));

    if (newUser != null) {
      postData("http://localhost:8080/api/v1/", newUser);
    }
  };

  return (
    <div>
      <h1>Add new ninja</h1>
      <div className="flex align-center">
        <p>Name: </p>
        <input
          className="input"
          type="text"
          value={ninja}
          onChange={(e) => setNinja(e.target.value)}
        ></input>
      </div>
      <div className="flex align-center">
        <p>City: </p>
        <input
          className="input"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></input>
      </div>
      <div className="flex align-center">
        <p>Age: </p>
        <input
          className="input"
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        ></input>
      </div>
      <button onClick={() => handleSubmit(ninja, age, city)} className={styles.btn}>Submit</button>
    </div>
  );
};

export default AddUser;
