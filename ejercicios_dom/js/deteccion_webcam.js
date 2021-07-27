export function webCam() {
    const $video = document.querySelectorAll(".webcam");

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
            .getUserMedia({
                video: {
                    width: 300,
                    height: 150
                },
                audio: false
            })
            .then((stream) => {
                console.log(stream)

                $video.forEach(el => {
                    el.srcObject = stream;

                    el.controls = true;

                    el.play();
                });
            })
            .catch((err) => {
                $video.forEach(el => {
                    el.insertAdjacentHTML("beforebegin", `<p><mark>${err}</mark></p>`);
                });
            });
    }
}