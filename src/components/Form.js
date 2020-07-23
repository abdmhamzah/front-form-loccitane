import React, { useEffect, useState } from "react";

export default () => {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState(0);
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [email, setEmail] = useState("");
  const [dayBirth, setDay] = useState("");
  const [mothBirth, setMonth] = useState("");
  const [yearBirth, setYear] = useState("");

  // subscription
  const [subscription, setSubscription] = useState("");

  // validation
  const [isChecked, setIsChecked] = useState(false);

  // fetched data
  const [list_data, setList_data] = useState([]);

  async function getList() {
    const list = await fetch("https://restcountries.eu/rest/v2/all", {
      method: "GET",
      mode: "cors",
    });

    const data = await list.json();
    setList_data(data);
  }

  function submitForm(e) {
    e.preventDefault();
    const struct = {
      title,
      firstName,
      lastName,
      phone,
      address,
      country,
      province,
      email,
      dayBirth,
      mothBirth,
      yearBirth,
      subscription,
    };
    console.log(struct, "<<<< DATA INPUT USER");
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <div className="columns mt-4 mb-6 mx-6">
        <div className="column is-12">
          <form
            onSubmit={(e) => {
              submitForm(e);
            }}
          >
            <p className="title is-5">Create new account</p>
            <label className="subtitle is-6" style={{ fontWeight: "bold" }}>
              Title
            </label>
            <br />
            <label class="checkbox mr-4">
              <input type="checkbox" onChange={() => setTitle("Mrs")} /> Mrs
            </label>
            <label class="checkbox mr-4">
              <input type="checkbox" onChange={() => setTitle("Ms")} /> Ms
            </label>
            <label class="checkbox mr-4">
              <input type="checkbox" onChange={() => setTitle("Mdm")} /> Mdm
            </label>
            <label class="checkbox mr-4">
              <input type="checkbox" onChange={() => setTitle("Mr")} /> Mr
            </label>
            <label class="checkbox mr-4">
              <input type="checkbox" onChange={() => setTitle("Dr")} /> Dr
            </label>
            <div className="columns mt-5">
              <div className="column is-6">
                <label className="subtitle is-6" style={{ fontWeight: "bold" }}>
                  Last name{" "}
                  <i
                    className="subtitle is-5 has-text-danger"
                    style={{ fontWeight: "bold" }}
                  >
                    *
                  </i>
                </label>
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  class="input is-hovered"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="column is-6">
                <label className="subtitle is-6" style={{ fontWeight: "bold" }}>
                  First name{" "}
                  <i
                    className="subtitle is-5 has-text-danger"
                    style={{ fontWeight: "bold" }}
                  >
                    *
                  </i>
                </label>
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  class="input is-hovered"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </div>
            </div>
            <div className="columns">
              <div className="column is-6">
                <label className="subtitle is-6" style={{ fontWeight: "bold" }}>
                  Mobile phone number{" "}
                  <i
                    className="subtitle is-5 has-text-danger"
                    style={{ fontWeight: "bold" }}
                  >
                    *
                  </i>
                </label>
                <div className="columns">
                  <div className="column is-2">
                    <div class="select is-fullwidth">
                      <select className="is-hovered" required>
                        {list_data.map((el) => {
                          return (
                            <option>
                              <div>
                                <img src={el.flag} alt="logo" width="27px" />
                              </div>
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="column is-10">
                    <div class="control has-icons-left has-icons-right">
                      <input
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        className="input is-hovered"
                        type="email"
                        placeholder="Mobile phone number"
                      />
                      <span class="icon is-small is-left">
                        <p>test</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="title is-5 mt-5">Address</p>
            <label className="subtitle is-6" style={{ fontWeight: "bold" }}>
              Address
            </label>
            <input
              class="input is-hovered"
              type="text"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
            <div className="columns mt-5">
              <div className="column is-6">
                <label className="subtitle is-6" style={{ fontWeight: "bold" }}>
                  Country/Location{" "}
                  <i
                    className="subtitle is-5 has-text-danger"
                    style={{ fontWeight: "bold" }}
                  >
                    *
                  </i>
                </label>
                <div class="select is-fullwidth">
                  <select
                    className="is-hovered"
                    onChange={(e) => setCountry(e.target.value)}
                    value={country}
                    required
                  >
                    {list_data.map((el) => {
                      return <option value={el.name}>{el.name}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div className="column is-6">
                <label className="subtitle is-6" style={{ fontWeight: "bold" }}>
                  Province/District{" "}
                </label>
                <div class="select is-fullwidth">
                  <select
                    className="is-hovered"
                    onChange={(e) => setProvince(e.target.value)}
                    value={province}
                  >
                    <option>Select</option>
                    <option>Bakekok</option>
                  </select>
                </div>
              </div>
            </div>
            <p className="title is-5 mt-5">Contact</p>
            <div className="columns mt-5 mb-6">
              <div className="column is-6">
                <label className="subtitle is-6" style={{ fontWeight: "bold" }}>
                  Email Address{" "}
                  <i
                    className="subtitle is-5 has-text-danger"
                    style={{ fontWeight: "bold" }}
                  >
                    *
                  </i>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  class="input is-hovered"
                  type="text"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="column is-6">
                <div className="columns">
                  <div className="column is-4">
                    <label
                      className="subtitle is-6"
                      style={{ fontWeight: "bold" }}
                    >
                      Date of birth{" "}
                      <i
                        className="subtitle is-5 has-text-danger"
                        style={{ fontWeight: "bold" }}
                      >
                        *
                      </i>
                    </label>
                    <div class="select is-fullwidth">
                      <select
                        className="is-hovered"
                        onChange={(e) => setDay(e.target.value)}
                        value={dayBirth}
                        required
                      >
                        <option>1</option>
                      </select>
                    </div>
                  </div>
                  <div className="column is-4">
                    <label
                      className="subtitle is-6"
                      style={{ fontWeight: "bold" }}
                    >
                      Month{" "}
                      <i
                        className="subtitle is-5 has-text-danger"
                        style={{ fontWeight: "bold" }}
                      >
                        *
                      </i>
                    </label>
                    <div class="field">
                      <p class="control has-icons-left">
                        <input
                          onChange={(e) => setMonth(e.target.value)}
                          value={mothBirth}
                          class="input is-hovered"
                          type="text"
                          placeholder="MM"
                          required
                        />
                        <span class="icon is-small is-left">
                          <i class="fas fa-calendar"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="column is-4">
                    <label
                      className="subtitle is-6"
                      style={{ fontWeight: "bold" }}
                    >
                      Year{" "}
                    </label>
                    <div class="field">
                      <p class="control has-icons-left">
                        <input
                          onChange={(e) => setYear(e.target.value)}
                          value={yearBirth}
                          class="input is-hovered"
                          type="text"
                          placeholder="YY"
                          required
                        />
                        <span class="icon is-small is-left">
                          <i class="fas fa-calendar"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-12">
                <p className="title is-5 mt-5">Standard Privacy Note</p>
                <p>
                  I warant that the above information is true and correct. I
                  understand that failure to answer all question in this
                  application form may prevent L'OCCITANE from processing my
                  application: and L'OCCITANE may refuse to accept this
                  application in the right of my individual circumstance.
                </p>
                <br />
                <p>
                  I understand that the information collected will be used and
                  retained by L'OCCITANE for the purpose of (i) my application
                  of membership program of L'OCCITANE (ii) providing
                  member-exclusive services; and (iii) the daily management
                  operation and maintenance of membership account at L'OCCITANE.
                </p>
                <br />
                <p>
                  I understand that it is necessary for me to provide L'OCCITANE
                  with data in collection with the privilage. Failure to provide
                  such data may result in L'OCCITANE stores or official website.
                </p>
                <br />
                <p>
                  L'OCCITANE reserves the right to change any of the terms and
                  conditions without prior notice. Changes will be posted on
                  signage placed at L'OCCITANE stores or official website.
                </p>
                <br />
                <p>
                  I understand that L'OCCITANE may use my personal information
                  for the purpose of providing or promoting services/ product
                  made available by L'OCCITANE To choose whether to receive any
                  promotional information sent by L'OCCITANE, plese tick the box
                  below.
                </p>
                <br />
                <p>
                  I want to receive information or communication from L'OCCITANE
                </p>
              </div>
            </div>
            <div className="columns mb-6">
              <div className="column is-4">
                <label class="checkbox mr-4">
                  SMS & Mobile Call{" "}
                  <input
                    type="checkbox"
                    onChange={() => setSubscription("smscall")}
                  />
                </label>
              </div>
              <div className="column is-4 has-text-centered">
                <label class="checkbox mr-4">
                  Emailing{" "}
                  <input
                    type="checkbox"
                    onChange={() => setSubscription("emailing")}
                  />
                </label>
              </div>
              <div className="column is-4 has-text-right">
                <label class="checkbox mr-4">
                  Mailing{" "}
                  <input
                    type="checkbox"
                    onChange={() => setSubscription("mailing")}
                  />
                </label>
              </div>
            </div>
            <label class="checkbox mr-4">
              <input
                type="checkbox"
                onChange={() => setIsChecked(!isChecked)}
              />{" "}
              I have read and understood the above terms and conditions and
              hereby agree that I will be bounded by these conditions and
              policies once I submitted this application form.
            </label>
            <div className="columns mt-4 has-text-right">
              <div className="column is-12">
                {isChecked ? (
                  <button type="submit" className="button is-warning">
                    CREATE CUSTOMER
                  </button>
                ) : (
                  <button type="submit" className="button is-warning" disabled>
                    CREATE CUSTOMER
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
