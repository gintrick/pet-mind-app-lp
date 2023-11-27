import React from 'react';
import './App.css';

import homeImg from './images/home.png';
import resultImg from './images/result.png';
import appleQR from './images/QR_apple.png';
import androidQR from './images/QR_android.png';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>ペットの気持ちAI</h1>
      </header>
      <main>
        <section className='intro'>
          <h2>アプリの紹介</h2>
          <p>
            このアプリは、AI(ChatGPT)を使って動物の気持ちを読み解き、吹き出し形式で表示します。
          </p>
          <div className='introImages'>
            <img src={homeImg} alt='homeの画像' width='300px' />
            <img src={resultImg} alt='resultの画像' width='300px' />
          </div>
        </section>
        <section className='features'>
          <h2>特徴</h2>
          <ul>
            <li>AIによるユーモラスなセリフサジェスト</li>
            <li>ユーザーフレンドリーなインターフェース</li>
            <li>スマートフォンで簡単に利用可能</li>
          </ul>
        </section>
        <section>
          <h2>ダウンロード</h2>
          <p>iOS、androidアプリは下記よりダウンロードできます。</p>
          <div className='downloads'>
            <div className='download'>
              <img className='downloadQR' src={appleQR} alt='apple_qr' />
              <a
                className='downloadButton apple'
                href='https://apps.apple.com/jp/app/%E3%83%9A%E3%83%83%E3%83%88%E3%81%AE%E6%B0%97%E6%8C%81%E3%81%A1ai/id6471821040'
                target='_blank'
                rel='noreferrer'
              >
                App Store
              </a>
            </div>
            <div className='download'>
              <img className='downloadQR' src={androidQR} alt='android_qr' />
              <a
                className='downloadButton google'
                href='https://play.google.com/store/apps/details?id=com.gintrick.petmindapp'
                target='_blank'
                rel='noreferrer'
              >
                Google Play
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>
          © 2023 ペットの気持ちAI
          <a href='https://gintrick.com' target='_blank' rel='noreferrer'>
            GinTrick.inc
          </a>{' '}
          All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
