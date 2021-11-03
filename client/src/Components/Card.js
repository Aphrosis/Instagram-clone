import React from "react";

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="top">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <p className="">twiter</p>
        </div>
        <div className="middle">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
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
              <button placeholder="Add a comment"><i className="fa-solid fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
