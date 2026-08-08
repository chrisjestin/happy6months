/**
 * Happy 6 Months, Ju — card interactions.
 * Two small, independent behaviors:
 *   1. Ambient floating hearts (purely decorative).
 *   2. Envelope open: reveals the letter and photo gallery.
 */

(function () {
  'use strict';

  function createAmbientHearts() {
    var container = document.getElementById('ambient');
    if (!container) return;

    var glyphs = ['♥', '❤'];
    var count = 14;

    for (var i = 0; i < count; i++) {
      var heart = document.createElement('span');
      heart.textContent = glyphs[i % glyphs.length];
      heart.style.left = (Math.random() * 100) + 'vw';
      heart.style.fontSize = (14 + Math.random() * 14) + 'px';
      heart.style.animationDuration = (10 + Math.random() * 10) + 's';
      heart.style.animationDelay = (Math.random() * 14) + 's';
      container.appendChild(heart);
    }
  }

  function initEnvelope() {
    var scene = document.getElementById('envelope-scene');
    var seal = document.getElementById('seal');
    var envelope = document.getElementById('envelope');
    if (!scene || !seal || !envelope) return;

    function open() {
      if (scene.classList.contains('open')) return;
      scene.classList.add('open');
      seal.setAttribute('aria-expanded', 'true');
    }

    seal.addEventListener('click', function (event) {
      event.stopPropagation();
      open();
    });

    envelope.addEventListener('click', open);
  }

  document.addEventListener('DOMContentLoaded', function () {
    createAmbientHearts();
    initEnvelope();
  });
})();
