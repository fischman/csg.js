module.exports = squaredDistance

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance (a, b) {
  let x = b[0] - a[0]
  let y = b[1] - a[1]
  let z = b[2] - a[2]
  return x * x + y * y + z * z
}
