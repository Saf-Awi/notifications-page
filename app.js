const readBtn = document.getElementById("mark-read");
const spanNumber = document.getElementById("notifications-number");
const notifDot1 = document.querySelector(".unread-notif-1");
const notifDot2 = document.querySelector(".unread-notif-2");
const notifDot3 = document.querySelector(".unread-notif-3");
const unreadRow1 = document.querySelector(".unread-1");
const unreadRow2 = document.querySelector(".unread-2");
const unreadRow3 = document.querySelector(".unread-3");

readBtn.addEventListener('click', function() {

    spanNumber.textContent = "0";
    notifDot1.style.display = "none";
    notifDot2.style.display = "none";
    notifDot3.style.display = "none";
    unreadRow1.style.backgroundColor = "var(--clr-neutral-White)";
    unreadRow2.style.backgroundColor = "var(--clr-neutral-White)";
    unreadRow3.style.backgroundColor = "var(--clr-neutral-White)";

})

