import React from 'react';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <div id="home" className="tab active">
      <hgroup>
        <h2>Welcome to Mythren</h2>
        <h3>The Legends Unfolded</h3>
      </hgroup>
      <p>Explore the mystical world of Mythren, where legends come to life and adventures await. Meet the powerful characters, discover the rich cultures, and delve into the intricate politics of this fantastical realm.</p>
    </div>
    <div id="characters" className="tab">
      <hgroup>
        <h2>Characters</hgroup>
        <h3>Meet the Heroes</h3>
      </hgroup>
      <p>Detailed descriptions of the key characters in the world of Mythren.</p>
      <section>
        <hgroup>
          <h3>Sen Baelion</h3>
          <h4>Highelf (Magnus)</h4>
        </hgroup>
        <p>[Character Description for Sen Baelion]</p>
        <figure>
          <img src="billeder/sen-baelion.webp" alt="Sen Baelion" />
          <figcaption>Sen Baelion</figcaption>
        </figure>
      </section>
      <section>
        <hgroup>
          <h3>Ωlaut Dawnbringer</h3>
          <h4>Dragonborn (Thomas)</h4>
        </hgroup>
        <p>[Character Description for Ωlaut Dawnbringer]</p>
        <figure>
          <img src="billeder/olaut-dawnbringer.webp" alt="Ωlaut Dawnbringer" />
          <figcaption>Ωlaut Dawnbringer</figcaption>
        </figure>
      </section>
      <section>
        <hgroup>
          <h3>Zephyrian Emberleaf</h3>
          <h4>Firbolg (Nicklas)</h4>
        </hgroup>
        <p>[Character Description for Zephyrian Emberleaf]</p>
        <figure>
          <img src="billeder/zephyrian-emberleaf.webp" alt="Zephyrian Emberleaf" />
          <figcaption>Zephyrian Emberleaf</figcaption>
        </figure>
      </section>
    </div>
    <div id="npcs" className="tab">
      <hgroup>
        <h2>NPCs</h2>
        <h3>Meet the Non-Player Characters</h3>
      </hgroup>
      <p>Detailed descriptions of the key NPCs in the world of Mythren.</p>
      <section>
        <hgroup>
          <h3>Kong Alaric af Aldoria</h3>
          <h4>The Noble King</h4>
        </hgroup>
        <p>Kong Alaric af Aldoria, en ædel og majestætisk konge kendt for sin visdom og retfærdighed. Han regerer over Aldoria med en fast, men retfærdig hånd, og søger altid at beskytte sit folk.</p>
        <figure>
          <img src="billeder/king-alaric.webp" alt="King Alaric" />
          <figcaption>Konge Alaric af Aldoria</figcaption>
        </figure>
      </section>
      <section>
        <hgroup>
          <h3>Elarion (High Elver, Konge)</h3>
          <h4>The Elven King</h4>
        </hgroup>
        <p>Elarion er den vise og ædle konge af de høje elvere i Eryndor. Han er kendt for sin retfærdighed og dybe forbindelse til naturens magi.</p>
        <figure>
          <img src="billeder/elarion.webp" alt="Elarion" />
          <figcaption>Elarion</figcaption>
        </figure>
      </section>
      <section>
        <hgroup>
          <h3>Selandriel (High Elver, Rådgiver)</h3>
          <h4>The Wise Counselor</h4>
        </hgroup>
        <p>Selandriel er en klog rådgiver til Elarion. Hun er en mester i magi og kendt for sin strategiske tænkning.</p>
        <figure>
          <img src="billeder/selandriel.webp" alt="Selandriel" />
          <figcaption>Selandriel</figcaption>
        </figure>
      </section>
    </div>
    <div id="world" className="tab">
      <hgroup>
        <h2>World</h2>
        <h3>Explore the Realms</h3>
      </hgroup>
      <p>Discover the diverse landscapes and cultures of Mythren, from enchanted forests to majestic cities.</p>
      <section>
        <hgroup>
          <h3>Enchanted Forest</h3>
        </hgroup>
        <p>The Enchanted Forest is a magical place where mystical creatures and ancient trees thrive. It's a place of wonder and mystery, filled with glowing plants and a crystal-clear river.</p>
        <figure>
          <img src="billeder/enchanted-forest.webp" alt="Enchanted Forest" />
          <figcaption>Enchanted Forest</figcaption>
        </figure>
      </section>
      <section>
        <hgroup>
          <h3>Dwarven City</h3>
        </hgroup>
        <p>The Dwarven City is a grand underground metropolis, renowned for its intricate architecture and glowing forges. It's a place of great history and craftsmanship.</p>
        <figure>
          <img src="billeder/dwarven-city.webp" alt="Dwarven City" />
          <figcaption>Dwarven City</figcaption>
        </figure>
      </section>
    </div>
    <div id="politics" className="tab">
      <hgroup>
        <h2>Politics</h2>
        <h3>The Power Dynamics</h3>
      </hgroup>
      <p>Understand the intricate political landscape of Mythren, where powerful leaders and cunning diplomats shape the fate of the realms.</p>
      <section>
        <hgroup>
          <h3>Diplomatic Hall</h3>
        </hgroup>
        <p>The Diplomatic Hall is where key decisions are made. It's a place where leaders from different realms come together to discuss and negotiate the future of Mythren.</p>
        <figure>
          <img src="billeder/diplomatic-hall.webp" alt="Diplomatic Hall" />
          <figcaption>Diplomatic Hall</figcaption>
        </figure>
      </section>
    </div>
    <div id="contact" className="tab">
      <hgroup>
        <h2>Contact</h2>
        <h3>Get in Touch</h3>
      </hgroup>
      <p>Contact us for more information or any inquiries about the world of Mythren.</p>
    </div>
  </Layout>
);

export default IndexPage;
