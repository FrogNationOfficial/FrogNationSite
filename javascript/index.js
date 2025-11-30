
document.getElementById("aboutDiv").hidden = true


document.getElementById("aboutButton").onclick = function () {
    if (document.getElementById("aboutDiv").hidden == true) {
        console.log("Abouted")
        document.getElementById("aboutDiv").hidden = false
    } else {
        document.getElementById("aboutDiv").hidden = true
    }
}