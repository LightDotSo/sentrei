export const css = string => {
  return string;
};

export const getCommonCSS = () => {
  return css`
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

    body {
      background: white;
      color: black;
      background-size: 100px 100px;
      height: 100vh;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      font-family: "Inter", sans-serif;
      font-weight: 400;
      font-size: 100px;
      margin: 0;
      padding: 0;
    }

    * {
      box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    p {
      margin: 0;
    }

    code {
      color: #d400ff;
      font-family: "Vera";
      white-space: pre-wrap;
      letter-spacing: -5px;
    }

    code:before,
    code:after {
      content: "\`";
    }
  `;
};
