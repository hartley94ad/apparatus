// helper to print text-only formatted text

module.exports = function printChatText (toPrint) {
  const htmlElement = document.getElementById('chat-area-id')
  const span = document.createElement('span')
  // if (from === 'user') {
  //   span.className = 'bubble user'
  // } else {
  //   span.className = 'bubble tool'
  // }
  span.className = 'bubble'
  const result = document.createTextNode(toPrint)
  span.appendChild(result)
  htmlElement.appendChild(span)
  htmlElement.lastChild.scrollIntoView(false)
}
