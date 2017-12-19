module.exports = {
  entry:["whatwg-fetch","./js/index.jsx"], //plik wejściowy
  output: {
      filename: "./js/out.js" //plik wyjściowy
  },
  devtool: "#eval-source-map",
  watch: true,
  module: {
      loaders: [
        {
          test:	/\.jsx$/,
					exclude:	/node_modules/,
					loader:	'babel-loader',
					query:	{
					    presets:	['es2015','stage-2', 'react' ]
					}
        }
      ]
  },
  devServer:	{
				inline:	true,
				contentBase:	'./',
				port:	3001
	}
};
