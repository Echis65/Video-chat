import React, { useEffect } from "react";
import axios from "axios";

export default function Video({ match }) {
  const id = match.params.id;

  useEffect(() => {
    //replace with your username
    const domain = "https://vixion.daily.co/";

    axios
      .get(`/video-call/${id}`)
      .then((res) => {
        if (res.status === 200) {
          const script = document.createElement("script");
          script.innerHTML = `window.DailyIframe.createFrame({
            iframeStyle: {
              position: "relative",
              width: "100%",
              height: "100%",
              border: "0",
              zIndex: 9999
            },
            showLeaveButton: true,
            showFullscreenButton: true,
          }).join({
            url: "${domain}${id}",
          });`;

          document.body.appendChild(script);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  return <div></div>;
}
