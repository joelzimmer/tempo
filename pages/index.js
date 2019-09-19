import React from 'react'
import Head from 'next/head'

const Home = () => (
  <div>
    <Head>
      <title>Tempo</title>
    </Head>

    <div className='row'>
      <div>
        <label>Eccentric</label>
        <input id="eccentric" type="range" name="eccentric" min="0" max="10" value="0" />
      </div>
      <div>
        <label>Bottom</label>
        <input id="bottom-pause" type="range" name="bottom-pause" min="0" max="10" value="0" />
      </div>
      <div>
        <label>Concentric</label>
        <input id="concentric" type="range" name="concentric" min="0" max="10" value="0" />
      </div>
      <div>
        <label>Top</label>
        <input id="top-pause" type="range" name="top-pause" min="0" max="10" value="0" />
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
