function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var lower = whisper(string)
  var upper = shout(string)
  if(string === lower){
    return "I can\'t hear you."
  } else if(string === upper) {
    return "YES INDEED!"
  } else if (string === )
}