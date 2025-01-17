const url = new URL(location.href)

const roomUrl = new URL("https://coldy.whereby.com/")
roomUrl.pathname = url.pathname
roomUrl.search = url.search

const root = document.getElementById("root")
const whereby = document.createElement("whereby-embed")
whereby.setAttribute("room", roomUrl.href)
whereby.setAttribute("minimal", true)
whereby.setAttribute("style", "height: 100%;")
whereby.setAttribute("minimal", true)
whereby.setAttribute("screenshare", false)
whereby.setAttribute("background", false)
root.appendChild(whereby)
