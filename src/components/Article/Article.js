import React from "react";
import './Article.css';
function Article() {
  return (
    <section id="article" className="mt-4 text-center mx-auto">
      <div className="container">
        <div className="row">
          <p className="display-5 fw-bold article-title">Free UI resources for everyone</p>
          <p className="article-text fs-5">
            The largest database of 100% free UI components and designs<br/>
            available in the formats popular by UI designers.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Article;
