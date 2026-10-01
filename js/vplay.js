document.querySelectorAll("[name=vplay]").forEach((ele) => {
  ele.addEventListener("click", (event) => {
    console.log(event.target);

    // 왜 안나오는 것인가..
    // console.log(event.target.dataset["data-media-src"]);

    // 두 개 같음
    // console.log(event.target.getAttribute("data-media-src"));
    console.log(event.target.dataset.mediaSrc);

    const video = document.querySelector("#video");

    video.setAttribute("src", event.target.dataset.mediaSrc);
    video.setAttribute("autoplay", true);
  });
});

document.querySelectorAll("[name=cartinsert]").forEach((ele) => {
  ele.addEventListener("click", (event) => {
    // console.log(event.target.getAttribute("data-info"));
    console.log(event.target.id);
    console.log(event.target.dataset.info);
    //localStorage로 저장
    localStorage.setItem(event.target.id, event.target.dataset.info);
  });
});
