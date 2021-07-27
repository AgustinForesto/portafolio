export function smartVideo() {
    const $videos = document.querySelectorAll("video[data-smart-video");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                entry.isIntersecting ? entry.target.play() : entry.target.pause();

                window.addEventListener("visibilitychange", e => {
                    if (document.visibilityState === "visible") {
                        entry.isIntersecting ? entry.target.play() : entry.target.pause();
                    } else {
                        entry.target.pause();
                    }
                });
            })
        }, { threshold: [0.5, 0.6] }
    );

    $videos.forEach(el => observer.observe(el))
}