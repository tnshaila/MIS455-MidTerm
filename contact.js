function message() {
    var userName = document.getElementById("name").value;
    var msg =  `Dear ${userName}, your message is received`;

    document.getElementById("message").innerHTML = 
    `<h4>hello $(userName), your message is received.</h4>`;
}
