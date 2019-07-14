module.exports = api => {
  api.cache(true);

  const presets = ['next/babel'];

  const plugins = [
    [
      'module-resolver',
      {
        root: ["./"],
        alias: {
          '^react-native$': 'react-native-web',
        },
      },
    ],
  ];

  return { plugins, presets };
};