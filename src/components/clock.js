import React from 'react';

const Clock = ({ clock }) => (
  <section id="clock_static_content" class="watermark_background">
    <div class="container">
      <span class="watermark">{clock.currentDateTime}</span><br />
      <span class="watermark_small">{clock.currentFileTime}</span>
    </div>
  </section>
);

export default Clock;