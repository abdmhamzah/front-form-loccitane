import React from "react";

export default () => {
  return (
    <>
      <div className="columns has-background-warning has-text-centered">
        <div className="column is-12">
          <div className="columns has-background-white mt-1 mb-3">
            <div className="column is-12">
              <div className="columns level">
                <div className="column is-9 level-item">
                  <img src="logo.png" alt="logo" width="270em" />
                </div>
                <div className="column is-3 level-item">
                  Languages:{" "}
                  <div class="select is-small">
                    <select>
                      <option>English</option>
                      <option>Indonesia</option>
                    </select>
                  </div>{" "}
                  <i className="fa fa-cog"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-12 py-0">
            <p className="my-0" style={{ fontWeight: "bold" }}>
              You don't have an account yet, please create a new account
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
