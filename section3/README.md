# TypeScriptの設定とコンパイラ

## TypeScriptのコンパイル

- 1ファイルのみであれば、以下のコマンドでコンパイル可能

  ```bash
  tsc <ファイル名>
  ```

- 毎回コンパイルするのは面倒なので、以下のオプションをつけて実行すると、ファイルに変更がある度に自動コンパイルする

  ```bash
  tsc <ファイル名> --watch（-w）
  ```

- 複数ファイルをコンパイルする場合、プロジェクトのルートフォルダで以下を実行する
  - このコマンドの実行により、`tsconfig.json`が作成される

  ```bash
  tsc --init
  ```

  - すると、以下のコマンドのみで全TypeScriptファイルをコンパイルできる

  ```bash
  tsc --watch（-w）
  ```

## `tsconfig.json`について

|オプションの種類|オプション名|概要|備考|
|--------------|--------------|----------------|--------------------|
|基本のオプション|`target`|tsファイルをどのバージョンのjsファイルにコンパイルするかを指定する値|・`ES5`ではまた`const`や`let`がないので、tsファイルでそれが使用されていた場合は`var`に変換される。<br>・`ES6`ではそれがあるので、そのまま`const`や`let`を使ったまま、コンパイルされる|
||`module`|||
||`lib`|これを何もしてない場合、`target`にしているバージョンの機能が全て使えるようになる||
||`allowJs`|jsファイルもコンパイル対象にできる||
||`checkJs`|jsファイルのコンパイルはしないが、チェックをしてくれる（tsの機能をjsで使いたい場合）||
||`jsx`|Reactを使用する場合に必要になる||
||`declaration`|ライブラリを公開する場合に使用する||
||`sourceMap`|ブラウザのdev toolsのSourceでコードをみる場合に、jsファイルだけではなく、tsファイルも表示できる（デバッグもできるので、デバッグに役立つ）|Debugger for Chromeのvscode拡張機能により、vscode上でもこのオプションと同じことができるようになる|
||`outDir`|javascriptのファイル出力先||
||`rootDir`|ソースが配置されるルートのフォルダの指定|ここで指定したフォルダがコンパイル対象になる。|
||`removeComments`|コンパイルしたjsファイルからコメントを削除する。それによって、ファイルサイズを小さくすることができる。||
||`noEmitOnError`|エラーの場合にjsファイルを出力しない|何か他のファイルにエラーがある場合は、エラーがないファイルのjsファイルも出力されない|
|厳格な型チェックのオプション|`strict`|厳格な型チェックを行う。strict以下のチェックが全てtrueになっていのと同じ。||
||`noImplicitAny`|typescriptが型を推測できず、Anyになっていることをチェックする||
||`strictNullChecks`|nullの可能性があるオブジェクトにアクセスする場合に、nullの可能性が排除できない場合は、エラーを表示する||
||`strictFunctionTypes`|関数の型に関して厳格にチェックする。戻り値や引数など。||
||`strictBindCallApply`|bind()、call()、apply()が使用された場合に、引数がオリジナルの関数と合致しているかをチェックする||
||`alwaysStrict`|jsファイルを出力する場合に、必ず`use strict;`を記載する||
|追加のオプション|`noUnusedLocals`|利用されていないローカル変数を許可しない|グローバル変数はチェックしない|
||`noUnusedParameters`|利用されていない引数を許可しない||
||`noImplicitReturns`|関数の中に分岐がある場合に、returnがない分岐がある場合にエラーになる||

## その他役に立つもの

- `lite-server`：ファイルの変更を検知して、自動でローカルサーバを再起動する
  - `npm install -D lite-server`でインストールする