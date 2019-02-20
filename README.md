# メモ
- `yarn add tsc --init`
- `"allowJs": true`でjsも含められるようにする
- `yarn tsc src/index.ts`で同階層にコンパイルされたjsファイルが作られる
- `yarn tsc -p .`で、`.`以下のtsファイル全部コンパイルする

# 疑問
- libに`esnext`が最初から適用されていないのはなぜ？
- undefinedの場合みたいに、値が入ってない場合の初期値を orかifでやるけど、どっちがどういう場合に使われる？他にも方法ある？
- interfaceの命名規則