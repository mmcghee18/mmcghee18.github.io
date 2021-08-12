<div class="header-container">
  <img src={"img/header-me.jpg"} alt="michelle" />
  <ul class="bio">
    <h1>Hi! I'm Michelle.</h1>
    <li>
      I love making complex topics visual and understandable. These days, I tell
      stories with data and code as a <strong>Journalist-Engineer</strong> at <a
        target="_blank"
        href="https://pudding.cool/">The Pudding.</a
      >
    </li>
    <li style="font-size: 16px">
      Say hi at <a
        target="_blank"
        href="https://mail.google.com/mail/u/0/?fs=1&to=michmac202@gmail.com&tf=cm"
        >michelle@pudding.cool</a
      >
      👋🏽
      <br />
      Or find me on
      <a target="_blank" href="https://github.com/mmcghee18">GitHub</a>
      or
      <a target="_blank" href="https://twitter.com/mich_mcghee">Twitter.</a>
    </li>
  </ul>
</div>

<style>
  .header-container {
    margin-bottom: 30px;
    text-align: center;
    font-size: 20px;
    display: flex;
    font-family: "Noto Serif";
  }
  li {
    display: block;
    text-align: start;
    margin-top: 20px;
  }
  h1 {
    text-align: start;
    font-family: "Noto Serif Bold";
  }
  strong {
    font-family: "Noto Serif Bold";
  }

  img {
    height: 250px;
    transform: rotate(-3deg);
    background: #ffffff;
    display: inline-block;
    margin: 55px 75px 30px;
    padding: 15px 15px 30px;
    text-align: center;
    text-decoration: none;
    -webkit-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    transition: all 0.2s linear;
    z-index: 0;
    position: relative;
  }

  .bio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    margin-right: 40px;
  }

  @media (max-width: 990px) {
    img {
      height: 200px;
      padding-bottom: 25px;
      margin: 55px 45px 30px;
    }
  }
  @media (max-width: 705px) {
    img {
      display: none;
    }
    .bio {
      margin-right: 0px;
    }
  }

  a {
    transition: background-position 80ms ease-out;
    background-image: linear-gradient(180deg, transparent 0, #d1e3f5 0);
    background-position: 0 0.9em;
    background-repeat: no-repeat;
    box-shadow: none;
    padding: 0;
    text-decoration: none;
    color: #333;
    pointer-events: all;
  }
  a:hover {
    color: #333;
    background-position: 0 0;
  }
</style>
