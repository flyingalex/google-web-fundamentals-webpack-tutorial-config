import React from 'react';
import ReactDom from 'react-dom';
import '../css/comments';
import Flag from '../images/flag.png';
import OnePiece from '../images/one_piece.png';

import('./comments').then((comments) => {
  comments.render();
});

ReactDom.render(
  <div>
    <img alt="flag" src={Flag}/>
    <div className="comment">
      hello world
    </div>
    <img alt="one-piece" src={OnePiece}/>
  </div>,
  document.getElementById('app'),
);

