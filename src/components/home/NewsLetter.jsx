import React from "react";

const NewsLetter = ({ theme }) => {
  return (
    <>
      <section className={`${theme === "dark" ? "dark" : "light"} newsletter`}>
        <div className="content">
          <div className="text_content">
            <h4 className="content_heading">
              Updates delivered to your inbox!
            </h4>
            <p className="content_description">
              A periodic update about my life, recent blog posts, how-tos, and
              discoveries.
            </p>

            <p className="note">No spam - unsubscribe at any time!</p>
          </div>

          <form method="Post" className="news_subscription">
            <input
              type="email"
              name="email"
              placeholder="bobbyjoshi@gmail.com"
            />
            <input type="submit" value={"Subscribe"} />
          </form>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
