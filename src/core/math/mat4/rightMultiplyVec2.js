  const fromValues = require('../vec2/fromValues')
  // Right multiply the matrix by a Vector2 (interpreted as 2 row, 1 column)
  // (result = M*v)
  // Fourth element is taken as 1
  function rightMultiplyVec2 (matrix, vector) {
    const [v0, v1] = vector
    let v2 = 0
    let v3 = 1
    let x = v0 * matrix[0] + v1 * matrix[1] + v2 * matrix[2] + v3 * matrix[3]
    let y = v0 * matrix[4] + v1 * matrix[5] + v2 * matrix[6] + v3 * matrix[7]
    let w = v0 * matrix[12] + v1 * matrix[13] + v2 * matrix[14] + v3 * matrix[15]

    // scale such that fourth element becomes 1:
    if (w !== 1) {
      let invw = 1.0 / w
      x *= invw
      y *= invw
    }
    return fromValues(x, y)
  }

  module.exports = rightMultiplyVec2