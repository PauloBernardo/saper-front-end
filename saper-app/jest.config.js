module.exports = {
    moduleDirectories: ['node_modules', 'src'],
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    moduleNameMapper: {
    // https://jestjs.io/docs/webpack#mocking-css-modules
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    }
};

