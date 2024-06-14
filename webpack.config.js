const { getThemeVariables } = require("antd/dist/theme");

module.exports = {
	// other configurations...
	module: {
		rules: [
			{
				test: /\.less$/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "less-loader",
						options: {
							lessOptions: {
								modifyVars: getThemeVariables({
									dark: true,
								}),
								javascriptEnabled: true,
							},
						},
					},
				],
			},
		],
	},
};
