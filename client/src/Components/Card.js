import React from "react";

const Card = ({ url, user_image, user_name }) => {
  return (
    <>
      <div className="card">
        <div className="top">
          {user_image ? (
            <div
              id="user-image"
              style={{
                backgroundImage: `url("${user_image}")`,
                objectFit: "contain",
                width: "40px",
                height: "40px",
              }}
            ></div>
          ) : (
            <i class="fa-solid fa-user"></i>
          )}
          <p className="">{user_name}</p>
        </div>
        <div className="middle">
          <img src={url} />
        </div>
        <div className="end">
          <i class="fa-solid fa-2x fa-heart"></i>
          <p className="">324,234 likes</p>

          <p className="user-name">
            <strong>Theindaintream</strong> Our fast bowling group is getting
            ready for our next match. #TeamIndia #T20WorldCup
          </p>
          <strong> View all 342 Comments</strong>
          <div className="comments">
            <div className="comment">
              <p className="">
                <strong>eternalpeace</strong> andh namazi why there is no
                outrage for Bangladeshi Hindus say andh namazi
                #hindulivesmatters #pissfull
              </p>
            </div>
            <div className="comment">
              <p className="">
                <strong>eternalpeace</strong> andh namazi why there is no
                outrage for Bangladeshi Hindus say andh namazi
                #hindulivesmatters #pissfull
              </p>
            </div>
            <div className="comment">
              <p className="">
                <strong>eternalpeace</strong> andh namazi why there is no
                outrage for Bangladeshi Hindus say andh namazi
                #hindulivesmatters #pissfull
              </p>
            </div>{" "}
            <div className="comment">
              <p className="">
                <strong>eternalpeace</strong> andh namazi why there is no
                outrage for Bangladeshi Hindus say andh namazi
                #hindulivesmatters #pissfull
              </p>
            </div>{" "}
            <div className="comment">
              <p className="">
                <strong>eternalpeace</strong> andh namazi why there is no
                outrage for Bangladeshi Hindus say andh namazi
                #hindulivesmatters #pissfull
              </p>
            </div>
            <div className="comment">
              <p className="">
                <strong>eternalpeace</strong> andh namazi why there is no
                outrage for Bangladeshi Hindus say andh namazi
                #hindulivesmatters #pissfull
              </p>
            </div>{" "}
            <div className="comment">
              <p className="">
                <strong>eternalpeace</strong> andh namazi why there is no
                outrage for Bangladeshi Hindus say andh namazi
                #hindulivesmatters #pissfull
              </p>
            </div>{" "}
            <div className="comment">
              <p className="">
                <strong>eternalpeace</strong> andh namazi why there is no
                outrage for Bangladeshi Hindus say andh namazi
                #hindulivesmatters #pissfull
              </p>
            </div>{" "}
            <div className="comment">
              <p className="">
                <strong>eternalpeace</strong> andh namazi why there is no
                outrage for Bangladeshi Hindus say andh namazi
                #hindulivesmatters #pissfull
              </p>
            </div>{" "}
            <div className="comment">
              <p className="">
                <strong>eternalpeace</strong> andh namazi why there is no
                outrage for Bangladeshi Hindus say andh namazi
                #hindulivesmatters #pissfull
              </p>
            </div>{" "}
            <div className="comment">
              <p className="">
                <strong>eternalpeace</strong> andh namazi why there is no
                outrage for Bangladeshi Hindus say andh namazi
                #hindulivesmatters #pissfull
              </p>
            </div>{" "}
            <div className="comment">
              <p className="">
                <strong>eternalpeace</strong> andh namazi why there is no
                outrage for Bangladeshi Hindus say andh namazi
                #hindulivesmatters #pissfull
              </p>
            </div>{" "}
            <div className="comment">
              <p className="">
                <strong>eternalpeace</strong> andh namazi why there is no
                outrage for Bangladeshi Hindus say andh namazi
                #hindulivesmatters #pissfull
              </p>
            </div>
          </div>
          <div className="post">
            <form>
              <i className="fa-solid fa-smile "></i>
              <input />
              <button placeholder="Add a comment">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
