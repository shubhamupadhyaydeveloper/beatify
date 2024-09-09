module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    'nativewind/babel',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@shared': './src/shared',
          "@assets" : "./assets",
          "@types" : "./src/types",
          "src" : "./src",
          "@constant" : "./src/constant"
        },
      },
    ],
  ],
};
