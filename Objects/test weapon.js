//
//const trailLength = 420;
//const trailOpacity = 0.01;
//
//const trailPositions = [];
//
//function drawTrail() {
//  for (let i = 0; i < trailPositions.length; i++) {
//    c.save();
//    c.translate(trailPositions[i].x, trailPositions[i].y);
//
//    const rotationAngle = (i * Math.PI) / 30;
//    grade += 1;
//    c.rotate(grade);
//
//    c.fillStyle = `rgba(50, 120, 160, ${1 - i / trailLength - 0.2})`;
//    c.beginPath();
//    c.fillRect(0, 0, 10, 50);
//    c.fill();
//
//    c.restore();
//  }
//}
//
//function updateTrail(position) {
//  trailPositions.unshift(position);
//
//  if (trailPositions.length > trailLength) {
//    trailPositions.pop();
//  }
//}
