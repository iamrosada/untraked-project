import { useState } from "react";
import "./student.bio.css";

const biostudent = [
  {
    id: 1,
    avatar:
      "https://yt3.ggpht.com/H1JFb8NCxufgD7KeXPzgfuKJdJlfTmuliyHutasUm1wHOZ5QXj6KEIin2QXdG8MAYFTpRPT0Wg=s88-c-k-c0x00ffffff-no-rj-mo",
    name: "Edson Kapenda",
    year: "3",
    phone: "+79102462141",
    about:
      "Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer",
    age: "21",
    gender: "Male",
    Date_of_birth: {
      day: "5",
      year: "1998",
      month: "January",
    },
    address: "voronezh",
  },
];

const BioStudents = () => {
  const [] = useState();
  return (
    <section className="container-bio">
      {biostudent.map((studentsBio) => {
        return (
          <form key={studentsBio.id} className="wrapper-bio">
            <div className="bio-avatar">
              <img src={studentsBio.avatar} alt="" />

              <div className="bio-personal">
                <h2>{studentsBio.name}</h2>
                <div>
                  <span>{studentsBio.year}</span>
                  <strong id="year">Year</strong>
                </div>
              </div>
              <strong id="number-fone">{studentsBio.phone}</strong>
            </div>

            <div className="bio-about-student">
              <h2>About</h2>
              <p>{studentsBio.about}</p>
            </div>

            <div className="bio-age-and-gender">
              <div>
                <h2>Age</h2>
                <span>{studentsBio.age}</span>
              </div>
              <div className="gender">
                <h2>Gender</h2>
                <span>{studentsBio.gender}</span>
              </div>
            </div>

            <div className="bio-age-and-gender">
              <div className="birthday">
                <h2>Date of birth</h2>
                <p>
                  <span>{studentsBio.Date_of_birth.day}</span>
                  <span>{studentsBio.Date_of_birth.month}</span>
                  <span>{studentsBio.Date_of_birth.year}</span>
                </p>
              </div>
              <div className="address">
                <h2>Address</h2>
                <p>Mosckva</p>
              </div>
            </div>
          </form>
        );
      })}

      <div className="bio-people-from-the-same-class">
        <h2>People from the same class</h2>
        <div>
          <img
            src="https://yt3.ggpht.com/H1JFb8NCxufgD7KeXPzgfuKJdJlfTmuliyHutasUm1wHOZ5QXj6KEIin2QXdG8MAYFTpRPT0Wg=s88-c-k-c0x00ffffff-no-rj-mo"
            alt=""
          />
          <img
            src="https://yt3.ggpht.com/H1JFb8NCxufgD7KeXPzgfuKJdJlfTmuliyHutasUm1wHOZ5QXj6KEIin2QXdG8MAYFTpRPT0Wg=s88-c-k-c0x00ffffff-no-rj-mo"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default BioStudents;
