module.exports = async () => {
  return {
    rootDir: "./",
    preset: "jest-expo",
    setupFiles: ["<rootDir>/jest/setup.ts"],
    transformIgnorePatterns: [
      "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
    ],
    setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  };
};