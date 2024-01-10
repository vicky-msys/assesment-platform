/* eslint-disable jsx-a11y/media-has-caption */
import { Col } from "antd";
import React, { useEffect, useRef, useState } from "react";
import CaptureIcon from "@app/assets/icons/capture-icon.svg";
import "./style.scss";

const WebCamPage = () => {
  const [isSnapEmpty, setIsSnapEmpty] = useState(true);
  const [isSnapped, setIsSnapped] = useState(false);
  const [imgData, setImgData] = useState(null);
  const videoRef = useRef(null);
  // const photoRef = useRef(null);
  // const stripRef = useRef(null);
  const countRef = useRef(null);
  const streamRef = useRef(null);
  //const [stream, setStream] = useState(null);
  useEffect(() => {
    if (videoRef.current && !isSnapEmpty) {
      getVideo();
    }
  }, [videoRef, isSnapEmpty]);

  useEffect(() => {
    return () => {
      stopStream();
    };
  }, []);
  function stopStream() {
    if (streamRef.current.active) {
      streamRef.current.stop();
    }
  }
  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then((stream) => {
        stream.stop = function () {
          clearInterval(countRef.current);
          this.getTracks().forEach(function (track) {
            track.stop();
          });
        };
        streamRef.current = stream;
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };

  const paintToCanvas = () => {
    // let video = videoRef.current;
    // let photo = photoRef.current;
    // let ctx = photo.getContext("2d");
    // const width = 320;
    // const height = 320;
    // photo.width = width;
    // photo.height = height;
    // countRef.current = setInterval(() => {
    //   ctx.drawImage(video, 0, 0, width, height);
    // }, 100);
  };

  function openWebCam() {
    setIsSnapEmpty(false);
  }

  const retakePhoto = () => {
    setIsSnapped(false);
    getVideo();
  }

  const takePhoto = () => {
    let video = videoRef.current;
    // const width = 280;
    // const height = 160;
    // let photo = photoRef.current;
    // let ctx = photo.getContext("2d");
    // ctx.drawImage(videoRef.current, 0, 0, width, height);
    var canvas = document.createElement("canvas");
    canvas.width  = 280;
    canvas.height = 160;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    var dataURI = canvas.toDataURL("image/jpeg");


    //let strip = stripRef.current;
    //const data = photo.toDataURL("image/jpeg");
    setIsSnapped(true);
    setImgData(dataURI);
    //setIsSnapEmpty(true);
    stopStream();
    // const link = document.createElement("a");
    // link.href = data;
    // link.setAttribute("download", "myWebcam");
    // link.innerHTML = `<img src='${data}' alt='thumbnail'/>`;
    // strip.insertBefore(link, strip.firstChild);
  };
  return (
    <div className="container">
      <Col className="capture-box">
        <div className="capture-title">Capture Live Photo</div>
        <div className="icon-box" onClick={openWebCam}>
          {isSnapEmpty ? (
            <div className="capture-icon">
              <CaptureIcon />
            </div>
          ) : (
            <div className="webcam-video">
              {isSnapped?<img className="img-class" src={imgData} alt='thumbnail'/>:
                      <video
                      // onCanPlay={() => paintToCanvas()}
                      ref={videoRef}
                      className="player"
                      />}
              <div>
                {/* <canvas ref={photoRef} className="photo" /> */}
                {/* <div className="photo-booth">
                  <div ref={stripRef} className="strip" />
                </div> */}
              </div>
            </div>
          )}
        </div>
        {isSnapped && <button onClick={retakePhoto}>Retake</button>}
        {!isSnapEmpty && !isSnapped && <button onClick={takePhoto}>Take Snap</button>}
        <h5 className="note-label">
          <b>Note: </b>Capture A Quality Photo
        </h5>
      </Col>
    </div>
  );
};

export default WebCamPage;
