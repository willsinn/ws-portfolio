import React from "react";

export const welloGif = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "0",
        paddingBottom: "50%",
        position: "relative",
      }}
    >
      <iframe
        src="https://giphy.com/embed/QumUxkJhbiYlQF4F9L"
        title="unique"
        width="100%"
        height="100%"
        style={{ position: "absolute" }}
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
    </div>
  );
};
