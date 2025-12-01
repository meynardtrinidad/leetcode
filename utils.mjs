/**
 * @param {() => void} callback
 * @param {string} mode
 */
export const test = (callback, mode = "run") => {
  if (mode === "run") {
    callback()
  }
}

test.skip = function (callback) {
  test(callback, "skip")
}
