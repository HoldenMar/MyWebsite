document.addEventListener("DOMContentLoaded", function(){
    let footer = document.createElement("footer");
    footer.className = "footer";
    let br = document.createElement("br");
    let footerLinksDiv = document.createElement("div");
    footerLinksDiv.className = "footer-links";
    let links = [
        { icon: "fa fa-home", id: "Home", href: "index.html", text: "Home"},
        { icon: "fa fa-file", id: "Resume", href: "resume.html", text: "Resume"},
        { icon: "fa fa-envelope", id: "Cover Letter", href: "coverletter.html", text: "Cover Letter"},
        { icon: "fa fa-certificate", id: "Certificates", href: "certificates.html", text: "Certificates"},
        { icon: "fa fa-envelope", id: "recommendationletters", href: "recommendationletters.html", text: "Recommendation Letters"},
        { icon: "fa fa-file-text", id: "careeractionplan", href: "careeractionplan.html", text: "Career Action Plan"},
        { icon: "fa fa-camera", id: "vocationalevidence", href: "vocationalevidence.html", text: "Projects"},
    ]
    links.forEach(function (linkInfo) {
        let link = document.createElement("p");
        link.className = "link";
        link.id = linkInfo.id;
        link.innerHTML = '<a href="' + linkInfo.href + '" ><i class="' + linkInfo.icon + '"></i> ' + linkInfo.text + '</a>';
        footerLinksDiv.appendChild(link);
      });
    footer.appendChild(footerLinksDiv);
    document.body.appendChild(br); 
    document.body.appendChild(footer);
});

