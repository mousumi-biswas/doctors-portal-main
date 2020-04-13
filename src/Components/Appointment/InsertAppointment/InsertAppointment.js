import React from "react";
import fakeData from "../../../Data/appointment.json";

const InsertAppointment = () => {
  const dataPoster = (url, dataToPost) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataToPost),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container py-5">
      <h1>Appointment Management</h1>
      <button
        onClick={() =>
          dataPoster(
            "https://tranquil-reaches-62529.herokuapp.com//insertAppointment",
            fakeData
          )
        }
        className="btn btn-danger mr-2"
      >
        Add Data
      </button>
    </div>
  );
};

export default InsertAppointment;
