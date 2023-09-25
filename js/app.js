(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    window["FLS"] = true;
    isWebp();
    const sideMenu = document.querySelector("aside");
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const darkMode = document.querySelector(".dark-mode");
    menuBtn.addEventListener("click", (() => {
        sideMenu.style.display = "block";
    }));
    closeBtn.addEventListener("click", (() => {
        sideMenu.style.display = "none";
    }));
    darkMode.addEventListener("click", (() => {
        document.body.classList.toggle("dark-mode-variables");
        darkMode.querySelector("span:nth-child(1)").classList.toggle("active");
        darkMode.querySelector("span:nth-child(2)").classList.toggle("active");
    }));
    const Orders = [ {
        productName: "JavaScript Tutorial",
        productNumber: "85743",
        paymentStatus: "Due",
        status: "Pending"
    }, {
        productName: "CSS Full Course",
        productNumber: "97245",
        paymentStatus: "Refunded",
        status: "Declined"
    }, {
        productName: "Flex-Box Tutorial",
        productNumber: "36452",
        paymentStatus: "Paid",
        status: "Active"
    } ];
    Orders.forEach((order => {
        const tr = document.createElement("tr");
        const trContent = `\n      <td>${order.productName}</td>\n      <td>${order.productNumber}</td>\n      <td>${order.paymentStatus}</td>\n      <td class="${order.status === "Declined" ? "danger" : order.status === "Pending" ? "warning" : "primary"}">${order.status}</td>\n      <td class="primary">Details</td>\n   `;
        tr.innerHTML = trContent;
        document.querySelector("table tbody").appendChild(tr);
    }));
})();