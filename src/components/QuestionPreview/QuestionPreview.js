/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import "./QuestionPreview.scss";
import propTypes from "prop-types";

function QuestionPreview({ cardData }) {
  const getMedia = (type, src) => {
    switch (type) {
      case "video":
        return (
          <video
            disablePictureInPicture
            controlsList="nodownload noplaybackrate"
            controls
            width={700}
            src={src}
          />
        );
      case "audio":
        return <audio src={src} />;
      case "image":
        return <img alt="" src={src} />;
      default:
        return null;
    }
  };
  return (
    <div className="question-option-container">
      {cardData.media && (
        <div className="media-container">
          {getMedia(cardData.media.type, cardData.media.src)}
        </div>
      )}
      <h2>Question Description</h2>
      <p className="question">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <br />
      {cardData.questions.map((item, index) => (
        <>
          {cardData.questions.length > 1 && <h2>{`${index + 1}. Question`}</h2>}
          <p className="question">{item.question}</p>
          <div className="option-container">
            {item.options.map((option, index) => (
              <span
                key={index}
                className={`option ${option.isCorrect ? "active" : ""}`}
              >
                {option.option}
              </span>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}

export default QuestionPreview;

QuestionPreview.defaultProps = {
  cardData: [],
};

QuestionPreview.propTypes = {
  cardData: propTypes.array,
};
