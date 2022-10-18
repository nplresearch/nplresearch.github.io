export function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function initPoints(scale) {
  const x = (Math.random() * scale + Math.random() * scale) / 2 - scale / 2;
  const y = (Math.random() * scale + Math.random() * scale) / 2 - scale / 2;
  const z = (Math.random() * scale + Math.random() * scale) / 2 - scale / 2;
  return [x, y, z];
}

export function vectorNorm(x, y, z) {
  var length = Math.sqrt(x * x + y * y + (z - 15) * (z - 15));
  return length;
}


export function lorenz(x, y, z, dt = 0.0015) {
  //Lorenz
  const sigma = 10.0;
  const rho = 28.0;
  const beta = 8.0 / 3.0;
  const dx = sigma * (y - x) * dt;
  const dy = (x * (rho - z) - y) * dt;
  const dz = (x * y - beta * z) * dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;
  return [x, y, z];
}

export function halvoresen(x, y, z, dt = 0.01) {
  //Halvorsen
  const a = 1.4;
  const dx = (-a * x - 4 * y - 4 * z - y * y) * dt;
  const dy = (-a * y - 4 * z - 4 * x - z * z) * dt;
  const dz = (-a * z - 4 * x - 4 * y - x * x) * dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;
  return [x, y, z];
}

export function aizawa(x, y, z, dt = 0.004) {
  //Aizawa
  const a = 0.95;
  const b = 0.7;
  const c = 0.6;
  const d = 3.5;
  const e = 0.25;
  const f = 0.1;

  const dx = ((z - b) * x - d * y) * dt;
  const dy = (d * x + (z - b) * y) * dt;
  const dz =
    (c +
      a * z -
      (z * z * z) / 3 -
      (x * x + y * y) * (1 + e * z) +
      f * z * x * x * x) *
    dt;

  x = x + dx;
  y = y + dy;
  z = z + dz;
  return [x, y, z];
}
