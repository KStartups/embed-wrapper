const url = new URL(location.href)

const roomUrl = new URL("https://coldy.whereby.com/yesyes6ee8c32f-5072-47c8-91e1-7117b2075ae9")
roomUrl.pathname = url.pathname
roomUrl.search = url.search

const root = document.getElementById("root")
const whereby = document.createElement("whereby-embed")
whereby.setAttribute("room", roomUrl.href)
whereby.setAttribute("minimal", true)
whereby.setAttribute("style", "height: 100%;")
root.appendChild(whereby)
