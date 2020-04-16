# Criando um projeto react "na mão"

`yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli babel-loader -D`

Babel e webpack como dependencias de desenvolvimento

`yarn add react react-dom`

React e o react-dom como dependencias do projeto

## Babel config

```js
module.exports = {
    presets: [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
}
```
- converte javascript moderno para javscript de navegadores
- transforma funcionalidades do react como JSX para o navegador

## Webpack

Configurações para buildar o projeto em um `bundle.js`

## Rodar o projeto em server

`yarn add webpack-dev-server -D`

Script: `webpack-dev-server --mode development`

## Import css

rule no `webpack.config.js`

```js
{
  test: /\.css$/,
  use: [
    { loader: 'style-loader' },
    { loader: 'css-loader' }
  ]
}
```