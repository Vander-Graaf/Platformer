function Animation(self) {
  c.drawImage(
    self.image,
    self.framesCurrent * (self.image.width / self.framesMax) + self.alignX,
    self.alignY,
    self.image.width / self.framesMax,
    self.image.height,
    self.position.x,
    self.position.y,
    (self.image.width / self.framesMax) * self.scale,
    self.image.height * self.scale
  );

  //// Change the color by setting the global composite operation and drawing a semi-transparent color over the image
  //c.globalCompositeOperation = "white";
  //c.fillStyle = "rgba(255, 255, 255, 0.5)"; // Change to desired color and opacity
  //c.fillRect(self.position.x, self.position.y, self.width, self.height);
  //
  //// Reset the global composite operation
  //c.globalCompositeOperation = "source-over";
}
