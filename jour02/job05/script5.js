const footer = document.getElementById ('footer');

window.addEventListener("scroll", function() {

    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;



    footer.style.backgroundColor = `rgba(0, 255, 255, ${scrollPercentage / 100})`;
})
