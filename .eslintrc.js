module.exports = {
    "extends": "airbnb",
    "plugins": [
        "mocha",
        "chai"
      ],
      "rules": {
        "mocha/no-exclusive-tests": "error",
        "import/prefer-default-export": 0
      }
};
