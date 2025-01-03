function compareOutputs(original, expected) {
    if (original.trim() === expected.trim()) {
        return true;
    } else {
        return false;
    }
}
module.exports = { compareOutputs };