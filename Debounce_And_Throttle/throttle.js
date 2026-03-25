function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
}

function sendChatMessage(msg) {
  console.log(`Sending Msg ${msg}`);
}

const sendChatMessageWithSlowMode = throttle(sendChatMessage, 2000);
sendChatMessageWithSlowMode("Hii");
sendChatMessageWithSlowMode("Hello");
sendChatMessageWithSlowMode("Hello Yuvraj");
sendChatMessageWithSlowMode("Hello Yuvraj ji");
