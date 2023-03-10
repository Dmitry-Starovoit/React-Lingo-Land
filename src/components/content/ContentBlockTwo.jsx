const ContentBlockTwo = function () {
  return (
    <div className="block__two--content">
      <div className="section__title">
        <h2 className="section__description">
          Workbook consist of three parts
        </h2>
      </div>

      <div className="operations">
        <div className="operations__tab-container">
          <button
            className="
                  btn
                  operations__tab operations__tab--1 operations__tab--active
                "
            data-tab="1"
          >
            Before Watching
          </button>
          <button
            className="btn operations__tab operations__tab--2"
            data-tab="2"
          >
            While Watching
          </button>
          <button
            className="btn operations__tab operations__tab--3"
            data-tab="3"
          >
            After Watching
          </button>
        </div>
        <div
          className="
                operations__content
                operations__content--1
                operations__content--active
              "
        >
          <p>
            Before watching the movie you have to learn the words and do
            different exercise on those words. The exercise are aimed at
            learning words easily and applying them.
          </p>
          <h5 className="operations__header">TIP: always repeat words</h5>
        </div>

        <div className="operations__content operations__content--2">
          <p>
            While watching there will be exercises on the movie. Such as: watch
            a movie and insert missing words or in the correct form of a word.
            Will also be a test for the film. Also insert the correct order of
            the text or words.
          </p>
          <h5 className="operations__header">TIP: always repeat words</h5>
        </div>
        <div className="operations__content operations__content--3">
          <p>
            After watching there will be exercises to practice grammar.{" "}
            <span>
              There will be different and interesting tasks for the film that
              you will easily do.
            </span>
          </p>
          <h5 className="operations__header">TIP: always repeat words</h5>
        </div>
      </div>
    </div>
  );
};

export default ContentBlockTwo;
