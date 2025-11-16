module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // ESTA LINHA É ESSENCIAL PARA O REANIMATED:
      'react-native-reanimated/plugin',
    ],
  };
};